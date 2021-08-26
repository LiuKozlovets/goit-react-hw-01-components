import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './friendList.module.css';

const FriendList = ({ friends }) => {
    return <ul className={styles.friendList}>

        {friends.map((friend) => {
            return <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id}
            />
        })}
    </ul>
 }

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,                
        })
)

}

export default FriendList