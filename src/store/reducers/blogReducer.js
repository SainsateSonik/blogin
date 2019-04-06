import blogActionTypes from "../actionTypes/blogActionTypes";

const intitialState = {
    blogs: [],
    newBlog: {
        content: ""
    },
    editBlog: {
        blogIdToEdit: -1,
        content: ""
    }
};

const reducer = (state = intitialState, action) => {

    const setBlogs = () => ({
        ...state,
        blogs: action.blogs,
        newBlog: {
            ...state.newBlog,
            content: ""
        },
        editBlog: {
            ...state.editBlog,
            blogIdToEdit: -1,
            content: ""
        }
    });

    const updateBlog = () => ({
        ...state,
        editBlog: {
            ...state.editBlog,
            blogIdToEdit: action.blogId,
            content: action.blogContent
        }
    });

    const discardEdit = () => ({
        ...state,
        editBlog: {
            ...state.editBlog,
            blogIdToEdit: -1,
            content: ""
        }
    });

    const inputHandler = () => ({
        ...state,
        [action.mode]: {
            ...state[action.mode],
            content: action.content
        }
    })

    switch(action.type) {
        case blogActionTypes.SET_BLOGS: return setBlogs();
        case blogActionTypes.UPDATE_BLOG: return updateBlog();
        case blogActionTypes.DISCARD_EDIT: return discardEdit();
        case blogActionTypes.INPUT_HANDLER: return inputHandler();
        default: return state;
    };
};

export default reducer;