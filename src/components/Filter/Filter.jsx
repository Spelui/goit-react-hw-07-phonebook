import PropTypes from "prop-types";
import s from "./Filter.module.scss";

const Filter = ({ onChangeValue, filter }) => {
  return (
    <div className={s.filter}>
      <label className={s.filter__search}>
        Find contacts by name
        <input
          className={s.filter__input}
          onChange={onChangeValue}
          type="text"
          name="filter"
          value={filter}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onChangeValue: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;
