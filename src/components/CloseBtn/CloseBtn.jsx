import { BtnClose, Icon } from './CloseBtn.styled';

export const CloseBtn = ({ onClickDelete, setFun }) => {
  const deleteData = () => {
    onClickDelete(setFun);
  };

  return (
    <BtnClose onClick={deleteData} type="button">
      <Icon />
    </BtnClose>
  );
};
