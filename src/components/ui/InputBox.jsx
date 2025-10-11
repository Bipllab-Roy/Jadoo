
const InputBox = ({ type, placeholder, name, ...props }) => {
  return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-black outline-none border-black focus:border-primary focus-visible:shadow-none dark:border-dark-3 "
        {...props}
      />
    </div>
  );
};

export default InputBox;