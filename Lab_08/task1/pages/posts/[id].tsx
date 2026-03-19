import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "@/types";
import { getAllPosts, getPostById, getAuthorById } from "@/lib/api";

interface PostProps {
  post: Post;
  author: { name: string; bio: string };
}

export default function PostPage({ post, author }: PostProps) {
  return (
    <article style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>{post.title}</h1>
      <p><strong>By {author.name}</strong></p>
      <p>{post.content}</p>
      <div style={{ marginTop: '1rem', color: 'gray' }}>
        {post.tags.map(tag => (
          <span key={tag} style={{ marginRight: '0.5rem' }}>#{tag}</span>
        ))}
      </div>
    </article>
  );
}

// Эта функция говорит Next.js, какие страницы нужно сгенерировать заранее
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllPosts();
  return {
    paths: posts.map(post => ({ params: { id: post.id } })),
    fallback: "blocking", // Если поста нет в кэше, сервер подождет и сгенерирует его
  };
};

// Эта функция достает данные для конкретного поста
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPostById(params?.id as string);
  
  if (!post) {
    return { notFound: true };
  }

  const author = await getAuthorById(post.author);
  
  if (!author) {
      return { notFound: true };
  }

  return {
    props: { post, author },
    revalidate: 60, // Тоже обновляем страницу раз в 60 секунд
  };
};