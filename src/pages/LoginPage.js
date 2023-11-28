import React from 'react'

export const LoginPage = () => {
  return (<>
    <h1>LoginPage</h1>
    <div className="form_container">
      <form style={{ display: 'flex', flexDirection: 'column', gap: "10px" }}>
        <label htmlFor="login">
          login:
          <input type="text"
            name="login" /></label>
        <label htmlFor="pass">
          password:
          <input type="password"
            name="pass" /></label>
        <button 
        style={{display: 'inline'}}
        type="submit">Send</button>
      </form>
    </div>
  </>
  )
}
