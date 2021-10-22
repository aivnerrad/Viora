import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import UploadPicture from '../UploadProfilePic';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }
  console.log("USER ====>>", user)
  return (
    <>
    <ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>First Name</strong> {user.firstName}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
    </ul>
    <UploadPicture />
    </>
  );
}
export default User;
