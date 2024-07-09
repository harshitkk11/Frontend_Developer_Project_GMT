const InputField = ({
  label = "",
  type = "",
  name = "",
  autocomplete,
  placeholder = "",
  onchange,
  value,
  disable,
  error,
}) => {
  return (
    <div className="w-full space-y-1">
      <label
        htmlFor={label}
        className="text-[1rem] font-medium text-black md:font-semibold"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        name={name}
        className={`block w-full rounded-lg border border-lightgray bg-white px-4 py-3 text-[1rem] text-black outline-none placeholder:text-lightgray font-medium ${
          error
            ? "border-error-light dark:border-error-dark"
            : "border-input-text-light dark:border-input-text-dark"
        }`}
        required=""
        aria-describedby={label}
        autoComplete={autocomplete}
        placeholder={placeholder}
        disabled={disable}
        onChange={onchange}
        value={value}
      />
    </div>
  );
};

export default InputField;
