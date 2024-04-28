import friends from "/src/friends.json"
import FriendsListItem from "../FriendsListItem/FriendsListItem";
import clsx from "clsx";
import css from "./FriendsList.module.css"

export default function FriendsList() {
    return (
    <ul className={clsx(css.list)}>
        {friends.map(({avatar, name, isOnline, id}) => <li key={id}><FriendsListItem avatar={avatar} name={name} isOnline={isOnline} /></li>)}
    </ul>
    )
}