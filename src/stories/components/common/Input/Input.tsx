import React, { InputHTMLAttributes, useState } from "react";
import { setBorder, setRightIcon, setSize } from "./helpers";
import { InputContainer, NormalInput, LeftIcon, ClearButton } from "./styles";



interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  focusedBorderColor?: string;
  borderColor?: string;
  inputType: "number" | "text",
  inputBorder: "rounded" | "squard" | "underline" | "hidden",
  inputSize: "small" | "medium" | "large",
  isDisabled: boolean,
  placeHolderLable: string,
  backgroundColor: string,
  placeHolderColor?: string
  rightIcon: "user" | "search" | "non",
}

const Input: React.FC<InputProps> = ({
  focusedBorderColor,
  borderColor,
  inputType,
  inputBorder,
  inputSize,
  isDisabled,
  placeHolderLable,
  backgroundColor,
  placeHolderColor,
  rightIcon = "user",
  ...props
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);
  const { inputHeight, inputWidth } = setSize(inputSize)
  const { inputBottomBorder, inputBorderStyle, inputBorderRadius } = setBorder(inputBorder)
  const img: string | undefined = setRightIcon(rightIcon)

  return (
    <InputContainer
      isFocus={isFocus}
      focusedBorderColor={focusedBorderColor}
      borderColor={borderColor}
      inputHeight={inputHeight}
      inputWidth={inputWidth}
      inputBottomBorder={inputBottomBorder}
      inputBorderStyle={inputBorderStyle}
      inputBorderRadius={inputBorderRadius}
      isDisabled={isDisabled}
      backgroundColor={backgroundColor}
    >

      {img && <LeftIcon src={img} />}
      <NormalInput
        isDisabled={isDisabled}
        backgroundColor={backgroundColor}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={isDisabled}
        placeholder={placeHolderLable}
        {...props} />

      <ClearButton>×</ClearButton>
    </InputContainer>
  );
};

export default Input;
