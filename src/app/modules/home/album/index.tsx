import React from "react";
import HomeLayout from "./../../../layout/homeLayout";
import { usePageTitle } from "./../../../hooks/usePageTitle";

interface Props {}

const AlbumScreen: React.FunctionComponent<Props> = (props: Props) => {
  usePageTitle("Music Life | Albums");

  return (
    <>
      <div style={{ color: "white" }}>Album</div>
    </>
  );
};

export default AlbumScreen;
