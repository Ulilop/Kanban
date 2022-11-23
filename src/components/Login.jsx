import { useContext } from "react";
import { AppContext } from "../helpers/AppContext";

export const Login = () => {

  const {context, setContext} = useContext(AppContext);

  const userExample = {
    id: 123,
    name: 'Ferdinand',
    email: 'ferdinand@mail.com',
  };

  return (
    <>
      <h1>Login</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setContext({user:userExample, ...context})}
      >
        Ingresar
      </button>
    </>
  )
}

export default Login;