const API_END_POINT =
  "https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (url) => {
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

const api = {
  fetchCatsListByKeyword: async (keyword) => {
    try {
      const fetchedCatsListData = await request(
        `${API_END_POINT}/api/cats/search?q=${keyword}`
      );

      return { isError: false, data: fetchedCatsListData };
    } catch (err) {
      return { isError: true, data: err };
    }
  },
  fetchRandomCatsList: async () => {
    try {
      const fetchedRandomCatsListData = await request(
        `${API_END_POINT}/api/cats/random50`
      );
      return { isError: false, data: fetchedRandomCatsListData };
    } catch (err) {
      return { isError: true, data: err };
    }
  },
  fetchCatInfoById: async (id) => {
    try {
      const fetchedCatsListData = await request(
        `${API_END_POINT}/api/cats/${id}`
      );
      return { isError: false, data: fetchedCatsListData };
    } catch (err) {
      return { isError: true, data: err };
    }
  },
};

export { api };
