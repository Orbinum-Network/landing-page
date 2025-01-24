export interface Post {
    image: string;
    date: string;
    url: string;
    title: string;
    description: string;
}

export interface BlogArticleProps {
    post: Post;
}

export interface BlogSectionProps {
    posts: Post[];
}
