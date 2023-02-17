import { forwardRef, LegacyRef } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { FormErrorMessage, FormHelperMessage } from '../FormMessage';

export interface IInputProps {
  placeholder?: string;
  name: string;
  rules?: RegisterOptions;
  value?: string;
  className?: string;
  error?: string;
  formHelperMessage?: string;
}

export const Input: React.FC<IInputProps> = forwardRef(
  ({ placeholder = 'Placeholder', className, formHelperMessage, ...props }, ref) => {
    const hasError = props.error;

    return (
      <div className="input-wrapper">
        <input
          className={`input ${hasError ? 'input-error' : ''}`}
          type="text"
          autoComplete="off"
          {...props}
          ref={ref as LegacyRef<HTMLInputElement>}
        />
        <label className="label" htmlFor="input" id="label-input">
          <p className={`text ${hasError ? 'text-error' : ''}`}>{placeholder}</p>
        </label>

        {hasError ? (
          <ErrorMessage
            name={props.name}
            render={({ message }) => <FormErrorMessage className="error-message">{message}</FormErrorMessage>}
          />
        ) : (
          <FormHelperMessage children={formHelperMessage} />
        )}
      </div>
    );
  }
);
