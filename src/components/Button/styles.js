import styled from 'styled-components';
import {shade} from 'polished'

export const InputButton = styled.button`
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: bold;
  color: #ffff;
  cursor: pointer;

  border: none;
  border-radius: 3px;
  background-color: #292927;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline:none;

  &:hover {
    background-color: ${shade(0.2, '#292927')};
  }
`;