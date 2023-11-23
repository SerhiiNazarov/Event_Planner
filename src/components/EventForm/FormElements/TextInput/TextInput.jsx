import { ErrorMessage } from 'formik';
import { CloseBtn } from 'components/CloseBtn';
import { Input, Textarea } from './TextInput.styled';

export const TextInput = ({
  field,
  meta,
  props: { as, type = 'text', name, setFieldValue },
}) => {
  return (
    <>
      {as !== 'textarea' ? (
        <Input {...field} type={type} name={name} />
      ) : (
        <Textarea {...field} type={type} name={name} />
      )}
      <CloseBtn onClickDelete={setFieldValue} name={name} />
      <ErrorMessage name={name} component="span" />
    </>
  );
};
