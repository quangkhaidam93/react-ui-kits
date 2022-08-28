import styled from "styled-components";

interface InputContainerProps {
  isFocus?: boolean;
  focusedBorderColor?: string;
  borderColor?: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  border-color: ${(props) => (props.isFocus ? (props.focusedBorderColor || 'red') : (props.borderColor || 'blue'))}; // bc 
  border-width: 1px;
  border-style: solid;
  padding: 4px;
  border-radius: 12px;
`;

export const NormalInput = styled.input`
  border: none;
  outline-width: 0;
`;

export const TextAreaInput = styled.textarea``
