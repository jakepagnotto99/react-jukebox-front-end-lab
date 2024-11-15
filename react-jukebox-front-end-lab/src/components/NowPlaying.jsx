const NowPlaying = ({ currentTrack }) => {
  if (!currentTrack) {
    return <div>No Track Playing</div>;
  }
  return (
    <>
      <h1>Now Playing</h1>
      <h2>Name: {currentTrack.title}</h2>
      <h2>Artist: {currentTrack.artist}</h2>
    </>
  );
};
export default NowPlaying;