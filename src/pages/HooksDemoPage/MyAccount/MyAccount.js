import React, { useState } from 'react';

const MyAccount = () => {
  // useStateDemo
  console.log('program started');
  const [age, setAge] = useState(20);
  console.log(age);

  const [myName, setMyNameAge] = useState('asmita');
  console.log(myName);

  const handleChangeAge = () => {
    setAge(50);
  };

  console.log('before return');
  return (
    <div>
      <h3>MyAccount</h3>
      <p>Age: {age}</p>
      <button onClick={handleChangeAge}>Change Age</button>

      <p>Name: {myName}</p>
      <button onClick={() => setMyNameAge('Ross')}>Change name</button>
    </div>
  );
};

export default MyAccount;
