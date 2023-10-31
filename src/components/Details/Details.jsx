import { useLocation } from 'react-router';

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
} from './Details.styled';

export const Details = () => {
  const location = useLocation();
  const {
    state: { event },
  } = location;

  return (
    <DetailsWrapepr>
      <Title>{event.title}</Title>
      <DetailsCard>
        <Image src={event.imagex1} alt={event.description} />
        <DetailsTxt>{event.text}</DetailsTxt>
        <CatListWrp>
          {event.category && <Category cat={event.category} />}
          {event.priority && <Category cat={event.priority} />}
          {event.location && <Category cat={event.location} />}
          <Category cat={`${event.date} at ${event.time} am`} />
        </CatListWrp>
        <BtnListWrp>
          <Link
            to={{
              pathname: '/edit',
            }}
            state={{ event }}
            key={event.id}
          >
            <ButtonType2 type="button">Edit</ButtonType2>
          </Link>
          <ButtonType1 type="button">Delete event</ButtonType1>
        </BtnListWrp>
      </DetailsCard>
    </DetailsWrapepr>
  );
};
