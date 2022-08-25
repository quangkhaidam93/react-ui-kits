import styled from "styled-components";
import searchSymbol from "../../../assets/searchSymbol.png"



export const InputContainer = styled.input< { backgroundColor?: string, clickedHighlighColor?: string, autoFocus?: boolean | undefined, inputBorderColor?: string, inputBorder?: string, inputBottomBorder?: string, inputBorderStyle?: string, inputBorderRadius?: string, placeHolderColor?: string, inputHeight?: string, inputWidth?: string, } >`
background-color: ${props => props.backgroundColor};
border-color: ${props => props.inputBorderColor};
border-radius: ${props => props.inputBorderRadius};
border-style: ${props => props.inputBorderStyle};
border-bottom: ${props => props.inputBottomBorder};
border-bottom-color: ${props => props.inputBorderColor};
height: ${props => props.inputHeight};
width: ${props => props.inputWidth};
text-align: start ;
/* vertical-align: text-bottom */
padding:0 5px;
outline: none;
&:focus {
        border-color : ${props => props.clickedHighlighColor};
        background: "yellow" ;
        width: 100%;
    }
&::placeholder {
    color : ${props => props.placeHolderColor};
}
`;
export const searchInput = styled.img`
    width: 5px;
    height: 5px;
    src: url(${searchSymbol});
`;



