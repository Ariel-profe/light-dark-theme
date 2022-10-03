import { FC } from "react"
import moment from 'moment';

import { IArticle } from '../../data/data';

interface Props {
  article: IArticle;
}

export const Article:FC<Props> = ({article}) => {

  return (
    <article className="post">
      <h2>{article.title}</h2>
      <div className="post-info">
        <span>{moment(article.date).format('dddd Do, YYYY')}</span>
        <span>{article.length} min read</span>
      </div>
      <p>{article.snippet}</p>
    </article>
  )
}
