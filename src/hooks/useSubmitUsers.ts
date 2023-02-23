import { useMutation, useQuery } from 'react-query';
import { FETCH_URl } from '../utils/const';
import { fetchToken } from '../utils/fetchFunction';
import { TCreateRequestSchema } from '../components/MainContainer/Form/RequestForm/schema';

export const useSubmitUsers = () => {
  const { data } = useQuery(['token'], fetchToken, {
    keepPreviousData: true,
  });

  const addUsersMutation = useMutation(
    (formData: FormData) => {
      return fetch(`${FETCH_URl}users`, {
        method: 'POST',
        headers: {
          ...(data && { Token: data.token }),
        },
        body: formData,
      });
    },
    { onError: console.error }
  );

  const handleAddUsers = (formDataObject: TCreateRequestSchema) => {
    const changedFormDataObjectForSendRequest: any = {
      name: formDataObject.name,
      email: formDataObject.email,
      phone: formDataObject.phone,
      position_id: formDataObject.position_id,
      photo: formDataObject.photo[0],
    };
    const formData = new FormData();

    Object.keys(changedFormDataObjectForSendRequest).forEach((key) =>
      formData.append(key, changedFormDataObjectForSendRequest[key])
    );

    addUsersMutation.mutate(formData);
    console.log(changedFormDataObjectForSendRequest.photo, '1x');
  };

  return handleAddUsers;
};
