export const splitByTag = (content: string) => {
  const splitCotent = content.split("\n");

  const patternTitle = /^\#{1}(?=\s)(.*)$/;
  const patternSection = /^\#{2}(?=\s)(.*)$/;

  const result: string[][] = [];
  for (let row of splitCotent) {
    row.match(patternTitle) || row.match(patternSection)
      ? result?.push([row])
      : result[result.length - 1]?.push(row);
  }
  return result?.map((element) => element.join("\n"));
};
