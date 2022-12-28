import { FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from 'Redux/Filter/slice';
import { getFilter } from 'Redux/Filter/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterSlice = useSelector(getFilter);

  const change = event => {
    dispatch(filter(event.target.value));
  };
  return (
    <FilterLabel>
      Find contacts by name
      <input onChange={change} value={filterSlice} type="text" name="filter" />
    </FilterLabel>
  );
};
