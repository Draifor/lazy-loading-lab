import image from '../../assets/images/notfound.jpg';
import Image from '../../components/Image/Image';

export default function NotFound() {
  return (
    <div>
      <h1>Error 404 Página no encontrada</h1>
      <Image src={image} alt='Wallpaper robot gigante con gafas leyendo un libro' />
    </div>
  )
}
