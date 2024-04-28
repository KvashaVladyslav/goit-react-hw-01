import FriendsListItem from "../FriendsListItem/FriendsListItem";
import clsx from "clsx";
import css from "./FriendsList.module.css"

export default function FriendsList({ friends }) {
    return (
    <ul className={clsx(css.list)}>
        {friends.map((friend) => <li key={friend.id}><FriendsListItem friend={friend} /></li>)}
    </ul>
    )
}