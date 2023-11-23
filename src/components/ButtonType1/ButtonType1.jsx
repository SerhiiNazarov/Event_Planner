import { Button } from './ButtonType1.styled';

export const ButtonType1 = ({ onClick, type, children }) => {
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
};
