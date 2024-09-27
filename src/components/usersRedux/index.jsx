import { useSelector, useDispatch } from "react-redux";
import { addProducts, nextPage, prevPage } from "../../reducer/productsReducer";

export const UsersRedux = () => {
  const users = useSelector((state) => state.products);

  console.log("USERS", users);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
};
