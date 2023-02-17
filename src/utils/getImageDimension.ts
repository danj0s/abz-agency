import { MIN_DIMENSIONS } from './const';
export const getImageDimension = async (file: File) => {
  const img = new Image();
  const photoUrl = URL.createObjectURL(file);
  img.src = photoUrl;
  const dimension = await new Promise<{ width: number; height: number }>((resolve) => {
    img.onload = function () {
      resolve({ width: img.width, height: img.height });
    };
  });
  const result = dimension.height > MIN_DIMENSIONS && dimension.width > MIN_DIMENSIONS;
  return result;
};
