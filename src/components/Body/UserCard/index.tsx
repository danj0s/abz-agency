import React from 'react';
import { Avatar } from './Avatar';
import { Description } from './Description';
import { useQuery } from 'react-query';

export interface IUserCardProps {
  countToShowUsers: number;
}

export const UserCard: React.FC<IUserCardProps> = ({ countToShowUsers }) => {
 
  const fetchUsers = async (count: number) => {
    const res = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${countToShowUsers}`
    );
    return res.json();
  };

  const { isLoading, data } = useQuery(
    ['users', countToShowUsers],
    () => fetchUsers(countToShowUsers),
    { keepPreviousData: true }
  );

  if (isLoading) {
    return <span className="loader" />;
  }


  console.log(data.users, 'data');

  return (
    <div className="card-container">
      {data.users.map((el: any) => {
        return (
          <div className="card" key={el.id}>
            {el.id}
            <Avatar url={el.photo} />
            <Description name={el.name} email={el.email} phone={el.phone} position={el.position} />
          </div>
        );
      })}
    </div>
  );
};


