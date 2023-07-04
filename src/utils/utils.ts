export const reduceTitle = (title: string) => {
  const newTitle = title.split(" ").splice(0, 3).join(" ");
  return newTitle;
};

export const createUrl = (str: string) => {
  if (str.length > 12) {
    const newStr = str.split(" ").slice(0, 1).join(" ").replace("'", "");
    return newStr;
  } else {
    str = "kids";
    return str;
  }
};
