import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogListPage.css';

interface BlogPost {
    _id: string;
    title: string;
    Author: string;
    Date: string;
}

const BlogListPage: React.FC = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/posts');
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="blog-list">
            <h1 className="blog-list-title">Blog List</h1>
            <ul className="blog-list-items">
                {posts.map(post => (
                    <li key={post._id} className="blog-list-item">
                        <Link to={`/post/${post._id}`} className="blog-list-link">
                            <h2 className="blog-list-item-title">{post.title}</h2>
                            <p className="blog-list-item-author"><strong>Author:</strong> {post.Author}</p>
                            <p className="blog-list-item-date"><strong>Date:</strong> {new Date(post.Date).toLocaleDateString()}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogListPage;
