import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return (
    <div className="flex flex-col gap-5 my-6  md:flex-row md:flex-wrap">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentsList;
