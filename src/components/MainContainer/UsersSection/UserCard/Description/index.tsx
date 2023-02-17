import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export interface IDescriptionProps {
  name?: string;
  position?: string;
  email?: string;
  phone?: string;
}
export const Description = ({ email, name, phone, position }: IDescriptionProps) => {
  return (
    <>
      {name && (
        <p className="user-description" data-tooltip-id={name}>
          {name}
        </p>
      )}
      {position && (
        <p className="user-description" style={{ paddingTop: '20px' }}>
          {position}
        </p>
      )}
      {email && (
        <p className="user-description" data-tooltip-id={email}>
          {email}
        </p>
      )}
      {phone && <p className="user-description">{phone}</p>}
      <Tooltip id={name} place="bottom" content={name} className="tooltips" />
      <Tooltip id={email} place="bottom" content={email} className="tooltips" />
    </>
  );
};
