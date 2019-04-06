import React from "react";
import { connect } from "react-redux";
import "./Content.css";

import * as blogActionCreators from "../../../../../store/actionCreators/blogActionCreators";

const content = (props) => {

    const contentChangeHandler = (e) => {
        props.updateHandler(e.target.value);
    };

    return (
        <div className="blog-content">
            <p className="read-only"
               style={{ display: props.willBlogBeEdited ? "none" : "block" }}>
                {props.blogContent}
            </p>
            <textarea rows="4"
                      placeholder="please add some content here!"
                      value={props.content}
                      onChange={contentChangeHandler}
                      style={{ display: props.willBlogBeEdited ? "block" : "none" }}>
            </textarea>
        </div>
    );
};

const mapStateToProps = state => ({ ...state.editBlog });

const mapDispatchToProp = dispatch => ({
    updateHandler: (content) => dispatch(blogActionCreators.updateHandler("editBlog", content))
});

export default connect(mapStateToProps, mapDispatchToProp)(content);