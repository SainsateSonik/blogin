import React from "react";
import { connect } from "react-redux";
import "./BlogHistory.css";

import * as blogActionCreators from "../../../store/actionCreators/blogActionCreators";

import Blog from "./Blog/Blog";

const blogHistory = (props) => {

    const blogStack = props.blogs.map(blog => (
        <Blog key={blog.id}
              blog={blog}
              blogIdToEdit={props.editBlog.blogIdToEdit} 
              updateBlog={props.updateBlog}
              discardEdit={props.discardEdit}
              setBlogs={props.setBlogs}/>
    ));
    
    return (
        <div className="blog-history">
            {blogStack}
        </div>
    );
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    updateBlog: (blogId, blogContent) => dispatch(blogActionCreators.updateBlog(blogId, blogContent)),
    discardEdit: () => dispatch(blogActionCreators.discardEdit()),
    setBlogs: (blogs) => dispatch(blogActionCreators.setBlogs(blogs))
});

export default connect(mapStateToProps, mapDispatchToProps)(blogHistory);