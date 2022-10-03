
import './App.css'
import { Article } from './components/ui/Article';
import { articles, IArticle } from './data/data';
import { useEffect, useState } from 'react';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if(localStorage.getItem('theme')){
    theme = localStorage.getItem('theme') || '';
  }

  return theme;
};

function App() {

  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    localStorage.getItem('theme') === 'light-theme' ? setTheme('dark-theme') : setTheme('light-theme')
  };
  

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme)
  }, [theme])
  

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>dark mode app</h1>
          <button 
            className='btn'
            onClick={toggleTheme}
          >
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {
          articles.map( (article:IArticle) => (
            <Article key={article.id} article={article} />
          ))
        }
      </section>
    </main>
  )
}

export default App
