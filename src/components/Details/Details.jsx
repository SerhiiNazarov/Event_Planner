import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { useDispatch } from 'react-redux';
import { deleteEvent } from 'redux/events/eventsSlice';

import { ButtonType1 } from 'components/ButtonType1';
import { ButtonType2 } from 'components/ButtonType2';
import { Title } from 'components/PagesTitle';
import { Category } from 'components/Category';

import {
  DetailsWrapepr,
  DetailsCard,
  Image,
  DetailsTxt,
  CatListWrp,
  BtnListWrp,
  Link,
  Container,
} from './Details.styled';

export const Details = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const {
    state: { event },
  } = location;

  const onDeleteEvent = () => {
    dispatch(deleteEvent(event.id));
    navigate('/');
  };

  return (
    <Container>
      <DetailsWrapepr>
        <Title>{event.title}</Title>
        <DetailsCard>
          <Image src={event.file} alt={event.alt} />
          <DetailsTxt>{event.description}</DetailsTxt>
          <CatListWrp>
            {event.category && <Category cat={event.category} />}
            {event.priority && <Category cat={event.priority} />}
            {event.location && <Category cat={event.location} />}
            <Category
              cat={
                event.time ? `${event.date} at ${event.time}` : `${event.date}`
              }
            />
          </CatListWrp>
          <BtnListWrp>
            <Link
              to={{
                pathname: '/edit',
              }}
              state={{ event }}
              key={event.id}
            >
              <ButtonType2 type="button">{t('edit')}</ButtonType2>
            </Link>
            <ButtonType1 type="button" onClick={onDeleteEvent}>
              {t('del_event')}
            </ButtonType1>
          </BtnListWrp>
        </DetailsCard>
      </DetailsWrapepr>
    </Container>
  );
};
