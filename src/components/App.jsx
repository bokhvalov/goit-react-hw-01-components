import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';
import items from 'transactions.json';
import { Profile } from './Profile/profile';
import { Statistics } from './Statistics/statistics';
import { FrendList } from './FrendList/frendList';
import { TransactionHistory } from './TransactionHistory/transactionHistory';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'rgb(227,233,240)',
      }}
    >
      {/* 1st Homework Task */}
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* 2nd Homework Task */}
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      {/* 3rd Homework Task */}
      <FrendList friends={friends}/>

      {/* 4th Homework Task */}
      <TransactionHistory items={items} />
    </div>
  );
};
