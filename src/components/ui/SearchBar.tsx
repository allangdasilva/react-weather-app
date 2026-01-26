interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  placeholder: string;
}

const SearchBar = ({ type, label, placeholder, ...props }: SearchBarProps) => {
  return (
    <>
      <label className="sr-only" htmlFor={label}>
        {label}
      </label>
      <input {...props} type={type} placeholder={placeholder} id={label} />
    </>
  );
};

export default SearchBar;
