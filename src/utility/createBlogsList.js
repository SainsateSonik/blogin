export default (data) => {
    const blogs = data;
    const blogsList = [];

    for(let blogKey in blogs) {
      blogsList.push({
        id: blogKey,
        content: blogs[blogKey].content,
        createdOn: new Date(blogs[blogKey].createdOn)
      });
    }

    return blogsList;
};