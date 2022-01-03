function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const MOBILE_WIDTH = 480;

export { getWindowDimensions, MOBILE_WIDTH };
