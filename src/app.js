
import User from './components/Profile/User';
import userData from './user.json';
import Statistics from './components/Statistics/Statistics';
import statsData from './statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './transactions.json';


export default function App() {
    return (<div>
        <User
            avatar={userData.avatar}
            name={userData.name}
            tag={userData.tag}
            location={userData.location}
            stats={userData.stats}
        />

        <Statistics
            title="Upload stats"
            stats={statsData}
        />
        
        <FriendList
            friends={friends}
        />

        <TransactionHistory items={transactions} />;
        </div>)
    
}
    
    




