interface IInputRadioProps {
  value: string;
  label?: string;
  classNameForInput?: string;
  classNameForLabel?: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputRadio = ({
  label,
  value,
  classNameForInput,
  classNameForLabel = 'radio-label select-lable',
  ...props
}: IInputRadioProps) => {
  return (
    <div className="select-wrapper">
      <input type="radio" id={value} value={value} className={classNameForInput} {...props} />
      <label htmlFor={value} className={classNameForLabel}>
        {label}
      </label>
    </div>
  );
};

export default InputRadio;
