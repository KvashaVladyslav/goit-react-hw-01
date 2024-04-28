import css from "./FriendsListItem.module.css"
import clsx from 'clsx'

export default function FriendsListItem({ friend: {isOnline, avatar, name} }) {
    return (
    <div className={clsx(css.item, isOnline === true ? css.onlineBorder : css.offlineBorder)}>
        <img className={clsx(css.image)} src={avatar} alt="Avatar" width="48" />
        <p className={clsx(css.name)}>{name}</p>
        <p className={clsx (css.text, isOnline === true ? css.online : css.offline) }>{isOnline?'Online':'Offline'}</p>
    </div>
    )
} 