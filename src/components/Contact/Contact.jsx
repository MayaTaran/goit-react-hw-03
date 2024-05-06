export const Contact = ({id, name, number, onDelete}) => {

  return (
    <div>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button> 
    </div>
  );

};