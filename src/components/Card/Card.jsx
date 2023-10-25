import {
  Container,
  Img,
  EventName,
  Text,
  Description,
  Date,
  ImgWrapper,
  BtnMoreinfo,
  CloseBtn,
} from './Card.styled';

export const Card = ({ event }) => {
  return (
    <Container>
      <CloseBtn />
      <ImgWrapper>
        <Img src={event.imagex1} alt={event.description} />
        <Date></Date>
      </ImgWrapper>
      <Description>
        <EventName>{event.title}</EventName>
        <Text>{event.text}</Text>
      </Description>

      <BtnMoreinfo type="button">More info</BtnMoreinfo>
    </Container>
  );
};
