import { ImageContainer, ImageSizes } from '../ui/ImageContainer';

export type Props = {
  src: string;
  alt: string;
  size?: ImageSizes;
};

const Image = ({ src, alt, size }: Props) => {
  return (
    <ImageContainer size={size}>
      <img src={src} alt={alt} />
    </ImageContainer>
  );
};

export default Image;
