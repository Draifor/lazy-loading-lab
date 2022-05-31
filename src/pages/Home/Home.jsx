import { lazy, Suspense } from "react";

import image from '../../assets/images/home.jpg';
const Image = lazy(() => import('../../components/Image/Image'));

export default function Home() {
  return (
    <div>
      <h1>Holi, yo soy el Home Component</h1>
      <Suspense fallback={<h2>Cargando Imagen...</h2>}>
        <Image src={image} alt="Wallpaper casa en paisaje mágico" />
      </Suspense>
    </div>
  );
}
