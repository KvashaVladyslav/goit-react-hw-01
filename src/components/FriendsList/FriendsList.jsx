import friends from "/src/friends.json"
import FriendsListItem from "../FriendsListItem/FriendsListItem";


export default function FriendsList() {
    return (
    <ul>
        {friends.map(({avatar, name, isOnline, id}) => <li key={id}><FriendsListItem avatar={avatar} name={name} isOnline={isOnline} /></li>)}
    </ul>
    )
}