import React from "react";

const updateActions = (props) => {

    const saveFlag = props.editBlog.content === "" || props.blog.content === props.editBlog.content.trim();

    const saveUpdateHandler = () => {

        const blogId = props.blog.id;
        const blogIndex = props.blogs.findIndex(blog => blog.id === blogId);
        const blogCreationDate = props.blogs[blogIndex].createdOn;

        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                props.getBlogs()
            }
        }

        xhttp.open("PUT", `https://react-blog-8.firebaseio.com/blogs/${blogId}.json`, true);
        xhttp.send(JSON.stringify({
            content: props.editBlog.content,
            createdOn: blogCreationDate
        }));
    };

    return(
        <div className="update-actions"
             style={{ display: props.willBlogBeEdited ? "block" : "none" }}>
            <i className="fas fa-check save"
                onClick={saveUpdateHandler}
                style={{ display: saveFlag ? "none" : "inline" }}></i>
            <i className="fas fa-times discard"
                onClick={props.discardEdit}></i>
        </div>
    );
};

export default updateActions;