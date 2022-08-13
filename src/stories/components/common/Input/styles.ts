import styled from "styled-components"; 

type InputContainerProps = {
  longTran: string;
}

export const InputContainer = styled.div<InputContainerProps>`
  background-color: ${props => props.longTran};
  width: 200;
  height: 40;
`;

export const AnotherDiv = styled.div``;
