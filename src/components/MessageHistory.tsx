import { MessageHistoryProps } from "../types";
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

export default function MessageHistory({ list }: MessageHistoryProps) {
  return (
    <ul>
      {list.length !== 0 ? (
        list.map((el, id) =>
          el.type === "message" ? (
            <Message props={{ from: el.from, message: el }} key={id} />
          ) : el.type === "response" ? (
            <Response props={{ from: el.from, message: el }} key={id} />
          ) : (
            <Typing props={{ from: el.from, message: el }} key={id} />
          )
        )
      ) : (
        <ul />
      )}
    </ul>
  );
}
