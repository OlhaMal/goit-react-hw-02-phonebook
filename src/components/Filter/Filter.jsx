import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, handleChange }) => (
  <div className={css.filter}>
    <label className={css.filterLabel}>Find contacts by name</label>
    <input type="text" name="filter" value={filter} onChange={handleChange} />
  </div>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
