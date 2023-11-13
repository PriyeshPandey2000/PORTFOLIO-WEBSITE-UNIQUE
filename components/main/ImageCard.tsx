'use client'
import { useRouter } from 'next/navigation';

interface ImageCardProps {
  imageName: string;
  link: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ imageName, link }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(link);
  };

  const imagePath = `/images/${imageName}`; // Assumes images are in the public/images folder

  return (
    
    <div className="m-4 text-center  flex justify-between " id="projects" onClick={handleClick} style={{ cursor: 'pointer',zIndex:1000 }}>
      <img src={imagePath} alt="Image" className="w-full h-auto object-cover rounded-md" />
    </div>
  );
};

export default ImageCard;