const getItem = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const saveKeyword = (key, value, fetchedData) => {
  if (fetchedData.length > 0) {
    setItem(key, value);
  }
};

export { getItem, setItem, saveKeyword };
