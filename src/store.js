import { configureStore, createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    addPost: (state, action) => [action.payload, ...state],
    editPost: (state, action) => state.map(post => 
      post.id === action.payload.id ? action.payload : post
    ),
    addReaction: (state, action) => state.map(post => 
      post.id === action.payload.postId ? {
        ...post,
        reactions: {
          ...post.reactions,
          [action.payload.emoji]: (post.reactions[action.payload.emoji] || 0) + 1
        }
      } : post
    )
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState: [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' }
  ]
});

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {
    addNotification: (state, action) => [action.payload, ...state]
  }
});

export const { addPost, editPost, addReaction } = postsSlice.actions;
export const { addNotification } = notificationsSlice.actions;

export default configureStore({
  reducer: {
    posts: postsSlice.reducer,
    users: usersSlice.reducer,
    notifications: notificationsSlice.reducer
  }
});