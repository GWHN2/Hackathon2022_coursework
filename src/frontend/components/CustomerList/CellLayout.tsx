import Link from "next/link";
import { useRecoilState } from "recoil";
import { CountIDState, DataState } from "../../data/globalState";
import { makeHelloActor } from "../../service/actor-locator";
import Button from "../common/Button";

type CellLayoutProps = {
  id?: any;
  setShowModal?: any;
};

const CellLayout = (props: any) => {
  const helloActor = makeHelloActor();
  const [CountID, setCountID] = useRecoilState<number>(CountIDState);
  const [data, setData] = useRecoilState<any[]>(DataState);

  const handleUpdate = async () => {};
  const handleDelete = async () => {
    const isConfirm = confirm(
      `Are you sure you want to delete this account`
    ).valueOf();
    if (isConfirm) {
      const id = props?.cell?.row?.id;
      if (id) {
        const newData = data.filter((item: any) => item.id !== id);
        setData(newData);
      }
    }
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
