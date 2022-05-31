import { lazy, Suspense } from "react";

import image from "../../assets/images/notfound.jpg";
const Image = lazy(() => import("../../components/Image/Image"));

export default function NotFound() {
  return (
    <div>
      <h1>Error 404 Página no encontrada</h1>
      <Suspense fallback={<h2>Cargando imagen...</h2>}>
        <Image
          src={image}
          alt="Wallpaper robot gigante con gafas leyendo un libro"
        />
      </Suspense>
    </div>
  );
}
