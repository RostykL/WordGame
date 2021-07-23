export const getFullTitle = (index, items) => {
  let title = "";
  items[index].letters.forEach((el) => {
    title += el.title + " ";
  });
  return title;
};
