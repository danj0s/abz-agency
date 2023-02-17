import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import InputsBlock from './ContactsBlock';
import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { CREATE_REQUEST_SCHEMA, TCreateRequestSchema } from './schema';
import SelectPositionBlock from './SelectPositionBlock';
import DragAndDrop from './DragAndDrop';
import { useSubmitUsers } from '../../../../hooks/useSubmitUsers';

const RequestForm = () => {
  const formMethods = useForm<TCreateRequestSchema>({
    resolver: zodResolver(CREATE_REQUEST_SCHEMA),
    defaultValues: {
      position_id: 1,
    },
  });

  const handleAddUsers = useSubmitUsers;

  const isValid = formMethods.formState.isValid;

  return (
    <>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(handleAddUsers())} className="form-container">
          <InputsBlock />
          <SelectPositionBlock />
          <DragAndDrop />
          <div className="submit-button-wrapper">
            <button className={`submit-button ${isValid ? '' : 'disable-submit-button'}`} type="submit">
              Sign up
            </button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default RequestForm;
