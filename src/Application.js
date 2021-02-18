import React, { useState, useEffect } from 'react';
import { Container,
         Card,
         CardContent,
         Grid 
        } from '@material-ui/core';
import Comment from './CommentComponent/CommentComponent';
import Article from './ArticleComponent/ArticleComponent';
import moment from 'moment';
import useStyles from './Styles';
import axios from 'axios';

const App = () => {
  const classes = useStyles();

  const [ article, setArticle ] = useState({});
  const [ comments, setComments ] = useState([]);
  const [ moreComments, setMoreComments ] = useState([]);
  const [ clicked, setClicked ] = useState(false);

  useEffect(()=>{
    loadArticle();
    loadComments();
  },[])

  function fetchArticle() {
    return new Promise(resolve => {
            axios.get('https://my-json-server.typicode.com/LuckyLukr/FakeApi/article')
                .then( res => {
                  resolve(res.data);
                })
                .catch( err => console.log(err));
          });
  }

  function fetchComments() {
    return new Promise(resolve => {
            axios.get('https://my-json-server.typicode.com/LuckyLukr/FakeApi/comments')
                .then( res => {
                  resolve(res.data);
                })
                .catch( err => console.log(err));
          });
  }

  function fetchMoreComments() {
    return new Promise(resolve => {
            axios.get('https://my-json-server.typicode.com/LuckyLukr/FakeApi/moreComments')
                .then( res => {
                  resolve(res.data);
                })
                .catch( err => console.log(err));
          });
  }

  async function loadArticle() {
    const fetchedArticle = await fetchArticle();
    setArticle(fetchedArticle);
  }

  async function loadComments() {
    await loadArticle();
    const comments = await fetchComments();
    comments.sort((a, b) => {
      let dateA = a.date.toUpperCase();
      let dateB = b.date.toUpperCase();
      if (dateA < dateB) {
        return 1;
      }
      if (dateA > dateB) {
        return -1;
      }
      return 0;
    });
    setComments(comments);
  }

  async function loadMoreComments() {
    const moreComments = await fetchMoreComments();
    comments.push(...moreComments);
    comments.sort((a, b) => {
        let dateA = a.date.toUpperCase();
        let dateB = b.date.toUpperCase();
        if (dateA < dateB) {
          return 1;
        }
        if (dateA > dateB) {
          return -1;
        }
        return 0;
    });
    const removed = comments.splice(2);
    setMoreComments(removed);
  }

  const handleMoreComments = () => {
    loadMoreComments();
    setClicked(true);
  }
  
  return (
    <Container maxWidth='sm' >

      {article.author === undefined 
      ? 
      <Grid container justify="center" >
        <img src='loading.gif' alt='loading...' style={{height: '200px'}} />
      </Grid> 
      : 
      <div>
        <Article 
            author={article.author} 
            text={article.text} 
            date={moment.utc(article.date).format('DD/MM/YYYY')} 
            time={moment.utc(article.date).format('HH:mm')}
            onMoreComments={handleMoreComments}
            moreComments={moreComments}
            comments={comments}
            clicked={clicked}
        />

        {comments.length === 0 
        ?
        <Card align='center' className={classes.commentsSection} >
          <img src='loading.gif' alt='loading...' style={{height: '200px'}} />
        </Card>
        : 
        <Card className={classes.commentsSection}>
          <CardContent>
            {
              comments.map( e => {
                return <Comment 
                            id={e.id}
                            key={e.id}
                            author={e.author}
                            text={e.text}
                            date={moment.utc(e.date).format('DD/MM/YYYY')} 
                            time={moment.utc(e.date).format('HH:mm')}  />
              })
            }
            {
              moreComments.map( e => {
                return <Comment 
                            id={e.id}
                            key={e.id}
                            author={e.author}
                            text={e.text}
                            date={moment.utc(e.date).format('DD/MM/YYYY')} 
                            time={moment.utc(e.date).format('HH:mm')}  />
              })
            }
          </CardContent>
        </Card>
        }
      </div>}

    </Container>
  );
};

export default App;