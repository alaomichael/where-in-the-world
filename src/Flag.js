import styled from 'styled-components';

const Flag = styled.div.attrs(props => ({
  style: {
    backgroundImage: `url(${props.src})`,
    height: props.size === 'large' ? '500px' : '250px',
  },
}))`
  background: center center no-repeat;
  background-size: cover;
  width: 100%;
`;

export default Flag;
