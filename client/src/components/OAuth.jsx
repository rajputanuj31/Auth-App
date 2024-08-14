import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useDispatch } from 'react-redux';
import {signInSuccess} from '../store/user/userSlice'
import app from '../firebase'
export default function OAuth() {
  const dispatch = useDispatch();
    const handleClick = async () =>{

       try {
        const provider = new GoogleAuthProvider()
        const auth = getAuth(app);
        const result = await signInWithPopup(auth,provider);
        const res = await fetch('/backend/auth/google_auth',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body: JSON.stringify({
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
          }),
        });
        const data = await res.json();
        console.log(data);
        
        dispatch(signInSuccess(data));
       } catch (error) {
        console.log('Error during sign-in:', error);
        
       }
    }
  return (
    <button type='button' onClick={handleClick} className='bg-red-700 text-white rounded-lg p-3 hover:opacity-95'>CONTINUE WITH GOOGLE</button>
  )
}