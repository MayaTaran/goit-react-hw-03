import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

export const Contact = ({ id, name, number, onDelete }) => {

  return (
    <div className={css.card}>
      <div>
        <div className={css.text}><IoPersonSharp />
          <p>{name}</p></div>
        <div className={css.text}>
          <FaPhoneAlt />
        <p>{number}</p></div>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>Delete</button> 
    </div>
  );

};