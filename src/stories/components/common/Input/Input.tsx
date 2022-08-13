import { InputContainer } from "./styles";

type InputProps = {
  backgroundColor: string;
}

const Input: React.FC<InputProps> = ({ backgroundColor }) => {
  return <InputContainer longTran={backgroundColor} >
    Hello World
  </InputContainer>
}

export default Input;