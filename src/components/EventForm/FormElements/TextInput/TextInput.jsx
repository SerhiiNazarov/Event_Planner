import { ErrorMessage } from 'formik';
import { CloseBtn } from 'components/CloseBtn';
import { Input, Textarea } from './TextInput.styled';

export const TextInput = ({ field, props: { as, type = 'text', name } }) => {
  return (
    <>
      {as !== 'textarea' ? (
        <Input {...field} type={type} name={name} />
      ) : (
        <Textarea {...field} type={type} name={name} />
      )}
      <CloseBtn
        type="button"
        // onClickDelete={onDeleteInfo}
        // setFun={setTitleValue}
      />
      <ErrorMessage name={name} component="span" />
    </>
  );
};
