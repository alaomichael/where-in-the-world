import styled from 'styled-components';

const Button = styled.button`
  appearance: none;
  background: ${props => props.theme.elementsColor};
  border: 0;
  border-radius: 0;
  box-shadow: 0 0 10px hsla(207, 26%, 0%, 0.5);
  color: inherit;
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  + ${Button} {
    margin: 0 10px;
  }
`;
export default Button;
