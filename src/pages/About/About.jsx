import { lazy, Suspense } from "react";

import image from "../../assets/images/about.jpg";
const Image = lazy(() => import("../../components/Image/Image"));

export default function About() {
  return (
    <div>
      <h1>Aquí estará toda la información acerca de nosotros</h1>
      <Suspense fallback={<h2>Cargando imagen...</h2>}>
        <Image
          src={image}
          alt="Wallpaper de una isla que es una tortuga gigante sacando la cabeza en el agua"
        />
      </Suspense>
    </div>
  );
}
