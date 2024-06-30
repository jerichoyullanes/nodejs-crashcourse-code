// SAMPLE OF ES MODULES

// Mock Data
const posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
]


// export const getPosts = () => posts;
// or
const getPosts = () => posts;
// export { getPosts }; // not default
export default getPosts; // default

// sample of exporting not default(regular) while there's an existing function that is export default 
export const getPostsLength = () => posts.length;