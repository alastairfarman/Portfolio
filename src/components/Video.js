export default function Video(props) {


    let videoURL = `./assets/vid/${props.videoID}.mp4`

  return (
    <div className="project-section">
      <video src={videoURL} type="video/mp4" loop={true} autoPlay="autoplay" muted>Your browser does not support the video tag.</video>
      <p className="project-title">{props.description}</p>
      <hr />
    </div>
  );
}
