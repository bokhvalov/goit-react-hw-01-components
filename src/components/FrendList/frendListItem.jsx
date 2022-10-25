import PropTypes from 'prop-types';
import css from './frendListItem.module.css';

export const FrendListItem = ({ frend: { avatar, name, isOnline } }) => {
  return (
    <li className={css.item} >
      <span className={`${css.status} ${isOnline && css.online}`}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FrendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }),
};
