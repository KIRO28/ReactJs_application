import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetailPage.css';

interface BlogPost {
    title: string;
    content: string;
}

const BlogDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/posts/${id}`);
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error('Error fetching post:', error);
            }
        };

        fetchPost();
    }, [id]);

    return (
        <div className="blog-detail">
            {post ? (
                <>
                    <h1>{post.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BlogDetailPage;
