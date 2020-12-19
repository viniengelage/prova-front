import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:10px;

  label {
    font-size: 18px;
    font-weight: bold;
    color: #292927;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  margin: 8px 0 0 0;
  background: #ffffff;
  border: 1px solid #bababa;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  svg{
    margin-left: 10px;
    margin-right: 10px;
    color: #333333;
  }

    ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      box-shadow: 0 0 0 1px #c53030;
      svg{
        color: #c53030;
      }
    `}
    ${(props) =>
    props.isFocused &&
    css`
      color: #292927;
      border-color: #292927;
      box-shadow: 0 0 0 1px #292927;
      border-radius: 5px;

      svg{
        color: #292927;
      }
    `}
    ${(props) =>
    props.isFilled &&
    css`
      color: #292927;
      border-color: #292927;
      box-shadow: 0 0 0 1px #292927;
      border-radius: 5px;
      svg{
        color: #292927;
      }
    `}

  input {
    background: transparent;
    border: 0;
    width: 90%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #292927;
    &:focus {
      outline: none;
    }

    &::placeholder{
      color:#333333;
      font-size: 16px;
    }
  }
  input[type='file']::-webkit-file-upload-button {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    border: 0;
    border-right: 1px solid #bababa;
    cursor: pointer;
    margin: 0;
    padding: 10px 10px 10px 0;
    background: none;
    color: #333333;
    box-shadow: none;
    outline: none;
  }
`;
export const Error = styled(Tooltip)`
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
