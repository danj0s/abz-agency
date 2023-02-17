import { FETCH_URl } from './const';

interface IFetchToken {
  success: boolean;
  token: string;
}

export const fetchToken = async (): Promise<IFetchToken> => {
  const res = await fetch(`${FETCH_URl}token`);
  return res.json();
};

interface IFetchPosition {
  success: boolean;
  positions: [
    {
      id: number;
      name: string;
    }
  ];
}
export const fetchPosition = async (): Promise<IFetchPosition> => {
  const res = await fetch(`${FETCH_URl}positions`);
  return res.json();
};

interface IFetchUsers {
  users: [
    {
      id: number;
      name: string;
      email: string;
      phone: string;
      position: string;
      position_id: string;
      registration_timestamp: number;
      photo: string;
    }
  ];
}

export const fetchUsers = async (count: number): Promise<IFetchUsers> => {
  const res = await fetch(`${FETCH_URl}users?page=1&count=${count}`);
  return res.json();
};
