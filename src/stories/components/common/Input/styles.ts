import styled, { css } from "styled-components";
import React, { InputHTMLAttributes } from "react"

interface InputContainerProps {
    backgroundColor?: string,
    clickedHighlightColor?: string,
    autoFocus?: boolean | undefined,
    inputBorderColor?: string,
    inputBorder?: string,
    inputBottomBorder?: string,
    inputBorderStyle?: string,
    inputBorderRadius?: string,
    placeHolderColor?: string,
    inputHeight?: string,
    inputWidth?: string,
    backgroundSymbol?: string,
    paddingLeft?: string
}

export const InputContainer = styled.div<InputContainerProps>`
background-color: ${props => props.backgroundColor};
background: ${props => props.backgroundSymbol} no-repeat scroll 7px 7px ;
border-color: ${props => props.inputBorderColor};
border-radius: ${props => props.inputBorderRadius};
border-style: ${props => props.inputBorderStyle};
border-bottom: ${props => props.inputBottomBorder};
border-bottom-color: ${props => props.inputBorderColor};
height: ${props => props.inputHeight};
width: ${props => props.inputWidth};
display: flex;
/* vertical-align: text-bottom */
padding-left: ${props => props.paddingLeft};
outline: none;
&:focus {
        border-color : ${props => props.clickedHighlightColor};
        width: 100%;
    }
&::placeholder {
    color : ${props => props.placeHolderColor};
}
`;

interface Input {
    disabled: boolean
    placeholder: string
}

const CommonInput = css`
    border-style: hidden,

`;
export const NumberInput = styled.input<Input>`
${CommonInput}

`
export const TextareaInput = styled.textarea<Input>`
${CommonInput}
`
export const PasswordInput = styled.input<Input>`
${CommonInput}
& [type = "password"] {
    background: red;
}
`
export const TextInput = styled.input<Input>`
${CommonInput}
`





