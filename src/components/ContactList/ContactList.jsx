import { List, Delete } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/Contacts/operation';
import { getItems } from 'Redux/Contacts/selector';
import { getFilter } from 'Redux/Filter/selector';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getItems);

  const filter = useSelector(getFilter);

  const filtered = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {filtered?.map(({ name, phone, id }) => (
        <li key={id}>
          {name}: {phone}
          <Delete
            type="button"
            id={id}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </Delete>
        </li>
      ))}
    </List>
  );
};
