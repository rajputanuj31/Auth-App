import {useRef, useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateFailure,updateStart,updateSuccess ,deleteFailure,deleteStart,deleteSuccess, signOut} from '../store/user/userSlice';

const Profile = () => {
  const {currentUser, loading, error} = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [formData,setFormData] = useState({});
  const dispatch = useDispatch();
  const [updated,setUpdated] = useState(false);
  const handleChange = (e) =>{
     setFormData({...formData, [e.target.id]:e.target.value});
  }
  const handleSubmit = async (e) =>{
     e.preventDefault();
     try {
       dispatch(updateStart());
      const res = await fetch(`/backend/user/update/${currentUser._id}`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success == false){
        dispatch(updateFailure(data));
        return
      }
      dispatch(updateSuccess(data));
      setUpdated(true);
      console.log(data);
      
     } catch (error) {
      dispatch(updateFailure(error))
     }
  }
  const handleDelete = async () =>{
     try {
      dispatch(deleteStart());
      const res = await fetch(`/backend/user/delete/${currentUser._id}`,{
        method:'DELETE',
      });
      const data = await res.json();
      if(data.success == false){
        dispatch(deleteFailure(data));
        return
      }
      dispatch(deleteSuccess(data));
     } catch (error) {
      dispatch(deleteFailure(error));
     }
  }

  const handleSignOut = async () =>{
     try {
      await fetch('/backend/auth/signout');
      dispatch(signOut());
     } catch (error) {
      console.log(error);
      
     }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='file' ref={fileRef} hidden accept='image/*'/>
        <img
          src={currentUser.profilePicture} 
          alt='profile'
          className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2'
          onClick={()=>fileRef.current.click()}
        />
        <input
          type='text'
          id='username'
          placeholder='Username'
          className='bg-slate-100 rounded-lg p-3'
          defaultValue={currentUser.username}
          onChange={handleChange}
        />
        <input
          type='email'
          id='email'
          placeholder='Email'
          className='bg-slate-100 rounded-lg p-3'
          defaultValue={currentUser.email}
          onChange={handleChange}
        />
        <input
          type='password'
          id='password'
          placeholder='Password'
          className='bg-slate-100 rounded-lg p-3'
          onChange={handleChange}
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
          {loading ? 'loading': 'Update'}
        </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span onClick={handleDelete} className='text-red-700 cursor-pointer'>
          Delete Account
        </span>
        <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>
          Sign out
        </span>
      </div>
     <p className='text-green-500 mt-5'>{updated && "User updated successfully"}</p>
     <p className='text-red-500 mt-5'>{error && "Something went wrong!"}</p>

    </div>
  );
};

export default Profile;
