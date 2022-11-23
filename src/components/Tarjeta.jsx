import { PropTypes } from 'prop-types';
import { Button, Stack } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md';
import '../style/Tarjeta.scss';
const Tarjeta = ({children: tarjeta}) => {
  return (
    <div className='tarjeta'>
      <span>
        <Stack className='tarjeta__titulo' direction="horizontal" gap={3}>
          <div className='tarjeta__id'>
            {tarjeta.id}
          </div>
          <div className='ms-auto'>
            <span>{tarjeta.titulo}</span>
          </div>
          <Button variant="danger"><MdDeleteForever /></Button>{' '}
        </Stack>
      </span>
      <div className='tarjeta__descripcion'>
        {tarjeta.descripcion}
      </div>
    </div>
  );
}

Tarjeta.propTypes = {
  tarjeta: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
  }),
}

export default Tarjeta;