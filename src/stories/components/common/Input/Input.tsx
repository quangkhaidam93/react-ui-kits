import { InputContainer } from "./styles";
import React, { InputHTMLAttributes } from "react"
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType?: "number" | "text",
  inputBorder?: "rounded" | "squard" | "underline" | "hidden",
  clickedHighligh?: boolean,
  clickedHighlighColor?: string | undefined,
  inputSize?: "small" | "medium" | "large",
  disabled?: boolean,
  mutilLine?: boolean,
  placeHolderLable?: string,
  backgroundColor?: string,
  autoFocus?: boolean | undefined,
  inputBorderColor?: string | undefined,
  // inputBorderRadius?: string
  // inputBorderStyle?: string
  // inputBottomBorder?: string
  placeHolderColor?: string
}



export const Input: React.FC<InputProps> = ({
  inputType,
  inputBorder,
  clickedHighligh,
  clickedHighlighColor,
  inputSize,
  disabled,
  mutilLine,
  placeHolderLable,
  backgroundColor,
  autoFocus,
  inputBorderColor,
  placeHolderColor,
  // inputBorderRadius,
  // inputBorderStyle,
  // inputBottomBorder,
  ...props
}) => {
  clickedHighlighColor = clickedHighligh ? clickedHighlighColor : inputBorderColor;
  backgroundColor = disabled ? "grey" : backgroundColor;
  placeHolderColor = disabled ? "white" : "black";
  console.log(props)
  let inputHeight, inputWidth
  let inputBorderRadius, inputBorderStyle, inputBottomBorder
  switch (inputSize) {
    case "medium":
      inputHeight = "100px"
      inputWidth = "30%"
      break;
    case "large":
      inputHeight = "150px"
      inputWidth = "50%"
      break
    default:
      break;
  }
  switch (inputBorder) {

    case "rounded":
      inputBorderRadius = "5px 5px 5px 5px"
      inputBorderStyle = "solid"
      break
    case "underline":
      inputBottomBorder = "1px solid"
      inputBorderStyle = "hidden"
      break
    case "hidden":
      inputBorderStyle = "hidden"
      break
    default:
      inputBorderRadius = "0px 0px 0px 0px"
      inputBorderStyle = "solid"
      break
  }
  let typeOfBlock: string = inputType == "text" ? "input" : "number"
  typeOfBlock = (typeOfBlock == "input" || mutilLine) ? "textarea" : typeOfBlock
  return (
    <InputContainer
      type={typeOfBlock}
      autoFocus={true}
      inputBorderColor={inputBorderColor}
      placeHolderColor={placeHolderColor}
      clickedHighlighColor={clickedHighlighColor}
      backgroundColor={backgroundColor}
      placeholder={placeHolderLable}
      inputBorder={inputBorder}
      inputBorderRadius={inputBorderRadius}
      inputBorderStyle={inputBorderStyle}
      inputBottomBorder={inputBottomBorder}
      inputHeight={inputHeight}
      inputWidth={inputWidth}
      disabled={disabled}
      {...props}
    />


  );
};
