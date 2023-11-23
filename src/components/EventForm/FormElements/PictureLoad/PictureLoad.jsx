import { useState, useEffect } from 'react';
import { InputFile, AltTextContainer, AltText } from './PictureLoad.styled';
import { useTranslation } from 'react-i18next';
import { ButtonType1 } from 'components/ButtonType1';
import { CloseBtn } from 'components/CloseBtn';

export const PictureLoad = ({
  field,
  props: { name, values, setFieldValue, setFieldTouched, initialValues },
}) => {
  const [ispreview, setIsPreview] = useState(false);
  const [altTxt, setAltTxt] = useState('');

  const { t } = useTranslation();

  useEffect(() => {
    if (initialValues.file === '') {
      setIsPreview(false);
    } else {
      setAltTxt(initialValues.alt);
      setIsPreview(true);
    }
  }, [initialValues.file, initialValues.alt]);

  const handleFileUpload = async e => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFieldValue('file', selectedFile);
    }
  };

  const onReload = () => {
    setIsPreview(false);
  };

  return (
    <>
      {!ispreview ? (
        <InputFile
          type="file"
          name={name}
          {...field}
          accept="image/*,.png, .jpeg,.gif,.web"
          onChange={handleFileUpload}
          value={values}
        />
      ) : (
        <AltTextContainer>
          <AltText>{altTxt}</AltText>
          <ButtonType1 type="button" onClick={onReload}>
            {t('reload')}
          </ButtonType1>
        </AltTextContainer>
      )}
      <CloseBtn
        onClickDelete={setFieldValue}
        name={name}
        deleteAlt={setAltTxt}
        togglePreview={setIsPreview}
      />
    </>
  );
};
