import React, {useState} from 'react';
import UserList from './UserList';
import UserForm from './UserForm';
   
function Main() {
    const [users, setUsers] = useState([]);
    
    const addUser = user => {
        const newUsers = [user, ...users];
        
        setUsers(newUsers);        
    };

    const updateUser = (userId, newValue)=>{
        
        setUsers(prev => prev.map(item =>(item.id === userId ? newValue : item)));
    };
    
    

    const removeUser = id =>{
        const removeArr = [...users].filter(user=>user.id !== id)

        setUsers(removeArr);
    }

    const completeUsers = id => {
        let updatedUsers = users.map(user => {
            if (user.id === id){
                user.isComplete = !user.isComplete;
            }
            return user;
        });
        setUsers(updatedUsers);
    };

    return(
        
        <div className='user-app'>
            <h2>Preencha os dados abaixo:</h2>
            <UserForm onSubmit={addUser} />
            <UserList 
                users={users} 
                completeUsers={completeUsers} 
                removeUser={removeUser} 
                updateUser={updateUser}
            />
        </div>

    );
}

export default Main;