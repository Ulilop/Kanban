import { useFetchTabla } from "../hooks/useFetchTabla";
import Columna from "./Columna";

const Kanban = () => {
  const [ tarjetas, cargandoTarjetas ] = useFetchTabla("tarjetas");
  const [ columnas, cargandoColumnas ] = useFetchTabla("columnas");

  if (cargandoTarjetas || cargandoColumnas) {
    return <div className="alert alert-info text-center">Cargando...</div>;
  }

  return (
    <>
      {columnas.map(({id, titulo, color, tablero}) => (
        <Columna key={id} onChange={console.log("Cambio en columna ",id)}>
          {{
            tarjetas: tarjetas.filter((tarjeta) => tarjeta.columna === id),
            titulo,
            color,
            tablero,
          }}
        </Columna>
      ))}
    </>
  );
}

export default Kanban;
