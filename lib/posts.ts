import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  category?: string;
  author?: string;
  contentHtml?: string;
}

const postsDirectory = path.join(process.cwd(), 'content/posts');

function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    return false;
  }
  return true;
}

export function getAllPosts(): Post[] {
  if (!ensurePostsDirectory()) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames
    .filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        excerpt: data.excerpt,
        category: data.category,
        author: data.author,
      } as Post;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return allPosts;
}

export function getPostBySlug(slug: string): Post | null {
  if (!ensurePostsDirectory()) return null;

  const extensions = ['.mdx', '.md'];
  let fileContents: string | null = null;

  for (const ext of extensions) {
    const fullPath = path.join(postsDirectory, `${slug}${ext}`);
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8');
      break;
    }
  }

  if (!fileContents) return null;

  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    excerpt: data.excerpt,
    category: data.category,
    author: data.author,
    contentHtml: content,
  } as Post;
}
