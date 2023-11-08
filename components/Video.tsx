function Video({ poster, source }: { source: string; poster: string }) {
  return (
    <video
      controls
      className='w-full aspect-video object-cover'
      poster={poster}
    >
      <source src={source} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
}

export default Video;
