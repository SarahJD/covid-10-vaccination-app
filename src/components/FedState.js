import PropTypes from 'prop-types';

// map methods for name and vaccination rates!!!

const FedState = ({ fedState }) => {
  return (
    <div className='federalState'>
      {/* <h3>{fedStates.map()}</h3>
      <p>First Vaccination - Rate: {fedStates.BadenWürttemberg["First vaccination Total"]}</p>
      <p>Second Vaccination - Rate: {fedState.secondVaccinationRate}</p> */}
    </div>
  )
}

FedState.propTypes = {
  fedState: PropTypes.object
}

export default FedState
