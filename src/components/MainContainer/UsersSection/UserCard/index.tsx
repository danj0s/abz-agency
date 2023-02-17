import React from 'react';
import { Avatar } from './Avatar';
import { Description } from './Description';
import { useQuery } from 'react-query';
import { fetchUsers } from '../../../../utils/fetchFunction';

export interface IUserCardProps {
  countToShowUsers: number;
}

export const UserCard: React.FC<IUserCardProps> = ({ countToShowUsers }) => {
  const { isLoading, data } = useQuery(['users', countToShowUsers], () => fetchUsers(countToShowUsers));

  if (isLoading) {
    return <span className="loader" />;
  }

  return (
    <div className="card-container">
      {data?.users.map((el, index: number) => {
        return (
          <div className="card" key={el.id}>
            <Avatar url={el.photo} />
            <Description name={el.name} email={el.email} phone={el.phone} position={el.position} />
          </div>
        );
      })}
    </div>
  );
};
