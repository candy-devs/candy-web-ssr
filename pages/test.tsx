import axios from "axios";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import BottomSheet from "../components/BottomSheet";
import { apiPrefix } from "../config/ApiConfig";
import * as counterActions from "../store/modules/counter";

export default function Test() {
  const dispatch = useDispatch();
  const value = useSelector(({ counter }: any) => counter.value);

  const plus = useCallback(
    ({ value }: any) => {
      dispatch(counterActions.increment({ value }));
    },
    [dispatch]
  );

  const minus = useCallback(
    ({ value }: any) => {
      dispatch(counterActions.decrement({ value }));
    },
    [dispatch]
  );

  const postButton = useCallback(async () => {
    const res = await axios.post(`${apiPrefix}/api/v1/hello`);
    console.log(res.data);
  }, []);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => minus({ value })}>-</button>
      <span>{value}</span>
      <button onClick={() => plus({ value })}>+</button>
      <BottomSheet />
      <button onClick={() => postButton()}>Test Hello Post</button>
    </div>
  );
}
