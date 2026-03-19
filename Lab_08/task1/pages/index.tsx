import { GetStaticProps } from "next";
import Link from "next/link";
import { Post } from "@/types";
import { getAllPosts } from "@/lib/api";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>My Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: '1rem' }}>
            <Link href={`/posts/${post.id}`}>
              <h2 style={{ color: 'blue', textDecoration: 'underline' }}>{post.title}</h2>
            </Link>
            <p>By Author ID {post.author} | {post.readTime} min read</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
    revalidate: 60, // ISR: страница будет обновляться каждые 60 секунд
  };
};