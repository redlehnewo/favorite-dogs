import Gallery from "src/components/Gallery";

Favorites.propTypes = {};

function Favorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <div>
      <h2>My Favorites</h2>
      {!favorites?.length ? (
        <div>No saved favorites.</div>
      ) : (
        <Gallery images={favorites} />
      )}
    </div>
  );
}

export default Favorites;
