import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetailPage.css';

interface BlogPost {
    _id: string;
    title: string;
    Author: string;
    Description: string;
    Date: string;
    user_id: string;
    updated_at: string;
    created_at: string;
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
                    <h1 className="blog-detail-title">{post.title}</h1>
                    <p className="blog-detail-author"><strong>Author:</strong> {post.Author}</p>
                    <p className="blog-detail-date"><strong>Date:</strong> {post.Date}</p>
                    <div
                        className="blog-detail-description"
                        dangerouslySetInnerHTML={{ __html: post.Description }}
                    />
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BlogDetailPage;
