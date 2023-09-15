const checkUrl = async (inputUrl: string) => {
  let url;

  try {
    url = new URL(inputUrl);
  } catch (error) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
};

export default checkUrl;
