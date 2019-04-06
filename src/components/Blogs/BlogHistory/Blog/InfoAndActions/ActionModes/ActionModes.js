import React from "react";

const actionModes = (props) => {

    const deleteBlogHandler = () => {

        const blogId = props.blog.id;
        
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                props.getBlogs();
            }
        }
        xhttp.open("DELETE", `https://react-blog-8.firebaseio.com/blogs/${blogId}.json`, true);
        xhttp.send(null);

    };

    return (
        <div className="action-modes"
             style={{ display: props.willBlogBeEdited ? "none" : "block" }}>
            <i className="far fa-edit edit"
                onClick={props.updateBlog.bind(null, props.blog.id, props.blog.content)}></i>
            <i className="far fa-trash-alt remove"
                onClick={deleteBlogHandler}></i>
        </div>
    );
};

export default actionModes;