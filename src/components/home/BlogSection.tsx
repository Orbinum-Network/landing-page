import { useEffect, useState } from "react";
import axios from "axios";
import { BlogArticle } from "./BlogArticle";
import { FEED_URL } from "@/config";
import { BlogArticleSkeleton } from "./BlogArticleSkeleton";
import { SectionLayout } from "@/layout";
import { SectionTitle } from "../common";

export function BlogSection() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.rss2json.com/v1/api.json', {
                    params: {
                        rss_url: FEED_URL,
                    },
                });
                const articles = response.data.items.slice(0, 3).map((item: any) => {
                    let imageUrl = item.thumbnail;

                    if (!imageUrl) {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(item.content, "text/html");
                        const firstImage = doc.querySelector("img");
                        imageUrl = firstImage ? firstImage.src : "";
                    }

                    return {
                        title: item.title,
                        url: item.link,
                        date: item.pubDate,
                        image: imageUrl,
                    }
                });
                setPosts(articles);
            } catch (error: any) {
                console.error("Error fetching Medium feed:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return (
            <section className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 py-16">
                <div className="container mx-auto">
                    <h2 className="text-white text-3xl md:text-5xl font-extrabold pb-4">
                        Explore Our Latest Insights
                    </h2>
                    <p className="text-white text-lg md:text-xl pb-6">
                        Oops! Something went wrong. Please try again later.
                    </p>
                </div>
            </section>
        );
    }

    return (
        <SectionLayout>
            <SectionTitle title="Discover Insights & Stories" titleTwo="Explore Our Blog" />
            <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
                {loading ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="animate-pulse">
                            <BlogArticleSkeleton />
                        </div>
                    ))
                ) : (
                    posts.map((post, index) => (
                        <BlogArticle key={index} post={post} />
                    ))
                )}
            </div>
        </SectionLayout>
    );
}