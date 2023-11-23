import { Btn } from './ButtonType2.styled';

export const ButtonType2 = ({ children, onClick, type }) => {
  return (
    <Btn type={type} onClick={onClick}>
      {children}
    </Btn>
  );
};
