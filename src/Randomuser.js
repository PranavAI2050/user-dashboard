import React, { useState, useEffect } from 'react';

const RandomUser = () => {
    // State to store fetched user data
    const [user, setUser] = useState(null);

    // Fetch data inside useEffect
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://randomuser.me/api/');
            const data = await res.json();
            setUser(data.results[0]); // Store the first user from the results array
        };

        fetchData();
    }, []); // Empty dependency array means this runs once when the component mounts

    // If user data is not yet loaded, show a loading message
    if (!user) {
        return <div>Loading...</div>;
    }

    return (
  <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
    <img src={user.picture.large} alt="User" className="w-32 h-32 rounded-full mx-auto" />
    <div className="text-center">
      <p className="text-lg font-semibold">
        {user.name.first} {user.name.last}
      </p>
      <p className="text-gray-500">{user.email}</p>
    </div>
  </div>
);

};

export default RandomUser;
