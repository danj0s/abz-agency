import { useState } from 'react';
import { SHOW_FIRTS_USER_CARD, SHOW_MORE_USER_CARD } from '../../../utils/const';
import { UserCard } from './UserCard';

interface UsersSectionProps {}

const UsersSection = ({}: UsersSectionProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="user-card-wrapper">
      <h1 id={showMore ? undefined : 'users'} className="user-heading-text">
        Working with GET request
      </h1>
      <UserCard countToShowUsers={showMore ? SHOW_MORE_USER_CARD : SHOW_FIRTS_USER_CARD} />
      <a href="#users">
        <button
          className="show-more-btn"
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </a>
    </div>
  );
};

export default UsersSection;
