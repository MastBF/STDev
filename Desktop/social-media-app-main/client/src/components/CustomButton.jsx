const CustomButton = ({ title, containerStyles, iconRight, type, onClick }) => {
    return (
      <button
        onClick={onClick}
        type={type || "button"}
        className={`inline-flex items-center bg-[#26737e] ${containerStyles}`}
      >
        {title}
  
        {iconRight && <div className='ml-2'>{iconRight}</div>}
      </button>
    );
  };
  
  export default CustomButton;