import { useMutation, useQuery } from 'react-query';
import { FETCH_URl } from '../utils/const';
import { fetchToken } from '../utils/fetchFunction';

export const useSubmitUsers = () => {
  const { data } = useQuery(['token'], fetchToken, {
    keepPreviousData: true,
  });

  const addUsersMutation = useMutation((formData: FormData) => {
    return fetch(`${FETCH_URl}users`, {
      method: 'POST',
      headers: {
        ...(data && { Token: data.token }),
      },
      body: formData,
    });
  });

  const handleAddUsers = (formDataObject: any) => {
    const formData = new FormData();

    Object.keys(formDataObject).forEach((key) => formData.append(key, formDataObject[key]));

    addUsersMutation.mutate(formData, { onError: (error) => console.log(error, 'error') });
    console.log(formData, 'formData');
    console.log(formDataObject, 'formDataObject');
  };

  return handleAddUsers;
};
