export const SelectPagination = ({options, onChangeFct, initialValue}) => {
    // option = {value : value, label : label}
  return (
    <>
        <select value={initialValue} onChange={(e) => onChangeFct(e.target.value)}>
            {options.map((option) => (
                <option value={option.value}>{option.label}</option>
            ))}
        </select>
    </>
  );
}