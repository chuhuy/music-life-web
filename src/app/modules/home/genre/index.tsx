import React from "react";
import HomeLayout from "./../../../layout/homeLayout";
import { usePageTitle } from "./../../../hooks/usePageTitle";

interface Props {}

const GenreScreen: React.FunctionComponent<Props> = (props: Props) => {
  usePageTitle("Music Life | Genre");

  return (
    <>
      <div style={{ color: "white" }}>Genre</div>
    </>
  );
};

export default GenreScreen;
