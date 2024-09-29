import fs from 'fs';
import path from 'path';

export const getStaticProps = async ({ params }: any) => {
  const imagePath = params.imagePath || 'public/images';
  const fullImagePath = path.join(process.cwd(), imagePath);
  const imageFiles = fs.readdirSync(fullImagePath);

  return {
    props: {
      images: imageFiles.map(file => `/${imagePath}/${file}`)
    }
  };
};

const ImageGallery = ({ images }: { images: string[] }) => (
  <div>
    {images.map((src, index) => (
      <img key={index} src={src} alt={`Image ${index}`} />
    ))}
  </div>
);

export default ImageGallery;
