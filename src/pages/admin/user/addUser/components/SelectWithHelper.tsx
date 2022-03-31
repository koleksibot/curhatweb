import { FormHelperText, InputLabel, Select, SelectProps } from '@material-ui/core';

interface SelectWithHelperProps extends SelectProps {
  label?: string;
  helperText?: string | false;
}

const SelectWithHelper = (props: SelectWithHelperProps) => {
  const { helperText, label, children, ...rest } = props;

  return (
    <>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select {...rest}>{children}</Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </>
  );
};

export default SelectWithHelper;
