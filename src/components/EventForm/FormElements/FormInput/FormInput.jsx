import { useField } from 'formik';

export const FormInput = ({ CustomComponent, ...props }) => {
  const [field, meta] = useField(props);

  return <CustomComponent field={field} meta={meta} props={props} />;
};
