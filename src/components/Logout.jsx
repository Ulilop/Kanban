import { useContext } from "react";
import { AppContext } from "../helpers/AppContext";

export const Logout = () => {
  const { context, setContext } = useContext(AppContext);

  const handleClick = () => {
    if (context.user) {
      setContext({user:undefined, ...context });
    }
  };

  return (
    <>
      <h1>Logout</h1>
      <hr />
      <pre className="container">
        {JSON.stringify(context.user,null,2)}
      </pre>

      <button
        className="btn btn-primary"
        onClick={handleClick}
      >
        Cerrar sesión
      </button>
    </>
  )
}

export default Logout;