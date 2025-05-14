import React, { useEffect, useState } from 'react';

const UserComponent = ({ user , darkMode}) => {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
      <img
        src={user.picture.large}
        alt="User"
        className="w-32 h-32 rounded-full mx-auto"
      />
      <div className="text-center">
        <p className="text-lg font-semibold">
          {user.name.first} {user.name.last}
        </p>
        <p className="text-gray-500">{user.email}</p>
      </div>
    </div>
  );
};

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const fetchData = async () => {
    const res = await fetch('https://randomuser.me/api/');
    const newUser = await res.json();
    return newUser.results[0]; // Accessing the first user object in the response
  };

  useEffect(() => {
    const loadUsers = async () => {
      const newUsers = [];
      for (let i = 0; i < 20; i++) {
        const user = await fetchData();
        newUsers.push(user);
      }
      setUsers(newUsers);
    };
    loadUsers();
  }, []);

  useEffect(() => {
    if (clicked) {
      const loadUsers = async () => {
        const newUsers = [];
        for (let i = 0; i < 20; i++) {
          const user = await fetchData();
          newUsers.push(user);
        }
        setUsers(newUsers);
      };
      loadUsers();
    }
  }, [clicked]);

  useEffect(()=>{
      if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
      } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
      }
  },[darkMode]);

  useEffect(() => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
            setDarkMode(true);
            }
      }, []);

  const filteredUsers = users.filter(user =>
    user.name.first.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
//     <div className="space-y-6">
       <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <input
        type="text"
        placeholder="Search by first name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-4 py-2 border rounded-md"
      />
      {filteredUsers.map((user, index) => (
        <UserComponent user={user} mode = {darkMode} key={index} />
      ))}
      {/* {users.map((user, index) => (
        <UserComponent user={user} key={index} />
      ))} */}
      <button
        onClick={() => setClicked(!clicked)}
        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Load New Users
      </button>
    </div>
  );
};

export default UserDashboard;
