import { BtnClose, Icon } from './CloseBtn.styled';

export const CloseBtn = ({ onClickDelete, name, deleteAlt, togglePreview }) => {
  const deleteData = () => {
    onClickDelete(name, '');

    if (deleteAlt) {
      onClickDelete('alt', 'default image');
      deleteAlt('');
      togglePreview(true);
    }
  };

  return (
    <BtnClose onClick={deleteData} type="button">
      <Icon />
    </BtnClose>
  );
};
