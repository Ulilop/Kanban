import { useReadTabla } from "../hooks/useCRUDTabla";
import Columna from "./Columna";

const Kanban = () => {
  const [ tarjetas, cargandoTarjetas, errorTarjeta ] = useReadTabla("tarjetas");
  const [ columnas, cargandoColumnas, errorColumnas ] = useReadTabla("columnas");
  console.log(errorTarjeta);
  console.log(errorColumnas);

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
