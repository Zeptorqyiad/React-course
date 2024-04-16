import { useState } from 'react'

function Login() {
   const [data, setData] = useState({ username: '', password: '' })

   function handleFromSubmit(event) {
      event.preventDefault()
      console.log(data)
      alert(JSON.stringify(data))
   }

   function handleInputChange(text, name) {
      setData({ ...data, [name]: text.target.value })
   }

   return (
      <>
         <h1>Login Form</h1>
         <form onSubmit={handleFromSubmit}>
            <label>
               Username:
               <input
                  type="text"
                  value={data.username}
                  onChange={(text) => handleInputChange(text, 'username')}
               />
            </label>
            <label>
               Password:
               <input
                  type="password"
                  value={data.password}
                  onChange={(text) => handleInputChange(text, 'password')}
               />
            </label>
            <button type="sumbit">Login</button>
         </form>
      </>
   )
}

export default Login
