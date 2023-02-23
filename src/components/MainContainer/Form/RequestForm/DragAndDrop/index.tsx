import { ErrorMessage } from '@hookform/error-message';
import { useEffect, useState } from 'react';
import { useController, useFormContext } from 'react-hook-form';
import { FormErrorMessage } from '../../../../FormMessage';
import { TCreateRequestSchema } from '../schema';

const DragAndDrop = () => {
  const { register, setValue, control } = useFormContext<TCreateRequestSchema>();

  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<FileList>();
  const photoControl = useController({ control, name: 'photo' });

  useEffect(() => {
    if (!uploadedFile) return;
    setValue('photo', uploadedFile, { shouldValidate: true });
  }, [uploadedFile]);

  const handleDrag = function (e: React.SyntheticEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = function (e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();

    setDragActive(false);
    if (e.dataTransfer?.files?.[0]) {
      setUploadedFile(e.dataTransfer.files);
    }
  };
  const fileName = photoControl.field.value?.item(0)?.name;

  return (
    <div id="form-file-upload" onDragEnter={handleDrag}>
      <label id="label-file-upload" className={dragActive ? 'drag-active' : ''}>
        <input type="file" id="input-file-upload" accept="image/jpeg, image/jpg" {...register('photo')} />
        <div className="upload-button">Upload</div>
        <div className="upload-input-text">{fileName ? fileName : 'Or drag and drop your file here'} </div>
      </label>
      {dragActive && (
        <div
          id="drag-file-element"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
      <ErrorMessage
        name={'photo'}
        render={({ message }) => <FormErrorMessage className="error-message">{message}</FormErrorMessage>}
      />
    </div>
  );
};

export default DragAndDrop;
