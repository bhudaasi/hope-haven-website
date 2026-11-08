export type User = {
    id: string;
    name: string;
    email: string;
};

export type Post = {
    id: string;
    title: string;
    content: string;
    authorId: string;
};

export interface ApiResponse<T> {
    data: T;
    error?: string;
}

export type Route = {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
};