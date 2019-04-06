import React from "react";
import "./Blog.css";

import Content from "./Content/Content";

import InfoAndActions from "./InfoAndActions/InfoAndActions";

const blog = (props) => {

    const willBlogBeEdited = props.blogIdToEdit === props.blog.id;
    const { updateBlog, discardEdit, setBlogs } = props;

    return(
        <div className="blog-frame">
            <InfoAndActions blog={props.blog}
                            willBlogBeEdited={willBlogBeEdited}
                            updateBlog={updateBlog}
                            discardEdit={discardEdit}
                            setBlogs={setBlogs}/>
            <Content  blogContent={props.blog.content}
                      willBlogBeEdited={willBlogBeEdited}/>
        </div>
    );
};

export default blog;