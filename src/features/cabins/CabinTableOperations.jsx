import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField={"discount"}
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "with-discount", label: "With discount" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort bt name (A-Z)" },
          { value: "name-desc", label: "Sort bt name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort bt price (low first)" },
          { value: "regularPrice-desc", label: "Sort bt price (high first)" },
          { value: "maxCapacity-asc", label: "Sort bt price (low first)" },
          { value: "maxCapacity-desc", label: "Sort bt price (high first)" },
        ]}
      />
    </TableOperations>
  );
}
export default CabinTableOperations;
