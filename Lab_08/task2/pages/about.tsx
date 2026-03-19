import { GetStaticProps } from "next";

interface AboutProps {
  time: string;
}

export default function About({ time }: AboutProps) {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1>About Us (SSG - Static Site Generation)</h1>
      <p>Эта страница была сгенерирована заранее (при сборке проекта).</p>
      <div style={{ padding: '1rem', backgroundColor: '#e6fffa', borderLeft: '4px solid #38b2ac', marginTop: '1rem' }}>
        <strong>Время генерации данных:</strong> {time}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      time: new Date().toISOString(),
    },
  };
};
