
import css from "./SearchBox.module.css";

export const SearchBox = ({ onSearchChange }) => {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value); 
  };

  return (
    <div className={css.search}>
      <p>Find contact by name</p>
      <input type="text" onChange={handleInputChange} className={css.input}/>
    </div>
  );
};