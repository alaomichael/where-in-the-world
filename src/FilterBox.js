import styled from 'styled-components';

const FilterBox = styled.select`
  appearance: none;
  background: ${props => props.theme.elementsColor};
  border: none;
  border-radius: 5px;
  color: inherit;
  padding: 20px;
  width: fit-content;

  option {
    padding: 10px;
  }
`;

export default FilterBox;
