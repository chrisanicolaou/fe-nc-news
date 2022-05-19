import Select from "react-select";

const options = [
  { value: "sort_by=created_at&order=desc", label: "Newest" },
  { value: "sort_by=created_at&order=asc", label: "Oldest" },
  { value: "sort_by=votes&order=desc", label: "Highest Votes" },
  { value: "sort_by=votes&order=asc", label: "Lowest Votes" },
];

const CommentSortSelect = ({ setCommentSortOption }) => {
  return (
    <Select
      className="text-black px-2"
      options={options}
      defaultValue={{ value: "sort_by=created_at&order=desc", label: "Newest" }}
      onChange={(e) => {
        setCommentSortOption(e.value);
      }}
    />
  );
};

export default CommentSortSelect;
