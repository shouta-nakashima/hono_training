import {blogs} from "../constants/blogs";

export const getBlogs = () => blogs

export const getBlog = (id: string) => blogs.find(blog => blog.id === id)