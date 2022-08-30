import { userIcon, searchSymbol } from "../../../assets/index"


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
        inputHeight: "20px",
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

export const setRightIcon = (rightIcon: string) => {
  switch (rightIcon) {
    case "user":
      return userIcon
    case "search":
      return searchSymbol
    default:
      break
  }

}