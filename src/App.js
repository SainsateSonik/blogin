import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

import Navigation from "./components/Navigation/Navigation";
import Blogs from "./components/Blogs/Blogs";

import * as blogActionCreators from "./store/actionCreators/blogActionCreators";
import createBlogsList from "./utility/createBlogsList";

class App extends Component {

  componentDidMount() {
    const setBlogs = this.props.setBlogs;

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        
        const resData = JSON.parse(this.responseText);
        const blogsList = createBlogsList(resData);
        setBlogs(blogsList);
        
      }
    };
    xhttp.open("GET", "https://react-blog-8.firebaseio.com/blogs.json", true);
    xhttp.send();
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Blogs />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setBlogs: (blogs) => dispatch(blogActionCreators.setBlogs(blogs))
});

export default connect(null, mapDispatchToProps)(App);
