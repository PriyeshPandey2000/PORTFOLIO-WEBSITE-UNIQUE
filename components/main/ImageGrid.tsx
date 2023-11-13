import ImageCard from './ImageCard';

const ImageGrid: React.FC = () => {
  const images = [
    {
      id: 1,
      imageName: 'twogood.png', // Replace with your image file name
      link: 'https://two-good.netlify.app/', // Replace with the desired link
    },
    {
      id: 2,
      imageName: 'expense-tracker.png',
      link: 'https://redux-expense-tracker-app-000.netlify.app/',
    },
    {
      id: 3,
      imageName: 'chat-app.png',
      link: 'https://chatapp-socket-io-111.netlify.app/',
    },
  ];

  return (
    <div className="flex">
      {images.map((image) => (
        <ImageCard key={image.id} imageName={image.imageName} link={image.link} />
      ))}
    </div>
  );
};

export default ImageGrid;