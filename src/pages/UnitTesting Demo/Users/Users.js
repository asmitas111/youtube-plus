import React, { useEffect, useState } from 'react';
import { fetchApi } from '../../../utils/fetchApi';

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchApi('https://jsonplaceholder.typicode.com/users').then((resInJSON) => {
      // capturing converted JSON res
      console.log(resInJSON);
      if (resInJSON.status != 404) {
        setIsLoading(false);
        setIsError(false);
        setUserList(resInJSON);
      } else {
        setIsLoading(false);
        setIsError(true);
        setUserList([]);
      }
    });
  }, []);

  if (isLoading) {
    return <div className="spinner-border text-danger" role="status"></div>;
  }

  if (isError) {
    return <div className="alert alert-danger">Sorry! Unable to fetch users! Try again.</div>;
  }

  return (
    <div className="row">
      <h1>Users | Mocks with Fetch</h1>
      {userList?.map((user) => {
        return (
          <div className="col-md-6" key={user.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">Phone: {user.phone}</p>
              </div>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default Users;
