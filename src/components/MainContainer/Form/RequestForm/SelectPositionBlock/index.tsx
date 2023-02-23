import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useQuery } from 'react-query';
import { fetchPosition } from '../../../../../utils/fetchFunction';
import InputRadio from '../../../../InputRadio';
import { TCreateRequestSchema } from '../schema';

const SelectPositionBlock = () => {
  const { setValue, getValues } = useFormContext<TCreateRequestSchema>();
  const [selectPosition, setSelectPosition] = useState<number>(getValues('position_id'));

  const { data: positionData } = useQuery(['position'], () => fetchPosition(), {
    keepPreviousData: true,
  });

  return (
    <div className="position-container">
      <p className="select-lable">Select your position</p>
      <div className="input-select-container">
        {positionData &&
          positionData.positions.map((el) => {
            return (
              <InputRadio
                key={el.id}
                value={el.id.toString()}
                label={el.name}
                checked={el.id === selectPosition}
                classNameForInput="input-position"
                onChange={(element: React.ChangeEvent<HTMLInputElement>) => {
                  const value = Number(element.currentTarget.value);
                  setSelectPosition(value);
                  setValue('position_id', value);
                }}
              />
            );
          })}
      </div>
    </div>
  );
};

export default SelectPositionBlock;
