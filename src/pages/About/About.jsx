import image from "../../assets/images/about.jpg";
import Image from "../../components/Image/Image";

export default function About() {
  return (
    <div>
      <h1>Aquí estará toda la información acerca de nosotros</h1>
      <Image
        src={image}
        alt="Wallpaper de una isla que es una tortuga gigante sacando la cabeza en el agua"
      />
    </div>
  );
}
