import React, {useState, useEffect} from "react";
import "./style.scss"

const UsersList = () => {
  const [usersList, setUsersList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem('users-list'));
    if (users && users.length) {
      setUsersList(users);
    }
  }, []);

  const deleteUser = (user) => {
    console.log(user)
    setUserToDelete(user);
    setShowModal(true);
  }

  const confirmDeleteUser = () => {
    const updatedUsers = usersList.filter(user => user !== userToDelete);
    setUsersList(updatedUsers);
    localStorage.setItem('users-list', JSON.stringify(updatedUsers));
    setUserToDelete(null);
    setShowModal(false);
  }

  const cancelDeleteUser = () => {
    setUserToDelete(null);
    setShowModal(false);
  }

  return (
    <>
      <h1>Users list</h1>
      <div className='P-users-list'>
        {usersList.length ?
          usersList.map((user, index) => {
            return (
              <div key={index}>
                <p>firstName: {user.firstName}</p>
                <p>lastName: {user.lastName}</p>
                <p>age: {user.age}</p>
                <p>email: {user.email}</p>
                <p>gender: {user.gender}</p>
                <p>specialist: {user.specialist}</p>

                <button onClick={() => deleteUser(user)}>x</button>
              </div>
            );
          }) : <p>users list was empty</p>}
      </div>


      {showModal && userToDelete && (
        <div className='P-modal'>
          <div className='P-modal-overlay'>
            <p>Are you sure you want to delete {userToDelete.name}?</p>
            <button className="P-confirm-button" onClick={confirmDeleteUser}>Yes</button>
            <button className="P-cancel-button" onClick={cancelDeleteUser}>No</button>
          </div>
        </div>
      )}
    </>
  );
}

export default UsersList;