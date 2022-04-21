import Select from "react-select";

const options = [
  { value: "sort_by=created_at&order=desc", label: "Newest" },
  { value: "sort_by=created_at&order=asc", label: "Oldest" },
  { value: "sort_by=comment_count&order=desc", label: "Most Popular" },
  { value: "sort_by=comment_count&order=asc", label: "Least Popular" },
  { value: "sort_by=votes&order=desc", label: "Hottest" },
  { value: "sort_by=votes&order=asc", label: "Coldest" },
];

const SortSelect = ({ setSelectedOption }) => {
  return (
    <Select
      options={options}
      defaultValue={{ value: "sort_by=created_at&order=desc", label: "Newest" }}
      onChange={(e) => {
        setSelectedOption(e.value);
      }}
    />
  );
};

export default SortSelect;
