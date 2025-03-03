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
            <SectionTitle styleColor="black" sectionType="Blog" title="Discover Insights & Stories" titleTwo="Explore Our Blog" />
            <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
                {loading ? (
                    Array.from({ length: 3 }).map((_, index) => (
                        <div key={index} className="animate-pulse">
                            <BlogArticleSkeleton />
                        </div>
                    ))
                ) : error || posts.length === 0 ? (
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center text-center">
                        <p className="text-lg md:text-xl text-secondary-300">
                            {error
                                ? "We encountered an issue retrieving the latest posts. Please try again later."
                                : "No articles available at the moment. Stay tuned for upcoming content."}
                        </p>
                    </div>
                ) : (
                    posts.map((post, index) => <BlogArticle key={index} post={post} />)
                )}
            </div>

            <div className="mt-16 flex justify-center gap-2 flex-wrap">
                <a
                    href="https://orbinumnetwork.medium.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-md font-medium text-white border border-secondary-500 rounded-lg transition duration-300 hover:bg-secondary-700 hover:border-secondary-400"
                >
                    Visit Our Blog →
                </a>
                <a
                    href="https://orbinumnetwork.medium.com/subscribe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-md font-medium text-white border border-secondary-500 rounded-lg transition duration-300 hover:bg-secondary-700 hover:border-secondary-400"
                >
                    Subscribe Now
                </a>
            </div>

        </SectionLayout>
    );
}