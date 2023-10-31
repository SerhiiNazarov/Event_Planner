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
  CloseBtn,
  Link,
  CatListWrp,
} from './Card.styled';
import { Category } from 'components/Category';

export const Card = ({ event }) => {
  return (
    <Container>
      <CloseBtn />

      <ImgWrapper>
        <CatListWrp>
          {/* {event.category &&
            event.category.map(item => <Category key={item} cat={item} />)} */}
          <Category cat={event.category} />
          <Category cat={event.priority} />
        </CatListWrp>
        <Img src={event.imagex1} alt={event.description} />
        <DateWrp>
          <Date>{`${event.date} at ${event.time}`}</Date>
          <Date>{event.location}</Date>
        </DateWrp>
      </ImgWrapper>

      <Description>
        <EventName>{event.title}</EventName>
        <Text>{event.text}</Text>
      </Description>
      <Link
        to={{
          pathname: '/details',
        }}
        state={{ event }}
        key={event.id}
      >
        <BtnMoreinfo type="button">More info</BtnMoreinfo>
      </Link>
    </Container>
  );
};
