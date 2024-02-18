import React from 'react';
import AccountInfo from './AccountInfo/AccountInfo';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import ContactForm from './ContactForm/ContactForm';
import Counter from './Counter/Counter';
import Posts from './Posts/Posts';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import Users from './Users/Users';

const UnitTestingDemo = () => {
  return (
    <div>
      <h1>Unit Testing Examples</h1>
      <a href="https://reactjs.org/docs/testing.html">unit testing reference</a>

      <hr />
      <CompanyInfo foundedYear="2006" employeeCount="More than 3 lakhs" />
      {/*<CompanyInfo employeeCount="Employee :More than 3 lakhs" />*/}

      <hr />
      <Counter />

      <hr />
      <ThemeSwitcher />

      <hr />
      <ContactForm />

      <hr />
      <Users />

      <hr />
      <Posts />

      <hr />
      <AccountInfo />
    </div>
  );
};

export default UnitTestingDemo;
