import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ friend: { avatar, name, isOnline, } }) => {
  
  return (
    <>
      {isOnline ? <span className={css.status} style={{ backgroundColor: "green" }}></span> : <span className={css.status}></span>}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
  }).isRequired,
}