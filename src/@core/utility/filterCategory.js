const filterCategory = (keyword, data) => {
  const filtedCategory = data.filter((category) => category.id === keyword);
  return filtedCategory;
};

export default filterCategory;
