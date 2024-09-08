// eslint-disable-next-line react/prop-types
export const Image = ({ src, alt, setImageLoaded = () => {}, ...rest }) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={rest.style}
      onLoad={() => setImageLoaded(true)}
    />
  );
};
