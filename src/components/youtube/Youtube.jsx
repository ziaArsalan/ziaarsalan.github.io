const Youtube = ({embededId, allow}) => {
  return (
    <div className="y">
        <iframe
            width="100%"
            height="100vh"
            src={`https://www.youtube.com/embed/${embededId}`}
            frameBorder="0"
            allow={`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture ${allow}`}
            
            allowFullScreen
            title="Embedded youtube"
        />
    </div>
  );
};

export default Youtube;
