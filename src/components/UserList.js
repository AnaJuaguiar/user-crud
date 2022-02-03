import React, {useState} from 'react';
import UserForm from './UserForm';
import {RiCloseCircleLine} from 'react-icons/ri';
import {FiEdit} from 'react-icons/fi';
import {BiUserCircle} from 'react-icons/bi';


function UserList({users, completeUser, removeUser, updateUser}) {
    const [edit, setEdit]= useState({
      id: null,
      value: ''

    });

    const submitUpdate = value =>{
      updateUser(edit.id, value);
      setEdit({
        id: null, 
        value: ''
      });
    };


    if(edit.id) {
       return <UserForm edit={edit} onSubmit={submitUpdate} />
    }

  return users.map((user, index) => (
   
    <div className={user.isComplete? 'register-row complete' : 'register-row'} 
     key={index}
     >
       <div key={user.id} onClick={()=> completeUser(user.id)}>
        <BiUserCircle className='user-icon'/>
        <h4>Usuário: {user.id} </h4>
         <p>Nome: {user.name} </p> 
         <p>Telefone: {user.phone} </p>
         <p>E-mail: {user.mail}</p>

       </div>

       <div className="icons">
         <RiCloseCircleLine 
          onClick={() => removeUser(user.id)}
          className='delete-icon'
        />

        <FiEdit 
        onClick={() => setEdit({ id: user.id, value: user.text})}
        className='edit-icon'
         />

       </div>
    </div>
    ));
}

export default UserList;
