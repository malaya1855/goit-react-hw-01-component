import PropTypes from "prop-types";
import { FriendsListItem } from "components/FriendListItem/FriendListItem"
import {} from 'components'

export const FriendList = ({friends}) =>{
    return <ul className="friend-list">
{friends.map((item) => <FriendsListItem 
key={item.id} 
avatar={item.avatar} 
name={item.name}
status = {item.isOnline}/>)}    </ul>
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };