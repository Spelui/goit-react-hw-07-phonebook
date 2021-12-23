import PropTypes from "prop-types";
import s from "./ContactList.module.scss";

const ContactList = ({ filterContactsList, onClickDel }) => {
  return (
    <ul className={s.contacts__list}>
      {filterContactsList.map(({ name, phone, id }) => (
        <li key={id} className={s.contacts__item}>
          <p className={s.contacts__text}>
            {name}: <span>{phone}</span>
          </p>
          <button className="btn" onClick={() => onClickDel(id)} type="button">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filterContactsList: PropTypes.array,
  onClickDel: PropTypes.func,
};

export default ContactList;
