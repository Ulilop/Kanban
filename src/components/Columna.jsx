import { Card, Stack } from "react-bootstrap";
import Tarjeta from "./Tarjeta";

const Columna = ({onChange, children:{ id, tarjetas, titulo, color, tablero } }) => {

  return (
    <Card className="columna">
      <Card.Body>
        <Card.Title className="columna__titulo">{titulo}</Card.Title>
        <Stack gap={3}>
          {tarjetas.map((tarjeta) => (
            <Tarjeta key={tarjeta.id}>
              {{
                ...tarjeta,
              }}
            </Tarjeta>
          ))}
        </Stack>
      </Card.Body>
    </Card>
  );
};

export default Columna;
