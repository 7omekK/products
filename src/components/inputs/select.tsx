import { ChangeEvent, ReactNode, useState } from "react";

interface SelectProps {
  children: ReactNode;
  className: string;
  label: string;
  onChange: (value: string) => void;
}

function Select({ label, onChange, children, className }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState<string>();

  const selectedOptionChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
    onChange(e.target.value);
  };

  return (
    <select
      className={className}
      value={selectedValue}
      onChange={selectedOptionChangeHandler}
    >
      <option value="">{label}</option>
      {children}
    </select>
  );
}

interface SelectOptionProps {
  value: string | number;
  children: string;
}

function SelectOption({ value, children }: SelectOptionProps) {
  return <option value={value}>{children}</option>;
}

Select.Option = SelectOption;

export default Select;
