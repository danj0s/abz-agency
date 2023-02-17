import { useController, useFormContext } from 'react-hook-form';
import { Input } from '../../../../Input';
import { TCreateRequestSchema } from '../schema';

const InputsBlock = () => {
  const { control, register } = useFormContext<TCreateRequestSchema>();

  const nameInput = useController({ name: 'name', control });
  const emailInput = useController({ name: 'email', control });
  const phoneInput = useController({ name: 'phone', control });

  const nameInputError = nameInput.formState.errors.name?.message;
  const emailInputError = emailInput.formState.errors.email?.message;
  const phoneInputError = phoneInput.formState.errors.phone?.message;

  return (
    <div className="inputs-container">
      <Input placeholder="Your name" value={nameInput.field.value} error={nameInputError} {...register('name')} />
      <Input placeholder="Email" value={emailInput.field.value} error={emailInputError} {...register('email')} />
      <Input
        placeholder="Phone"
        value={phoneInput.field.value}
        error={phoneInputError}
        {...register('phone')}
        formHelperMessage={'+38 (XXX) XXX - XX - XX'}
      />
    </div>
  );
};

export default InputsBlock;
