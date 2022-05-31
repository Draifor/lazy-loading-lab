import './styles.css';
import logo from '../../logo.svg';

export default function Header() {
  return (
    <header className='App-header'>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Laboratorio Lazy Loading</h2>
    </header>
  );
}
