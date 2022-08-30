import styled from "styled-components";

interface InputContainerProps {
  isFocus?: boolean;
  isDisabled?: boolean;
  focusedBorderColor?: string;
  borderColor?: string;
  inputHeight?: string;
  inputWidth?: string;
  inputBottomBorder?: string;
  inputBorderStyle?: string;
  inputBorderRadius?: string;
  backgroundColor?: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  background-color: ${(props) => (props.isDisabled ? "grey" : (props.backgroundColor))};
  border-color: ${(props) => (props.isFocus ? (props.focusedBorderColor || 'blue') : (props.borderColor || 'black'))};
  border-radius: ${props => props.inputBorderRadius};
  border-style: ${props => props.inputBorderStyle};
  border-bottom: ${props => props.inputBottomBorder};
  border-bottom-color: ${(props) => (props.isFocus ? (props.focusedBorderColor || 'blue') : (props.borderColor || 'black'))};
  height: ${props => props.inputHeight};
  width: ${props => props.inputWidth};
  padding: 4px;
  display: flex;
`;

export const LeftIcon = styled.img`
  width: 13px;
  height: 13px;
  align-self: center;
  padding: 4 4 4 4 ;
`;
interface Input {
  isDisabled?: boolean;
  backgroundColor?: string;
  placeHolderColor?: string;
}

export const ClearButton = styled.button`
border-radius: 50%;
width: 13px;
height: 13px;
align-self: center;
padding: 4 4 4 4 ;
font-size: x-small;
`


export const NormalInput = styled.input<Input>`
  border: none;
  outline-width: 0;
  padding: 2 2 2 2;
  flex: 1;
  background-color: ${(props) => (props.isDisabled ? "grey" : (props.backgroundColor))};
  &::placeholder {
    color : ${(props) => (props.isDisabled ? "white" : (props.placeHolderColor))};
}
`;



export const TextAreaInput = styled.textarea``
