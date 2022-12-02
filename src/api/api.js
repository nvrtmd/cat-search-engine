const API_END_POINT =
  "https://q9d70f82kd.execute-api.ap-northeast-2.amazonaws.com/dev";

const request = async (url) => {
  const response = await fetch(url);
  switch (response.status / 100) {
    case 3:
      throw {
        message: `Redirects Error with status code ${response.status}`,
      };
    case 4:
      throw {
        message: `Client Error with status code ${response.status}`,
      };
    case 5:
      throw {
        message: `Server Error with status code ${response.status}`,
      };
    default:
      return response.json();
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
      return { isError: true, data: err.message };
    }
  },
  fetchRandomCatsList: async () => {
    try {
      const fetchedRandomCatsListData = await request(
        `${API_END_POINT}/api/cats/random50`
      );
      return { isError: false, data: fetchedRandomCatsListData };
    } catch (err) {
      return { isError: true, data: err.message };
    }
  },
  fetchCatInfoById: async (id) => {
    try {
      const fetchedCatsListData = await request(
        `${API_END_POINT}/api/cats/${id}`
      );
      return { isError: false, data: fetchedCatsListData };
    } catch (err) {
      return { isError: true, data: err.message };
    }
  },
};

export { api };
