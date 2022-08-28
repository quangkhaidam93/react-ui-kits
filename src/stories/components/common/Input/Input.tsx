import { InputContainer } from "./styles";
import React, { InputHTMLAttributes } from "react"
import searchSymbol from "../../../assets/searchSymbol.png"
import { setSize, setBorder, setDisabled, setHighlightColor, setRightIcon, renderInput } from "./unity";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType: "number" | "text",
  inputBorder: "rounded" | "squard" | "underline" | "hidden",
  clickedHighlight: boolean,
  clickedHighlightColor: string,
  inputSize: "small" | "medium" | "large",
  disabled: boolean,
  mutilLine: boolean,
  placeHolderLable: string,
  backgroundColor: string,
  autoFocus?: boolean | undefined,
  inputBorderColor: string,
  // inputBorderRadius?: string
  // inputBorderStyle?: string
  // inputBottomBorder?: string
  placeHolderColor?: string
  searchInput?: boolean

}



export const Input: React.FC<InputProps> = ({
  inputType,
  inputBorder,
  clickedHighlight,
  clickedHighlightColor,
  inputSize = "small",
  disabled,
  mutilLine,
  placeHolderLable,
  backgroundColor,
  autoFocus,
  inputBorderColor,
  placeHolderColor,
  searchInput,
  // inputBorderRadius,
  // inputBorderStyle,
  // inputBottomBorder,
  ...props
}) => {
  const { inputHeight, inputWidth } = setSize(inputSize);
  const { inputBorderRadius, inputBorderStyle, inputBottomBorder } = setBorder(inputBorder);
  clickedHighlightColor = setHighlightColor(clickedHighlightColor, clickedHighlight, inputBorderColor);
  ({ backgroundColor, placeHolderColor } = setDisabled(disabled, backgroundColor));

  return (<>
    <InputContainer
      autoFocus={true}
      inputBorderColor={inputBorderColor}
      placeHolderColor={placeHolderColor}
      backgroundColor={backgroundColor}
      inputBorder={inputBorder}
      inputBorderRadius={inputBorderRadius}
      inputBorderStyle={inputBorderStyle}
      inputBottomBorder={inputBottomBorder}
      inputHeight={inputHeight}
      inputWidth={inputWidth}

      // backgroundSymbol={backgroundSymbol}
      // paddingLeft={paddingLeft}
      {...props}
    >
      {renderInput(inputType, mutilLine, disabled, placeHolderLable, clickedHighlightColor, inputBorderColor)}
    </InputContainer>

    <img src={searchSymbol} />
  </>
  );
};
