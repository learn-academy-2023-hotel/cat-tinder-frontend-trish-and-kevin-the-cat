import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const Signup = ({ signup }) => {
  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    //  store the form entries in variable
    const formData = new FormData(formRef.current)
    // create object from entries
    const data = Object.fromEntries(formData)
    //  put in format to use with JWT
    const userInfo = {
      user: { email: data.email, password: data.password },
    }
    signup(userInfo)
    navigate("/")
    e.target.reset() // reset the form
  }

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email: <input type="email" name="email" placeholder="email" />
        <br />
        Password:{" "}
        <input type="password" name="password" placeholder="password" />
        <br />
        Confirm Password:{" "}
        <input
          type="password"
          name="password_confirmation"
          placeholder="confirm password"
        />
        <button type="sumbit" value="Submit"></button>
        <br />
      </form>
      <br />
      <div>
        {" "}
        Already registered? <a href="/login">Login</a>
      </div>
    </div>
  )
}

export default Signup
