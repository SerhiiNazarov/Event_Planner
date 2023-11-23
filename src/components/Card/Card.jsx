import { useTranslation } from 'react-i18next';

import {
  Container,
  Img,
  EventName,
  Text,
  Description,
  DateWrp,
  Date,
  ImgWrapper,
  BtnMoreinfo,
  DeleteBtn,
  Link,
  CatListWrp,
  IconDeleteBtn,
} from './Card.styled';
import { Category } from 'components/Category';

export const Card = ({ event, onDelete }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <DeleteBtn
        type="button"
        onClick={() => {
          onDelete(event.id);
        }}
      >
        <IconDeleteBtn />
      </DeleteBtn>

      <ImgWrapper>
        <CatListWrp>
          <Category cat={t(`${event.category.toLowerCase()}`)} />
          <Category cat={t(`${event.priority.toLowerCase()}`)} />
        </CatListWrp>
        <Img src={event.file} alt={event.alt} />
        <DateWrp>
          <Date>
            {event.time ? `${event.date} at ${event.time}` : `${event.date}`}
          </Date>
          <Date>{event.location}</Date>
        </DateWrp>
      </ImgWrapper>
      <Description>
        <EventName>{event.title}</EventName>
        <Text>{event.description}</Text>
      </Description>
      <Link
        to={{
          pathname: '/details',
        }}
        state={{ event }}
        key={event.id}
      >
        <BtnMoreinfo type="button"> {t('more_info')}</BtnMoreinfo>
      </Link>
    </Container>
  );
};
