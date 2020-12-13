import React from "react";
import HomeLayout from "./../../../layout/homeLayout";
import { usePageTitle } from "./../../../hooks/usePageTitle";

interface Props {}

const ArtistScreen: React.FunctionComponent<Props> = (props: Props) => {
  usePageTitle("Music Life | Artist");

  return (
    <>
      <div style={{ color: "white" }}>Artist</div>
    </>
  );
};

export default ArtistScreen;
