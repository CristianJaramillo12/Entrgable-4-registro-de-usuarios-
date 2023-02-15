import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utilis/defaultsValues'

const FormUser = ({ createNewUser, updateInfo, updateUserById, handleClose, setupdateInfo }) => {

    const { reset, register, handleSubmit } = useForm()

    useEffect(() => {
      if(updateInfo) {
        reset(updateInfo)
      }
    },[updateInfo])

    const submit = data => {
      if(updateInfo) {
        updateUserById(updateInfo.id, data)
      } else {
        createNewUser(data);
      }  
      handleClose()
      reset(defaultValues)
    }

    const handleX = () => {
      reset(defaultValues)
      setupdateInfo()
      handleClose()
    }

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
      <h2 className='form_tittle'>Form User</h2>
      <div  className='form_x' onClick={handleX}><i class='bx bxs-x-circle'></i></div>
      <div  className='form_conteiner'>
        <label className='form_label' htmlFor="email">Email</label>
        <input className='form_imput' {...register('email')} type="email" id='email' />
      </div>
      <div  className='form_conteiner'>
        <label className='form_label' htmlFor="password">Password</label>
        <input className='form_imput' {...register('password')} type="password" id='password' />
      </div>
      <div  className='form_conteiner'>
        <label className='form_label' htmlFor="firstName">First name</label>
        <input className='form_imput' {...register('first_name')} type="text" id='firstName' />
      </div>
      <div  className='form_conteiner'>
        <label className='form_label' htmlFor="lastName">Last name</label>
        <input className='form_imput' {...register('last_name')} type="text" id='lastName' />
      </div>
      <div  className='form_conteiner'>
        <label className='form_label' htmlFor="birthday">Birthday</label>
        <input className='form_imput' {...register('birthday')} type="date" id='birthday' />
      </div>
      <button className='form_btn'>{updateInfo ? 'Update' : 'Create'}</button>
    </form>
  )
}

export default FormUser