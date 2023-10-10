export async function fetchArtworks(search, limit, artist_display) {
  const controller = new AbortController();

  const res = await fetch(
    `https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,artist_display,date_display,main_reference_number,image_id&limit=${limit}`,
    {
      signal: controller.signal,
    },
  );
  const data = await res.json();
  return data.data;
}
