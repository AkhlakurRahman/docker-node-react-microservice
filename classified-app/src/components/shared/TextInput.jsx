import styled from 'styled-components';

const TextInput = styled.input`
  border: 1px solid ${props => props.theme.veryLightGrey};
  box-sizing: border-box;
  display: block;
  font-size: 0.9rem;
  width: 100%;
  padding: 0.25rem;
`;

export default TextInput;
