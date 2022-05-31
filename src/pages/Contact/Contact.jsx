import image from "../../assets/images/contact.jpg";
import Image from "../../components/Image/Image";

export default function Contact() {
  return (
    <div>
      <h1>Aquí podrás encontrar la información para contactarnos</h1>
      <Image
        src={image}
        alt="Wallpaper mujer rodeada de nubes con casco que le cubre las orejas y los ojos derramando lágrimas"
      />
    </div>
  );
}
