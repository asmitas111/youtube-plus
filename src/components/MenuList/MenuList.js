// Functional Component with Arrow Function
import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuList = () => {
  
const mnlst = [
  {
    id:1,
    url:'/styled-comp-demo',
    title:'Styled Comp demo'
  },
  {
    id:2,
    url:'/hoc-demo',
    title:'HOC Demo'
  },
  {
    id:3,
    url:'/about',
    title:'About Us'
  },
  {
    id:4,
    url:'/contact-us',
    title:'Contact Us'
  },
  {
    id:5,
    url:'/insta-feed',
    title:'Instagram Photos'
  },
  {
    id:6,
    url:'/hooks-demo',
    title:'Hooks Demo'
  },
  {
    id:7,
    url:'/products-demo',
    title:'Products'
  },
  {
    id:8,
    url:'/unit-testing-demo',
    title:'Unit Testing Demo'
  }
];

  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <NavLink to="/" className="nav-link" aria-current="page" activeclassname="active">
          Home
        </NavLink>
      </li>
      {mnlst.map((mnl) => {
        return (
        <li className="nav-item" key={mnl.id}>
        <NavLink to={mnl.url} className="nav-link" activeclassname="active">
          {mnl.title}
        </NavLink>
      </li>
      );
    })}
    </ul>
  );
};

export default MenuList;
