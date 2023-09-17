export type MessageType = {
  id: string;
  from: { name: string };
  type: string;
  time: string;
  text?: string;
};

export type MessageHistoryProps = {
  list: MessageType[];
};

export type MessagePropsType = {
  props: { from: { name: string }; message: MessageType };
};

/* export type Message = {
  id: string;
  from: { name: string };
  type: Type.Message | Type.Response | Type.Typing;
  time: string;
  text?: string;
};

enum Type {
  Message = "message",
  Response = "response",
  Typing = "typing",
}
*/
