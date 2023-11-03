export async function fetchArtworks(search, limit, signal) {
  const res = await fetch(
    `https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,artist_title,title,description,dimensions,medium_display,place_of_origin,thumbnail.alt_text,artist_display,artwork_id,date_display,main_reference_number,image_id&limit=${limit}`,
    { signal },
  );
  const data = await res.json();
  return data.data;
}

export async function fetchArtworksById(id, signal) {
  const res = await fetch(
    `https://api.artic.edu/api/v1/artworks/${id}?fields=id,artist_title,title,description,dimensions,medium_display,place_of_origin,thumbnail.alt_text,artist_display,artwork_id,date_display,main_reference_number,image_id`,
    { signal },
  );
  const data = await res.json();
  return data.data;
}
