import SearchIcon from "../icons/SearchIcon";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  label: string;
  placeholder: string;
  isDisabled: boolean;
  handleClick: () => void;
}

const SearchBar = ({
  type,
  label,
  placeholder,
  isDisabled,
  handleClick,
  ...props
}: SearchBarProps) => {
  return (
    <>
      <label className="sr-only" htmlFor={label}>
        {label}
      </label>
      <div className="relative py-2 pl-4 pr-12 border rounded-lg  border-light/15 bg-light/10 focus-within:border focus-within:border-sky-400 focus-within:shadow-[0_0_0_1px_oklch(58.8%_0.158_241.966)]">
        <input
          className="w-full font-primary-regular outline-none text-light placeholder:text-light/40 "
          {...props}
          type={type}
          placeholder={placeholder}
          id={label}
        />
        <button
          onClick={() => handleClick()}
          type="button"
          disabled={isDisabled}
          className="absolute top-0 right-0 py-3 px-4 rounded-r-lg cursor-pointer outline-none disabled:opacity-40 focus:scale-110"
        >
          <SearchIcon />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
