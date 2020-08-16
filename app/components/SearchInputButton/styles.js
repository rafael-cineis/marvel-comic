import styled from 'styled-components'

export const StyledButton = styled.button`
  outline: none;
  background: #eb2328;
  border: none;
  border-radius: 4px;
  height: 32px;
  text-transform: uppercase;
  color: #f4f4f4;
  transition: ease 0.2s;
  cursor: pointer;
  margin-left: 8px;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.99);
  }
`

export const StyledInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 4px solid;
  border-radius: 4px;
  height: 32px;

  &:focus {
    border-bottom: 4px solid #eb2328;
  }
`
