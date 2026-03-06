import React, { useState } from 'react';

// 1. Компонент добавления (Task 2) [cite: 424-426]
function AddArticle({ title, summary, onChangeTitle, onChangeSummary, onClickAdd }) {
  return (
    <section>
      <h1>Add New Article</h1>
      <input placeholder="Title" value={title} onChange={onChangeTitle} /><br/>
      <input placeholder="Summary" value={summary} onChange={onChangeSummary} /><br/>
      <button onClick={onClickAdd}>Add Article</button>
    </section>
  );
}

// 2. Компонент одного элемента (Task 3) [cite: 433-438]
function ArticleItem({ article, onClickRemove }) {
  // Локальное состояние для раскрытия текста [cite: 435]
  const [isOpened, setIsOpened] = useState(false);

  return (
    <li>
      <a href={`#${article.id}`} onClick={() => setIsOpened(!isOpened)}>
        {article.title}
      </a>
      <button onClick={() => onClickRemove(article.id)} style={{ marginLeft: '10px' }}>x</button>
      
      {/* Условное отображение через инлайн-стиль [cite: 437] */}
      <p style={{ display: isOpened ? 'block' : 'none' }}>{article.summary}</p>
    </li>
  );
}

// 3. Компонент списка (Task 3) [cite: 430-432]
function ArticleList({ articles, onClickRemove }) {
  return (
    <ul>
      {articles.map(art => (
        <ArticleItem key={art.id} article={art} onClickRemove={onClickRemove} />
      ))}
    </ul>
  );
}

// Главный менеджер (ArticleManager) [cite: 413]
function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: 'What is React?', summary: 'A JS library for building UI.' }
  ]);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  const handleAdd = () => {
    if (title && summary) {
      const newArt = { id: Date.now(), title, summary };
      setArticles([...articles, newArt]);
      setTitle(''); setSummary('');
    }
  };

  const handleRemove = (id) => {
    setArticles(articles.filter(a => a.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <AddArticle 
        title={title} summary={summary} 
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeSummary={(e) => setSummary(e.target.value)}
        onClickAdd={handleAdd}
      />
      <hr />
      <ArticleList articles={articles} onClickRemove={handleRemove} />
    </div>
  );
}

export default App;