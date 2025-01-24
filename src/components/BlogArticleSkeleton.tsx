export const BlogArticleSkeleton = () => {
    return (
        <div className="relative overflow-hidden rounded-lg bg-gray-800 animate-pulse">
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(to bottom, #00000000 0%, rgba(0, 0, 0, 0.6) 80%, black 100%)`,
                    backgroundBlendMode: "overlay",
                }}
            ></div>

            <div className="absolute inset-0 h-full w-full bg-gray-700"></div>

            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                    <div className="h-4 w-20 bg-gray-600 rounded"></div>
                    <div className="mt-2 h-6 w-3/4 md:w-1/2 bg-gray-600 rounded"></div>
                </div>
            </div>
        </div>
    );
};
