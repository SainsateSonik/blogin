import React from "react";
import { connect } from "react-redux";
import "./NewBlog.css";

import * as blogActionCreators from "../../../store/actionCreators/blogActionCreators";
import createBlogsList from "../../../utility/createBlogsList";

const newBlog = (props) => {

    const contentChangeHandler = (e) => {
        props.contentHandler(e.target.value);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const setBlogs = props.setBlogs;

        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {

                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState === 4 && this.status === 200) {
                        
                        const resData = createBlogsList(JSON.parse(this.responseText));
                        setBlogs(resData);
                    
                    }
                };

                xhttp.open("GET", "https://react-blog-8.firebaseio.com/blogs.json", true);
                xhttp.send();

            }
        };
        xhttp.open("POST", "https://react-blog-8.firebaseio.com/blogs.json", true);
        xhttp.send(JSON.stringify({
            createdOn: new Date(),
            content: props.newBlog.content
        }));
    };

    return (
        <div className="create-blog">
            <form onSubmit={formSubmitHandler}>
                <textarea rows="5"
                          placeholder="whats's in your mind today?"
                          value={props.newBlog.content}
                          onChange={contentChangeHandler}/>
                <div>
                    <button>
                        <i className="fas fa-plus"></i> Add
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProp = dispatch => ({
    contentHandler: (content) => dispatch(blogActionCreators.updateHandler("newBlog", content)),
    setBlogs: (blogs) => dispatch(blogActionCreators.setBlogs(blogs))
});

export default connect(mapStateToProps, mapDispatchToProp)(newBlog);