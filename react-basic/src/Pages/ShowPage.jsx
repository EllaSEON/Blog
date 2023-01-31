import { useParams } from "react-router-dom";

const ShowPage = () => {
  const { id } = useParams();
  console.log(id);
  return <div>show page</div>;
};
export default ShowPage;
