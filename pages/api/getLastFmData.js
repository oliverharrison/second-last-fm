// Connect to the LastFM API and return the data
export async function getLastFmData(method) {
  try {
    let response = await fetch(
      `http://ws.audioscrobbler.com/2.0/?method=${method}&user=oliverh72&api_key=183b7262a8da86b25042928ed05a3dae&format=json`
    );
    return await response.json();
  } catch (err) {
    console.error(err);
  }
}
