export const itinializeContents = () => {
  const makedContents = [""].map((content, index) => {
    return { id: index, content: content };
  });
  return makedContents;
};
