import PropTypes from 'prop-types';

const FedState = ({ fedState }) => {
  return (
    <div className='federalState'>
      <h3>{fedState.name}</h3>
      <p>First Vaccination - Rate: {fedState.firstVaccinationRate}</p>
      <p>Second Vaccination - Rate: {fedState.secondVaccinationRate}</p>
    </div>
  )
}

FedState.propTypes = {
  fedState: PropTypes.object
}

export default FedState
