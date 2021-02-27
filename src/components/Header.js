import Button from './Button';

const Header = () => {
  const onClick = () => {
    console.log('Click');
  }

  return (
    <header className='header'>
      <h1>Covid-19-Vaccination App</h1>
      <div>
        <Button text='Table' color='green' onClick={onClick}/> 
        <Button text='Chart' color='red' onClick={onClick}/> 
        <Button text='Map' color='blue' onClick={onClick}/> 
      </div>
    </header>
  )
}

export default Header
