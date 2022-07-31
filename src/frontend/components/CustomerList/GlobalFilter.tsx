import React from "react";
import { useAsyncDebounce } from "react-table";

type GlobalFilterProps = {
  preGlobalFilteredRows: any;
  globalFilter: any;
  setGlobalFilter: any;
};

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: GlobalFilterProps) => {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <input
      className="px-5 py-2 rounded-lg shadow"
      value={value || ""}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={`Search...`}
      style={{
        fontSize: "1.1rem",
        border: "0",
      }}
    />
  );
};

export default GlobalFilter;
