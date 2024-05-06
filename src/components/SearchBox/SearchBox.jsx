export const SearchBox = ({ onSearchChange }) => {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value); 
  };

  return (
    <div>
      <p>Find contact by name</p>
      <input type="text" onChange={handleInputChange} />
    </div>
  );
};