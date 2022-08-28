import React, { InputHTMLAttributes, useState } from "react";
import { InputContainer, NormalInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  focusedBorderColor?: string;
  borderColor?: string;
}

const Input: React.FC<InputProps> = ({
  focusedBorderColor,
  borderColor,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onFocus = () => setIsFocus(true);
  const onBlur = () => setIsFocus(false);

  return (
    <InputContainer
      isFocus={isFocus}
      focusedBorderColor={focusedBorderColor}
      borderColor={borderColor}
    >
      <NormalInput {...props} onFocus={onFocus} onBlur={onBlur} />
    </InputContainer>
  );
};

export default Input;
