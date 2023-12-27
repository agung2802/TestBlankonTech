import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()
  
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (e.target.email.value == 'johndoe@example.com' && e.target.password.value == 'user-example') {
        navigate('/home');
    } else{
      alert("Error")
    }

    // axios({
    //   method: 'post',
    //   url: 'https://api-interview.blankontech.com/api/auth/login/',
    //   data: {
    //     email : e.target.email.value,
    //     password: e.target.password.value 
    //   }
    // }).then((response) => {
    //   console.log(response);
    //   localStorage.setItem('token', response?.token)
    //   navigate('/home')
    // }).catch((err) => {
    //   alert("Error: ", err)
    // })
  }

  return (
    <div className='w-1/3' style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%'}}>
      <div>
        <h1 className='text-center w-full text-4xl  font-bold'>Sign In</h1>
      </div>
      <div>
        <form onSubmit={() => handleOnSubmit(event)}>
          <div>
            <label htmlFor="email" className='text-start w-full'>Email</label>
            <input type="email" id='email' placeholder='your@email.com' className='rounded-md w-full h-8 border-2'/>
          </div>

          <div className='py-4'>

            <label htmlFor="password" className='text-start w-full'>Password</label>
            <input type="password" id='password' placeholder='Your password' className='rounded-md w-full h-8 border-2'/>
          </div>
          <button type='submit' className='w-full bg-green-700 text-white h-8 rounded-md'>Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default App
