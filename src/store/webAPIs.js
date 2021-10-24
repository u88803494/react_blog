// region 1. Platform Libraries
import axios from 'axios';
// end-region

// TODO: Change to use firebase
const LIDEMY_STUDENT_URL = 'https://student-json-api.lidemy.me';
const BLOG_PATH = '/posts';
const WRONG_BLOG_PATH = '/poss';

export const createPost = (post) => (axios.post(`${LIDEMY_STUDENT_URL}${BLOG_PATH}`, post));

export const getPosts = () => (axios.get(`${LIDEMY_STUDENT_URL}${BLOG_PATH}?_sort=id&_order=desc`));

export const getPost = (postId) => (axios.get(`${LIDEMY_STUDENT_URL}${BLOG_PATH}/${postId}`));

export const updatePost = (post) => (axios.put(`${LIDEMY_STUDENT_URL}${BLOG_PATH}/${post.id}`, post));

export const deletePost = (postId) => (axios.delete(`${LIDEMY_STUDENT_URL}${BLOG_PATH}/${postId}`));

// wrong API
export const errorCreatePost = (post) => (axios.post(`${LIDEMY_STUDENT_URL}${WRONG_BLOG_PATH}`, post));

export const errorUpdatePost = (post) => (axios.put(`${LIDEMY_STUDENT_URL}${WRONG_BLOG_PATH}/${post.id}`, post));

export const errorDeletePost = (postId) => (axios.delete(`${LIDEMY_STUDENT_URL}${WRONG_BLOG_PATH}/${postId}`));

// member
export const logInLidemy = (user) => (axios.post(`${LIDEMY_STUDENT_URL}/login`, user))