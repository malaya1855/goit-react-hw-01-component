import PropTypes from "prop-types";


export const FriendsListItem = ({avatar, name, isOnline}) => {
    return <li class="item">
    <span status={isOnline}></span>
    <img class="avatar" src={avatar} alt="User avatar" width="48" />
    <p class="name">{name}</p>
</li>
}

FriendsListItem.propTypes={
    name:PropTypes.string.isRequired, 
    avatar:PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}