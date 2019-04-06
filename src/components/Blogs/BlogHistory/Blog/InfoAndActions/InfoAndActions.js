import React from "react";
import { connect } from "react-redux";
import "./InfoAndActions.css";

import ActionModes from "./ActionModes/ActionModes";
import UpdateActions from "./UpdateActions/UpdateActions";

import formatDate from "../../../../../utility/formatDate";
import createBlogsList from "../../../../../utility/createBlogsList";

const infoAndActions = (props) => {

    const { updateBlog, discardEdit, setBlogs } = props;
    
    const getBlogsHandler = () => {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {

                const blogsList = createBlogsList(JSON.parse(this.responseText));
                setBlogs(blogsList);
                
            }
        }
        xhttp.open("GET", "https://react-blog-8.firebaseio.com/blogs.json", true);
        xhttp.send();
    };

    return (
        <div className="info-and-actions">
            <span className="created-on">
                {formatDate(props.blog.createdOn)}
            </span>
            <div className="actions">
                <ActionModes updateBlog={updateBlog}
                             blog={props.blog}
                             willBlogBeEdited={props.willBlogBeEdited}
                             getBlogs={getBlogsHandler}/>
                <UpdateActions discardEdit={discardEdit}
                               editBlog={props.editBlog}
                               blog={props.blog}
                               blogs={props.blogs}
                               willBlogBeEdited={props.willBlogBeEdited}
                               getBlogs={getBlogsHandler}/>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(infoAndActions);