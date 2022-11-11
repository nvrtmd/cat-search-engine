const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const fetchedData = await response.json();
      return fetchedData;
    } else {
      const errorData = await response.json();
      throw errorData;
    }
  } catch (err) {
    throw {
      message: err.message,
      status: err.status,
    };
  }
};
