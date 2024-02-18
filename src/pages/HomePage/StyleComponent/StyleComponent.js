import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  border: solid 1px #00f;
  margin-top: 60px;
  padding: 30px;
  text-align: center;
  background-color: lightpink;
`;

const Heading3 = styled.h3`
  font-size: 48px;
  border: dashed 4px purple;
`;

// working with props as well.
const Button = styled.button`
  background-color: ${(props) => (props.primary ? 'green' : 'yellow')};
  padding: 10px 20px;
  font-size: 16px;
`;

const TomatoButton = styled(Button)`
  color: #000;
  border-color: tomato;
  background-color: tomato;
`;

const StyledComponentDemo = () => {
  return (
    <Wrapper>
      <Heading3>Styled Components are here!</Heading3>
      <Button primary>Learn More</Button> <br />
      <TomatoButton>This is the styled button</TomatoButton> <br />
      <a href="https://styled-components.com/docs/">Reference</a>
    </Wrapper>
  );
};

export default StyledComponentDemo;