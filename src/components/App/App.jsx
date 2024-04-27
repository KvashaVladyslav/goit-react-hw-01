import Profile from "../Profile/Profile"
import userData from "/src/userData.json"
import FriendsList from "../FriendsList/FriendsList"
import friends from "/src/friends.json"
import TransactionHistory from "../TransactionHistory/TransactionHistory"
import transactions from "/src/transactions.json"

export default function App() {
    return (
        <div>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendsList friends={friends} />
            <TransactionHistory items={transactions} />
        </div>
    )
}