import React from 'react';

export type MessageProps = {
  className?: string;
  children: React.ReactNode;
};

export const FormErrorMessage: React.FC<MessageProps> = ({ className = 'error-message', children, ...props }) => (
  <p className={className} {...props}>
    {children}
  </p>
);

export const FormHelperMessage: React.FC<MessageProps> = ({ className = 'helper-message', children, ...props }) => {
  if (!children) return null;

  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};
