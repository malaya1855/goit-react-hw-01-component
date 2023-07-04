import PropTypes from "prop-types";
import {FriendCard, Status, FriendName} from 'components'


export const FriendsListItem = ({avatar, name, status}) => {
    return <FriendCard>
    <Status status={status}></Status>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <FriendName>{name}</FriendName>
</FriendCard>
}

FriendsListItem.propTypes={
    name:PropTypes.string.isRequired, 
    avatar:PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
}