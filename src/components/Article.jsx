import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReq, postReq } from "../utils/api";
import CommentSortSelect from "./CommentSortSelect";
import DeleteButton from "./DeleteButton";
import LikeButton from "./LikeButton";
import ReturnHomeButton from "./ReturnHomeButton";

const Article = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [err, setErr] = useState(null);
  const [username] = useState("jessjelly"); //hard-coded username for manual-testing
  const [newCommentToPost, setNewCommentToPost] = useState("");
  const [isReadyToSend, setIsReadyToSend] = useState(true);
  const [commentSortOption, setCommentSortOption] = useState(
    "sort_by=created_at&order=desc"
  );

  useEffect(() => {
    const asyncEffect = async () => {
      try {
        const articleFromApi = await getReq(`/articles/${article_id}`);
        setArticle(articleFromApi.article);
        if (articleFromApi.article.comment_count > 0) {
          const commentsFromApi = await getReq(
            `/articles/${article_id}/comments?${commentSortOption}`
          );
          setComments(commentsFromApi.comments);
        }
      } catch (err) {
        if (err.response.status === 400) {
          setErr(
            "400 - There is something wrong with your search! Please try again :O"
          );
        }
        if (err.response.status === 404) {
          setErr(
            "404 - We don't know where your article is! Please try again :O"
          );
        }
      }
    };
    asyncEffect();
  }, [article_id, commentSortOption]);

  const handleCommentPost = async (event) => {
    try {
      event.preventDefault();
      if (newCommentToPost === "") {
        alert("You haven't entered a comment to post!");
        return;
      }
      if (newCommentToPost !== "" && isReadyToSend) {
        setIsReadyToSend(false);
        setComments((currentComments) => {
          return [
            {
              body: newCommentToPost,
              author: username,
              votes: 0,
              comment_id: `new_${(Math.random() * 100).toString()}`,
            },
            ...currentComments,
          ];
        });
        await postReq(`/articles/${article_id}/comments`, {
          body: newCommentToPost,
          username: username,
        });
        let newCommentsFromApi = await getReq(
          `/articles/${article_id}/comments`
        );
        setComments(newCommentsFromApi.comments);
        setNewCommentToPost("");
        setIsReadyToSend(true);
      }
    } catch (err) {
      setErr(
        "There was a problem loading the comments! Dearest apologies - please try again!"
      );
    }
  };

  if (err) {
    return (
      <div className="flex flex-col justify-center text-center lg:w-1/2 lg:m-auto">
        <h1>{err}</h1>
        <ReturnHomeButton />
      </div>
    );
  }

  return (
    <article className="text-center lg:w-1/2 lg:m-auto">
      <div className="text-white bg-sonic-silver mb-3 p-2 rounded-lg">
        <h1>{article.title}</h1>
        <h3>{article.author}</h3>
        <br></br>
        <p>{article.body}</p>
        <br></br>
        <LikeButton article={article} comment={""} />
      </div>
      <h1 className="mb-2">Comments:</h1>
      <div className="sticky top-24">
        <CommentSortSelect setCommentSortOption={setCommentSortOption} />
      </div>
      <ul className="mt-2 px-2 bg-sonic-silver rounded-lg py-5 mb-10">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>{comment.author}</p>
              <DeleteButton
                comment={comment}
                setComments={setComments}
                username={username}
              />
              <LikeButton comment={comment} article={""} />
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleCommentPost} className="flex flex-col px-2 mb-10">
        <label htmlFor="comment-body">
          Post a comment below! {300 - newCommentToPost.length}
        </label>
        <textarea
          name="comment-body"
          maxLength="300"
          value={newCommentToPost}
          onChange={(event) => {
            setNewCommentToPost(event.target.value);
          }}
          className="text-black rounded-lg resize-none"
        ></textarea>
        <button>Submit</button>
      </form>
    </article>
  );
};

export default Article;
