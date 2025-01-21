import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "./blogs";

const BlogDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const blog = blogs.find((b) => b.id === Number(id));

    if (!blog) {
        return <div className="container mx-auto p-6">Blog not found!</div>;
    }

    return (
        <div className="bg-cyan-700">
            <div className="mx-auto p-10 flex flex-col">
                <h1 className="text-4xl font-bold mb-4 text-center py-6">{blog.title}</h1>
                <div className="bg-red-300 rounded-xl">
                <p className="px-28 py-8 text-xl text-justify">{blog.content}</p>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
