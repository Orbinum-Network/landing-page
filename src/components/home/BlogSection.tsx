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
                if (response.data.items.length > 0) {
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
                        };
                    });
                    setPosts(articles);
                } else {
                    setPosts([]);
                }
            } catch (error: any) {
                console.error("Error fetching Medium feed:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

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
                ) : error || posts.length === 0 ? (
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center text-center">
                        <p className="text-lg md:text-xl text-gray-300">
                            {error
                                ? "We encountered an issue retrieving the latest posts. Please try again later."
                                : "No articles available at the moment. Stay tuned for upcoming content."}
                        </p>
                    </div>
                ) : (
                    posts.map((post, index) => <BlogArticle key={index} post={post} />)
                )}
            </div>

            <div className="mt-16 flex justify-center">
                <a
                    href="https://medium.com/@orbinumnetwork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-lg font-medium text-white border border-gray-500 rounded-lg transition duration-300 hover:bg-gray-700 hover:border-gray-400"
                >
                    Visit Our Blog →
                </a>
            </div>
        </SectionLayout>
    );
}