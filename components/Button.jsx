Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit']).isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    variant: PropTypes.string.isRequired,
  };
export const Button = ({type,title,icon,variant}) => {
  return (
    <button
     type={type}
     title={title}
     icon={icon}
     variant={variant}
     
    >Login</button>
  )
}

export default Button;
