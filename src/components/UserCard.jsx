import React from 'react'

const UserCard = ({ user, deleteUserByid, setupdateInfo, handleOpen }) => {

  const handleDelete = () => {
    deleteUserByid(user.id)
  }

  const handleOnClick = () => {
    setupdateInfo(user)
    handleOpen()
  }

  return (
    <article className='tarjet_unity'>
      <h2 className='tarjet_tittle'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className='tarjet_data'>
        <li className='tarjet_email'><span>Correo </span>- {user.email}</li>
        <li className='tarjet_email tarjet_birthday_icons'><span>Birthday </span><span className='tarjet_birthday_icons'>- <i class='bx bx-gift'></i> {user.birthday}</span></li>
      </ul>
      <div className='tarjet_group'>
        <button className='tarjet_email tarjet_button tarjet_button_delete' onClick={handleDelete}><i class='bx bx-folder-minus bx-position bx-border'></i></button>
        <button className='tarjet_email tarjet_button tarjet_button_update' onClick={handleOnClick}><i class='bx bx-edit bx-position bx-border'></i></button>
      </div>
    </article>
  )
}

export default UserCard