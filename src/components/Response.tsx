import { MessagePropsType } from "../types";

export default function Response({ props }: MessagePropsType) {
  const { from, message } = props;

  return (
    <li className="clearfix">
      <div className="message-data align-left">
        <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from.name}</span>
        <i className="fa fa-circle"></i>
      </div>
      <div className="message other-message">{message.text}</div>
    </li>
  );
}
