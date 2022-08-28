import React, { InputHTMLAttributes, useState } from "react";
import { InputContainer, TextAreaInput } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  focusedBorderColor?: string;
  borderColor?: string;
}

const TextArea: React.FC<InputProps> = ({
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
      <TextAreaInput {...props} onFocus={onFocus} onBlur={onBlur} />
    </InputContainer>
  );
};

export default TextArea;
