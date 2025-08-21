export const MyButton = ({handleClick, children}) => {
  return (
    <button
      key={children}
      className="btn"
      onClick={() => handleClick(children)}> {children}
    </button> 

  );
}