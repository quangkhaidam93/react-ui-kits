import { NumberInput, TextInput, PasswordInput, TextareaInput } from "./styles"
import { useState } from "react"

export const setSize = (inputSize: string) => {
  switch (inputSize) {
    case "medium":
      return {
        inputHeight: "100px",
        inputWidth: "30%"
      }
    case "large":
      return {
        inputHeight: "150px",
        inputWidth: "50%"
      }
    default:
      return {
        inputHeight: "15px",
        inputWidth: "30%"
      }
  }
}
export const setBorder = (inputBorder: string) => {
  switch (inputBorder) {

    case "rounded":
      return {
        inputBorderRadius: "5px 5px 5px 5px",
        inputBorderStyle: "solid"
      }
    case "underline":
      return {
        inputBottomBorder: "1px solid",
        inputBorderStyle: "hidden"
      }
    case "hidden":
      return {
        inputBorderStyle: "hidden"
      }
    default:
      return {
        inputBorderRadius: "0px 0px 0px 0px",
        inputBorderStyle: "solid"
      }
  }
}

export const setHighlightColor = (clickedHighlightColor: string, clickedHighlight: boolean, inputBorderColor: string) => {
  return clickedHighlight ? clickedHighlightColor : inputBorderColor;
}


export const setRightIcon = (searchInput: boolean, searchSymbol: string) => {
  return {
    backgroundSymbol: searchInput ? searchSymbol : "",
    paddingLeft: searchInput ? "30px" : ""
  }
}

export const setDisabled = (disabled: boolean, backgroundColor: string) => {
  return {
    backgroundColor: disabled ? "grey" : backgroundColor,
    placeHolderColor: disabled ? "white" : "black"
  }
}
export const renderInput = (inputType: string, mutilLine: boolean, disabled: boolean, placeHolderLable: string, clickedHighlightColor: string, inputBorderColor: string) => {

  let typeOfBlock: string = inputType == "text" ? "input" : "number"
  typeOfBlock = (typeOfBlock == "input" || mutilLine) ? "textarea" : typeOfBlock
  function focusHandler(clickedHighlightColor: string, inputBorderColor: string) {
    inputBorderColor = clickedHighlightColor
  }
  switch (typeOfBlock) {

    case "number":
      return (
        <NumberInput
          disabled={disabled}
          placeholder={placeHolderLable}
          onFocus={() => focusHandler(clickedHighlightColor, inputBorderColor)}
        />
      )
    case "textarea":
      return (
        <TextareaInput
          disabled={disabled}
          placeholder={placeHolderLable}
          onFocus={() => focusHandler(clickedHighlightColor, inputBorderColor)}
        />
      )
    case "passwork":
      return
      <PasswordInput
        disabled={disabled}
        placeholder={placeHolderLable}
        onFocus={() => focusHandler(clickedHighlightColor, inputBorderColor)}
      />
    default:
      return
      <TextInput
        disabled={disabled}
        placeholder={placeHolderLable}
        onFocus={() => focusHandler(clickedHighlightColor, inputBorderColor)}
      />

  }



}



