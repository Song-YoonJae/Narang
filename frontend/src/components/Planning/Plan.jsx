// import { useState } from "react";
import DayPlan from "./DayPlan";
import { Droppable } from "react-beautiful-dnd";
import { useSelector, useDispatch } from "react-redux";
import { scheduleActions } from "../../store/scheduleSlice";
import { useEffect } from "react";

// import * as Y from "yjs";
// import { WebrtcProvider } from "y-webrtc";

// const ydoc = new Y.Doc();

// const ymap = ydoc.getMap("test");
// const ymapNested = new Y.Map();

// ymap.set("my nested map", ymapNested);
// ymap.set("list", []);

// const provider = new WebrtcProvider("test-demo-room", ydoc, {
//   signaling: ["ws://localhost:5173"],
// });

// const awareness = provider.awareness;

// awareness.setLocalStateField("user", {
//   name: "Emmanuelle Charpentier",
//   color: "#ffb61e",
// });

// awareness.on("change", () => {
//   console.log(Array.from(awareness.getStates().values()));
// });

const Plan = () => {
  const list = useSelector((state) => state.schedule);
  const day = useSelector((state) => state.time);
  const dispatch = useDispatch();
  const lineCnt =
    (Number(day.endHour) - Number(day.startHour)) * 2 +
    (Number(day.endMinute) - Number(day.startMinute)) / 30;

  useEffect(() => {
    for (var i = 0; i < day.day; i++) {
      dispatch(scheduleActions.tmpAddDay(lineCnt));
    }
  }, [day.day, dispatch, lineCnt]);

  // ydoc.on("afterTransaction", () => {
  //   setList(Array.from(ymap.get("list")));
  // });

  // useMemo(() => {
  //   ymap.set("list", list);
  // }, [JSON.stringify(list)]);

  const update = () => {};

  const add = () => {
    dispatch(scheduleActions.tmpAddDay(lineCnt));
  };

  return (
    <div className="relative w-full flex overflow-scroll overflow-y:hidden scroll-auto gap-1 m-1">
      {list.map((data, index) => (
        <div className="flex" key={index}>
          <Droppable droppableId={`list${index}`}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <DayPlan
                  data={{ index: index + 1, list: list.at(index) }}
                  update={update}
                  key={index}
                />
              </div>
            )}
          </Droppable>
        </div>
      ))}
      <button onClick={add}>날짜추가</button>
    </div>
  );
};

export default Plan;
