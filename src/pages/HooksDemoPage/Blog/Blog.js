import React, { useEffect, useState } from 'react';

const Blog = () => {

  console.log('1.Program Started in Blog Comp');
  const [topicName, setTopicName] = useState('React Hooks Demo');
  const [publishedDate, setPublishedDate] = useState(new Date());

  console.log('2. Before useEffect in Blog Comp');
  // In useeffect hook, first param: effect, second param: dep list
  useEffect( () => {
    // runs after every initial rendering
    // and also upon state update as well == only if dep changed
    console.log('4. Inside useEffect');
    // this is an alternative to lifecycle hooks (compponentDidMount and componentDidUpdate)
    // ideal place for your REST API calls
    document.title = topicName;
  }, [topicName]); // secondary arg is dependency. it can be an array -- it is optional
    // if dep is changed by any means, then the effect callback will be called
    // remove the dep and have empty array n see

  const handleChangeTopic = () => {
    console.log('5. Inside handleChangeTopic');
    setTopicName('Demo of useEffect and useState Hook');
  };

  const handleUpdatePublishedDate = () => {
    setPublishedDate(new Date());
  };

  console.log('1.Prgram Started in Blog Comp');
  return (
    <div>
      <h3>Blog</h3>
      <p>Topic Name: {topicName}</p>
      <button type="button" onClick={handleChangeTopic}>
        Update Topic Name
      </button>
      <p>Published Date:{publishedDate.toString()}</p>
      <button type="button" onClick={handleUpdatePublishedDate}>
        Update published Date
      </button>
    </div>
  );
};

export default Blog;
