const urlTop10 = new URL("https://api.jikan.moe/v4/top/anime?limit=10");
const urlAnime = new URL("https://api.jikan.moe/v4/anime");

async function fetchData(url: URL) {
  const res = await fetch(url);
  switch (res.status) {
    case 400:
      throw { status: 400, msg: "Error 400: Bad Request" };
    case 404:
      throw { status: 404, msg: "Error 404: Not Found" };
    case 405:
      throw { status: 405, msg: "Error 405: Method Not Allowed" };
    case 429:
      throw { status: 429, msg: "Error 429: Too Many Requests" };
    case 500:
      throw { status: 500, msg: "Error 500: Internal Server Error" };
    case 503:
      throw { status: 503, msg: "Error 503: Service Unavailable" };
  }

  return { data: (await res.json()).data, status: res.status };
}

export default fetchData;
export { urlTop10, urlAnime };
