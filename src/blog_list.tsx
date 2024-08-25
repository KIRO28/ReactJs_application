import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogListPage.css';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
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
            <h1>Blog List</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>
                            <h2>{post.title}</h2>
                            <p>{post.excerpt}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogListPage;
