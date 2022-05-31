import image from '../../assets/images/home.jpg';

import Image from '../../components/Image/Image';

export default function Home() {
  return (
    <div>
      <h1>Holi, yo soy el Home Component</h1>
      <Image src={image} alt="Wallpaper casa en paisaje mágico" />
    </div>
  );
}
