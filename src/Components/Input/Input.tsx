import React from "react";
import styled from "styled-components";

const Container = styled.input`
  border: none;
  border-bottom: 2px solid ${props => props.theme.greyColor};
  font-size: 20px;
  width: 100%;
  padding-bottom: 10px;
  font-weight: 500;
  transition: border-bottom 0.1s linear;
  &:-webkit-autofill {
    box-shadow: 0 0 0px 1000px white inset !important;
  }
  &:focus {
    border-bottom-color: #2c3e50;
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.greyColor};
    font-weight: 300;
  }
`;

interface IProps {
  placeholder: string;
  value: any;
  type?: string;
  required?: boolean;
  name: string
  onChange: any
}
const Input: React.FunctionComponent<IProps> = ({
  placeholder = "",
  required = true,
  type = "text",
  value,
  name="",
  onChange
}) => (
  <Container
    name={name}
    placeholder={placeholder}
    required={required}
    type={type}
    value={value}
    onChange={onChange}
  />
);

export default Input;
