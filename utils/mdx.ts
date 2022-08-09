const fs = require('fs');
const path = require('path');
import matter from 'gray-matter';
import readingTime, { ReadTimeResults } from 'reading-time';

export const getBlogs = () => {
  let blogs: { readTime: ReadTimeResults; link: string }[] = [];
  const files = fs.readdirSync(path.join(process.cwd(), 'blogs'));

  if (files) {
    files.forEach((file: string) => {
      if (path.extname(file) == '.mdx') {
        const source = fs.readFileSync(
          path.join(process.cwd(), 'blogs', `${file}`),
          {
            encoding: 'utf-8',
          }
        );
        const { content, data } = matter(source);
        const readTime = readingTime(content);
        blogs.push({ ...data, readTime, link: file.replace('.mdx', '') });
      }
    });
    return blogs;
  } else {
    return null;
  }
};

export const getPaths = () => {
  let paths: { params: { slug: string } }[] = [];

  const files = fs.readdirSync(path.join(process.cwd(), 'blogs'));
  if (files) {
    files.forEach((file: string) => {
      if (path.extname(file) == '.mdx') {
        paths.push({ params: { slug: file.replace('.mdx', '') } });
      }
    });
    return paths;
  } else {
    return null;
  }
};

export const getFileData = (fileName: string) => {
  const data = fs.readFileSync(
    path.join(process.cwd(), 'blogs', `${fileName}.mdx`),
    {
      encoding: 'utf-8',
    }
  );
  if (data) {
    return data;
  } else {
    return null;
  }
};
