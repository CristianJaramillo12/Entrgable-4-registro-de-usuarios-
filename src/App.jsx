
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [users, setUsers] = useState()
  const [updateInfo, setupdateInfo] = useState()
  const [isOpen, setIsOpen] = useState(false)

  const getAllUsers = () => {
    const url = `https://users-crud.academlo.tech/users/`

    axios.get(url)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  const createNewUser = data => {
    const url = `https://users-crud.academlo.tech/users/`
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const deleteUserByid = id => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.delete(url)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setupdateInfo = { setupdateInfo }
      })
      .catch(err => console.log(err))
  }

  const updateUserById = (id, data) => {
    const url = `https://users-crud.academlo.tech/users/${id}/`
    axios.put(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setupdateInfo()
      })
      .catch(err => console.log(err))
  }

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <div className="App">
      <h1>Users</h1>
      <button className='app_btn-form ' onClick={handleOpen}>Open form</button>
      <div  className={`app_form ${isOpen && 'app_form-visible' }`}>
        <FormUser
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          handleClose={handleClose}
          setupdateInfo={setupdateInfo}
        />
      </div>

      <div  className='tarjet_user'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserByid={deleteUserByid}
              setupdateInfo={setupdateInfo}
              handleOpen={handleOpen}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
