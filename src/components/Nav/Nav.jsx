import './styles.css';
import Button from "../Button/Button";

export default function Nav() {
  return (
    <nav className='main-nav'>
      <Button path="/">Home</Button>
      <Button path="/contact">Contact</Button>
      <Button path="/about">About</Button>
    </nav>
  );
}
