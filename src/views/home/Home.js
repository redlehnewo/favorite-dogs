import Gallery from "src/components/Gallery";
import { useEffect, useState } from "react";
import { fetchDogs as fetchDogsAPI } from "src/api/dogs";

function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [images, setImages] = useState();

  const fetchDogs = async () => {
    try {
      setLoading(true);
      const images = await fetchDogsAPI(6);
      setImages(images);
      setLoading(false);
      setError(false);
    } catch (e) {
      setError(e.message);
    }
  };

  useEffect(() => {
    fetchDogs();
  }, []);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (error) {
    return <div>Error found: {error}</div>;
  }

  const handleAddToFavorites = (image) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.includes(image)) return;
    localStorage.setItem("favorites", JSON.stringify([...favorites, image]));

    window.alert("Added to favorites");
  };

  return (
    <div>
      <h2>Gallery</h2>
      <button onClick={fetchDogs}>Refresh</button>
      <Gallery images={images} onAddToFavoritesClick={handleAddToFavorites} />
      <button onClick={fetchDogs}>Refresh</button>
    </div>
  );
}

Home.propTypes = {};

export default Home;
