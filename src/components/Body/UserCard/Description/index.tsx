import React from 'react';
import { LENGTH_DESCRIPTION_TEXT } from '../../../../utils/const';
export interface IDescriptionProps {
  name?: string;
  position?: string;
  email?: string;
  phone?: string;
}
export const Description: React.FC<IDescriptionProps> = ({ email, name, phone, position }) => {
  return (
    <React.Fragment>
      {name && (
        <div
          className="user-description"
          style={name.length < LENGTH_DESCRIPTION_TEXT ? { display: 'flex', justifyContent: 'center' } : {}}
        >
          {name}
        </div>
      )}
      {position && (
        <div
          className="user-description"
          style={position.length < LENGTH_DESCRIPTION_TEXT ? { display: 'flex', justifyContent: 'center' } : {}}
        >
          {position}
        </div>
      )}
      {email && (
        <div
          className="user-description"
          style={email.length < LENGTH_DESCRIPTION_TEXT ? { display: 'flex', justifyContent: 'center' } : {}}
        >
          {email}
        </div>
      )}
      {phone && (
        <div
          className="user-description"
          style={phone.length < LENGTH_DESCRIPTION_TEXT ? { display: 'flex', justifyContent: 'center' } : {}}
        >
          {phone}
        </div>
      )}
    </React.Fragment>
  );
};

// export default Avatar
