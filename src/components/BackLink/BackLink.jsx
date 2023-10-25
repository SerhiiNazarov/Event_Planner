import { Link, Arrow } from './BackLink.styled';

export const BackLink = () => {
  return (
    <Link to="/">
      <span>
        <Arrow />
      </span>
      Back
    </Link>
  );
};
