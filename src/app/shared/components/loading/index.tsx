import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import load from './../../../../assets/gif/loading.gif';

interface Props {}

const LoadingComponent: React.FunctionComponent<Props> = (props: Props) => {
  const loading = useSelector((state: RootState) => state.loading);

  return (
    <>
      {loading.status && (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 100,
            paddingTop: '37vh',
            paddingLeft: 'calc(50vw - 12vh)'
          }}
        >
          <img
          style={{height: '25vh'}}
            src={load}
            alt="Loading"
          />
        </div>
      )}
    </>
  );
};

export default LoadingComponent;
