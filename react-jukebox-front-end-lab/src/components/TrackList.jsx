const TrackList = (props) => {
  const {
    trackList,
    updateSelected,
    isFormOpen,
    handleFormView,
    handlePlayTrack,
    selected,
    handleRemoveTrack,
  } = props;
  const tracks = trackList.map((track) => (
    <a
      key={track._id}
      onClick={() => updateSelected(track)}
    >
      <li>
        {track.title} - {track.artist}
      </li>
      <button onClick={() => handlePlayTrack(track)}>Play</button>
      <button onClick={() => handleFormView(selected)}>Edit</button>
      <button onClick={() => handleRemoveTrack(selected._id)}>Delete</button>
    </a>
  ));
  return (
    <div>
      <h1>Track List</h1>
      {!trackList.length ? <h2>No tracks yet!</h2> : <ul>{tracks}</ul>}
      <button onClick={handleFormView}>
        {isFormOpen ? "Close Form" : "New Track"}
      </button>
    </div>
  );
};
export default TrackList;