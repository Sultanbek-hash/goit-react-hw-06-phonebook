import styles from './filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter} from 'redux/filter/filter-slice';
import { getFilter } from 'redux/contacts/contacts-selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      <span className={styles.span}>Find contacts by name</span>
      <input type="text" name={filter} value={filter} onChange={handleChangeFilter} />
    </label>
  );
};

export default Filter;