import React from "react";
import "./Blogs.css";

import NewBlog from "./NewBlog/NewBlog";
import BlogHistory from "./BlogHistory/BlogHistory";

const blogs = (props) => {

    return (
        <div className="blogs-container">
            <div className="blog-wrapper">
                <NewBlog />
                <BlogHistory />
            </div>
        </div>
    );
};

export default blogs;