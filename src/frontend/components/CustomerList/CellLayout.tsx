import Link from "next/link";
import Button from "../common/Button";

type CellLayoutProps = {
  id?: any;
  setShowModal?: any;
};

const CellLayout = ({ id, setShowModal }: CellLayoutProps) => {
  const handleUpdate = async () => {
    setShowModal("update");
  };
  const handleDelete = async () => {
    const isConfirm = confirm(
      `Are you sure you want to delete this account`
    ).valueOf();
    console.log(isConfirm);
  };
  return (
    <div className="flex flex-row justify-around w-10 space-x-3">
      <Button onClick={handleUpdate}>Update</Button>
      <Button className="text-red-400" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};

export default CellLayout;
