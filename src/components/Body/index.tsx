import  { useState } from 'react';
import InfoBlock from './InfoBlock';
import { UserCard } from './UserCard';
import { SHOW_FIRTS_USER_CARD, SHOW_MORE_USER_CARD } from '../../utils/const';
import RequestForm from './RequestForm';

function Body() {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="body">
      <InfoBlock />
      <div className="user-card-wrapper">
        <div className="body-text">Working with GET request</div>

        <UserCard countToShowUsers={showMore ? SHOW_MORE_USER_CARD : SHOW_FIRTS_USER_CARD} />
        <button
          className="show-more-btn"
          onClick={() => {
            setShowMore(!showMore);
            console.log('loh');
          }}
        >
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <div className='form-wrapper'>
      <div className="body-text">Working with POST request</div>
<RequestForm/>
      </div>
    </div>
  );
}

export default Body;
