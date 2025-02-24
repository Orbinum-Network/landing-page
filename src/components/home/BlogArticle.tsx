import { BlogArticleProps } from "@/interfaces";
import { Link } from "react-router";

export const BlogArticle = ({ post }: BlogArticleProps) => {
    return (
        <Link to={post.url} target="_blank" className="group relative overflow-hidden rounded-lg">
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(to bottom, #00000000 0%, rgba(0, 0, 0, 0.6) 80%, black 100%)`,
                    backgroundBlendMode: "overlay",
                }}
            ></div>
            <img
                alt={post.title}
                src={post.image}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                    <time
                        dateTime={post.date}
                        className="block text-xs text-white/90"
                    >
                        {new Date(post.date).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                        })}
                    </time>

                    <h3 className="mt-0.5 text-lg md:text-2xl text-white font-bold">
                        {post.title}
                    </h3>
                </div>
            </div>
        </Link>
    );
};
