import { lazy, Suspense } from "react";

import image from "../../assets/images/contact.jpg";
const Image = lazy(() => import("../../components/Image/Image"));

export default function Contact() {
  return (
    <div>
      <h1>Aquí podrás encontrar la información para contactarnos</h1>
      <Suspense fallback={<h2>Cargando imagen...</h2>}>
        <Image
          src={image}
          alt="Wallpaper mujer rodeada de nubes con casco que le cubre las orejas y los ojos derramando lágrimas"
        />
      </Suspense>
    </div>
  );
}
