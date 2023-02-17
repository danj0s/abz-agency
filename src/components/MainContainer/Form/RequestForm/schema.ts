import { isPossiblePhoneNumber } from 'react-phone-number-input';
import { z } from 'zod';
import { MIN_DIMENSIONS, MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES } from '../../../../utils/const';
import { getImageDimension } from '../../../../utils/getImageDimension';

export const CREATE_REQUEST_SCHEMA = z.object({
  name: z.string().min(1, 'Can`t be empty'),
  email: z.string().email({ message: 'Invalid Email' }),
  phone: z.string().refine((val) => isPossiblePhoneNumber(val), {
    message: 'Invalid phone number',
  }),
  position_id: z.number(),
  photo: z
    .instanceof(FileList)
    .refine((files) => files?.length === 1, 'Choose your photo')
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), '.jpg and .jpeg files are accepted.')
    .refine(async (files) => {
      const file = files.item(0);
      if (!file) return;

      const checkDimension = await getImageDimension(file);
      if (checkDimension) return true;
    }, `Should not be less than ${MIN_DIMENSIONS}px x ${MIN_DIMENSIONS}px.`),
});
export type TCreateRequestSchema = z.infer<typeof CREATE_REQUEST_SCHEMA>;
