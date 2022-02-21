const getToken = async () => {
  const result = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
    },
    body: "grant_type=client_credentials",
  });
  const data = await result.json();
  console.log(data);
  return data.access_token;
};

const getGenres = async () => {
  const token = await getToken();
  const result = await fetch(
    `https://api.spotify.com/v1/browse/categories?locale=sv_US`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );

  const data = await result.json();
  console.log(data.categories.items);
  return data.categories.items;
};
getGenres();

const browseCategories = async () => {
  const token = await getToken();
  const result = await fetch(`https://api.spotify.com/v1/browse/categories`, {
    method: "GET",
    headers: { Authorization: "Bearer " + token },
  });
  const data = await result.json();
  console.log(data);
  return data;
};
browseCategories();

const getHappyHits = async () => {
  const token = await getToken();
  const result = await fetch(
    `https://api.spotify.com/v1/playlists/37i9dQZF1DXdPec7aLTmlC/tracks`,
    {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    }
  );
  const data = await result.json();
  let songs = data.items;
  for (song of songs) {
    console.log(song.track.name, song.track.artists[0].name);
  }
  return data;
};
getHappyHits();
