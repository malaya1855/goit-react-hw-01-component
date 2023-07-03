
import { FriendsListItem } from "components/FriendListItem/FriendListItem"


export const FriendList = ({friends}) =>{
    return <ul class="friend-list">
{friends.map((item) => <FriendsListItem 
key={item.id} 
avatar={item.avatar} 
name={item.name}
status = {item.isOnline}/>)}    </ul>
}