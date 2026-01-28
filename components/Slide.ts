const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];

export const slides = (images: string[]) => {
  return images.map((image) => {
    const width = 1920;
    const height = 1080;

    return {
      src: image,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => ({
        src: image,
        width: breakpoint,
        height: Math.round((height / width) * breakpoint),
      })),
    };
  });
};

export default slides;
