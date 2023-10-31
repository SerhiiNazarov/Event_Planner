import { Button } from './ButtonType1.styled';

export const ButtonType1 = ({ children, onClick, type }) => {
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
};
