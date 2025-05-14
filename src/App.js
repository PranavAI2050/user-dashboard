import React from 'react';
import Welcome from './Welcome';
import Usercard from './Usercard';
import Counter from './Counter';
import Likes from './LikeButton';
import Timer from './Timer';
import Randomuser from './Randomuser';
import UserDashboard from './UserDashboard';

function App() {
  return (
    <div>
      {/* <Welcome username="Goenca" />
      <Usercard name = "lund" age = "lauda" email = "lussan"></Usercard>
      <Usercard name = "chut" age = "chutiya" email = "chutpagla"></Usercard>
      <Counter></Counter>
      <Likes></Likes>
      <Timer></Timer>
      <Randomuser></Randomuser> */}
      <UserDashboard></UserDashboard>
    </div>
    
  );
}

export default App;
