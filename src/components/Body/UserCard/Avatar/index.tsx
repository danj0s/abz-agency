import React from 'react';
export interface IAvatarProps {
  url?: string;
}
export const Avatar: React.FC<IAvatarProps> = ({ url }) => {
  return (
    <div className="avatar">
      <img src={url ? url : "/png/defaultAvatar.png"} alt="User Avatar" />
    </div>
  );
};

// export default Avatar
