import React, { useEffect, useState } from "react";
import { getAlbum } from "../../../api/explore";
import { Album } from "../../../models/album";
import { usePageTitle } from "./../../../hooks/usePageTitle";

interface Props {}

const AlbumScreen: React.FunctionComponent<Props> = (props: Props) => {
  usePageTitle("Music Life | Albums");

  const [albums, setAlbums] = useState<Array<Album>>([]);

  useEffect(() => {
    getAlbum()
      .then((res) => {
        setAlbums(res.albums);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const [page, setPage] = useState<number>(1);
  const [itemPerPage, setItemPerPage] = useState<number>(10);

  const handleNextPage = () => {
    if (page < albums.length / itemPerPage) setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) setPage(page - 1);
  };
  return (
    <>
      <div
        className="row"
        style={{ color: "white", paddingLeft: "80px", paddingTop: "30px" }}
      >
        {albums.map((album, index) => {
          if (index < itemPerPage * page && index >= itemPerPage * (page - 1))
            return (
              <>
                <div
                  key={album.album_id}
                  style={{
                    marginLeft: "20px",
                    marginRight: "20px",
                    marginBottom: "40px",
                  }}
                  // onClick={() => handleOpenGenre(genre.genre_id, genre.name)}
                >
                  <img
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "20px",
                    }}
                    src={album.image_url}
                    alt={album.title}
                  />
                  <div
                    style={{
                      color: "white",
                      textAlign: "center",
                      marginTop: "10px",
                      fontSize: "20px",
                      fontWeight: "bold",
                      width: "200px",
                      overflow: "hidden",
                      height: "30px",
                    }}
                  >
                    {album.title}
                  </div>
                  <div
                    style={{
                      color: "grey",
                      fontSize: "15px",
                      textAlign: "center",
                      width: "200px",
                      overflow: "hidden",
                      height: "20px",
                    }}
                  >
                    {album.artists}
                  </div>
                </div>
              </>
            );
          else return <></>;
        })}
      </div>
      {albums.length > 0 && (
        <div
          className="row"
          style={{
            paddingBottom: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="pagin-button" onClick={() => handlePreviousPage()}>
            Previous
          </button>
          {Array(Math.ceil(albums.length / itemPerPage))
            .fill(0)
            .map((_, index) => {
              if (index + 1 === page)
                return (
                  <div
                    className="pagination-item"
                    style={{ backgroundColor: "#5773FF" }}
                  >
                    {index + 1}
                  </div>
                );
              else
                return (
                  <div
                    onClick={() => {
                      setPage(index + 1);
                    }}
                    className="pagination-item"
                  >
                    {index + 1}
                  </div>
                );
            })}
          <button className="pagin-button" onClick={() => handleNextPage()}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default AlbumScreen;
