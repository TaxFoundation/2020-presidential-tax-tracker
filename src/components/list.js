import styled from 'styled-components';

const StyledUnorderedList = styled.ul`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledListItem = styled.li`
  display: block;
  padding: 0;

  button {
    height: 100%;
    width: 100%;
  }
`;

export { StyledListItem, StyledUnorderedList };
