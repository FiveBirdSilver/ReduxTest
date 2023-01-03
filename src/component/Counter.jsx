import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, changeNum, getname, close } from "../redux/counterSlice";

export function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.value);
  const arr = useSelector((state) => state.arr);

  return (
    <div className="content">
      <div className="row">
        <button className="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <input
          type="text"
          className="input"
          onChange={(e, value) => dispatch(changeNum(Number(e.target.value)))}
          value={count}
        />
        <button className="button" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
      <button onClick={() => dispatch(getname(count))} className="submit">
        검색
      </button>
      <div className="listWrap">
        {arr.map((i) => (
          <div className="list">
            <button className="close" onClick={() => dispatch(close(i.id))}>
              ✖
            </button>
            <span className="name">INDEX : {i.id}</span>
            <span className="name">이름 : {i.name}</span>
            <span className="name">번호 : {i.phone}</span>
            <span className="name">이메일 : {i.email}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
