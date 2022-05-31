import './styles.css';

export default function Image({ src, alt }) {
  return <img src={src} alt={alt} className="img" />;
}
