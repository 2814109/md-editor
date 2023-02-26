export const splitByTag = (content: string) => {
  const splitCotent = content.split("\n");

  const pattern = /^\#{1}(?=\s)(.*)$/;
  const result: string[][] = [];
  for (let row of splitCotent) {
    row.match(pattern)
      ? result?.push([row])
      : result[result.length - 1]?.push(row);
  }
  return result?.map((element) => element.join("\n"));
};
