import "./styles.css";

export default function Card({ children }) {
  return <article className="current-component">{children}</article>;
}
