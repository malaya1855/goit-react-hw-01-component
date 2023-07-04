
 import { Profile, Statictics, FriendList, TransactionHistory } from 'components'

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json'
import transactions from "data/transactions.json"

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    > 
<h2>Task 1 - Social network Profile  </h2>     
<Profile 
username ={user.username} 
tag = {user.tag}
location={user.location}
avatar={user.avatar}
stats={user.stats}/> 

<h2>Task 2 - Statistics </h2>     
<Statictics title="Upload stats" stats = {data}/>
<Statictics stats = {data}/>

<h2>Task 3 - FriendList </h2>     
<FriendList friends={friends} />;

<h2>Task 4 - Transaction History </h2>     
<TransactionHistory history = {transactions}/>

</div>
  );
};
