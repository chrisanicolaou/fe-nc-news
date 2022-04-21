import { deleteReq } from "../utils/api";

const DeleteButton = ({ comment, setComments, username }) => {
  const deleteComment = async (event) => {
    event.preventDefault();
    setComments((currComments) => {
      const newComments = [...currComments];
      return newComments.filter(
        (thisComment) => thisComment.comment_id !== comment.comment_id
      );
    });
    await deleteReq(`/comments/${comment.comment_id}`);
  };

  if (comment.author === username) {
    return (
      <button
        onClick={deleteComment}
        className="border-2 rounded-md border-black bg-red-500 px-2 hover:bg-red-700"
      >
        Delete
      </button>
    );
  }
};

export default DeleteButton;
