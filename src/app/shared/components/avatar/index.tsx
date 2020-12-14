import React from "react";
import A1 from "./../../../../assets/avatar/1.svg";
import A2 from "./../../../../assets/avatar/2.svg";
import A3 from "./../../../../assets/avatar/3.svg";
import A4 from "./../../../../assets/avatar/4.svg";
import A5 from "./../../../../assets/avatar/5.svg";
import A6 from "./../../../../assets/avatar/6.svg";
import A7 from "./../../../../assets/avatar/7.svg";
import A8 from "./../../../../assets/avatar/8.svg";
import A9 from "./../../../../assets/avatar/9.svg";

interface Props {
  type: number;
}

const DefaultAvatar: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <>
      {props.type === 1 && (
        <img style={{ height: "35px", width: "35px" }} src={A1} alt="Avatar" />
      )}
      {props.type === 2 && (
        <img style={{ height: "35px", width: "35px" }} src={A2} alt="Avatar" />
      )}
      {props.type === 3 && (
        <img style={{ height: "35px", width: "35px" }} src={A3} alt="Avatar" />
      )}
      {props.type === 4 && (
        <img style={{ height: "35px", width: "35px" }} src={A4} alt="Avatar" />
      )}
      {props.type === 5 && (
        <img style={{ height: "35px", width: "35px" }} src={A5} alt="Avatar" />
      )}
      {props.type === 6 && (
        <img style={{ height: "35px", width: "35px" }} src={A6} alt="Avatar" />
      )}
      {props.type === 7 && (
        <img style={{ height: "35px", width: "35px" }} src={A7} alt="Avatar" />
      )}
      {props.type === 8 && (
        <img style={{ height: "35px", width: "35px" }} src={A8} alt="Avatar" />
      )}
      {props.type === 9 && (
        <img style={{ height: "35px", width: "35px" }} src={A9} alt="Avatar" />
      )}
    </>
  );
};

export default DefaultAvatar;
