import React, { useEffect, useState } from 'react';
import './Table.css'

function BasicTable() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const data = await response.json();
        console.log(data.users)
        setUsersData(data.users);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>My App</h1>
      {usersData.length > 0 ? (
        <div className="table">
          <div className="header">User Details</div>
          {usersData.map((user) => (
            <div className='user-row' key={user.id}>
              <p><span className="header">ID:</span> {user.id}</p>
              <p><span className="header">First Name:</span> {user.firstName}</p>
              <p><span className="header">Last Name:</span> {user.lastName}</p>
              <p><span className="header">Maiden Name:</span> {user.maidenName}</p>
              <p><span className="header">Age:</span> {user.age}</p>
              <p><span className="header">Gender:</span> {user.gender}</p>
              <p><span className="header">Email:</span> {user.email}</p>
              <p><span className="header">Phone:</span> {user.phone}</p>
              <p><span className="header">Username:</span> {user.username}</p>
              <p><span className="header">Password:</span> {user.password}</p>
              <p><span className="header">Birth Date:</span> {user.birthDate}</p>
              <img src={user.image} alt="User Avatar" />
              <p><span className="header">Blood Group:</span> {user.bloodGroup}</p>
              <p><span className="header">Height:</span> {user.height}</p>
              <p><span className="header">Weight:</span> {user.weight}</p>
              <p><span className="header">Eye Color:</span> {user.eyeColor}</p>
              {user.hair && (
                <>
                  <p><span className="header">Hair Color:</span> {user.hair.color}</p>
                  <p><span className="header">Hair Type:</span> {user.hair.type}</p>
                </>
              )}
              <p><span className="header">Domain:</span> {user.domain}</p>
              <p><span className="header">IP:</span> {user.ip}</p>
              {user.address && (
                <>
                  <p><span className="header">Address:</span> {user.address.address}</p>
                  <p><span className="header">City:</span> {user.address.city}</p>
                  <p><span className="header">Postal Code:</span> {user.address.postalCode}</p>
                  <p><span className="header">State:</span> {user.address.state}</p>
                  {user.address.coordinates && (
                    <>
                      <p><span className="header">Latitude:</span> {user.address.coordinates.lat}</p>
                      <p><span className="header">Longitude:</span> {user.address.coordinates.lng}</p>
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default BasicTable;

