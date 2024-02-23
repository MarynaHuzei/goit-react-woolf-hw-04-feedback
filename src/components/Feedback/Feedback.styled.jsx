import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid;
  border-color: #b39f7a;
  background-color: #181716;
  color: #b39f7a;
  letter-spacing: 2px;
  &:hover,
  &:focus {
    color: #181716;
    background-color: #b39f7a;
    border-color: #181716;
    cursor: pointer;
  }
`;
