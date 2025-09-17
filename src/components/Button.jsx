const Button = ({
  TagName = "button",
  btnStyle = "default",
  children,
  ...props
}) => {
   const buttonStyle = () => {
    if (btnStyle === "default") {
      return "btn bg-yellow text-white hover:text-black hover:bg-amber-200";
    }
    if (btnStyle === "secondary") {
      return "btn bg-green-500 text-white hover:text-black hover:bg-amber-200";
    }
  };
  return <TagName 
  className={buttonStyle()}>
    {children}
    </TagName>;
};

export default Button;
