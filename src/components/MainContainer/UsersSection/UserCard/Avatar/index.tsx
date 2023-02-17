import React from 'react';
export interface IAvatarProps {
  url?: string;
}
export const Avatar = ({ url }: IAvatarProps) => {
  return (
    <div className="avatar">
      <img src={url ? url : '/png/defaultAvatar.png'} alt="User Avatar" />
    </div>
  );
};
