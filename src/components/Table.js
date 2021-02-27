import PropTypes from 'prop-types';

import FedState from './FedState';

const Table = ({ data }) => {
  
  return (
    <>
      {data.map((date) => (
        <FedState key={date.id} fedState={date} />
      ))}
    </>
  )
}

Table.propTypes = {
  data: PropTypes.array
}

export default Table
