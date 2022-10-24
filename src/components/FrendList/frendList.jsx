import PropTypes, { shape } from 'prop-types';
import css from './frendList.module.css';
import { FrendListItem } from './frendListItem';

export const FrendList = ({ friends }) => (
  <ul className={css.frendList}>
    {friends.map(frend => {
      return <FrendListItem frend={frend} />;
    })}
  </ul>
);

FrendList.propType = {
friends: PropTypes.arrayOf(shape).isRequired
}

