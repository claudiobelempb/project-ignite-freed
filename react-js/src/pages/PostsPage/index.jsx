const PostPage = (props) => {
  return (
    <>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </>
  );
};

export default PostPage;
