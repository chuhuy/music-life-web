// @ts-ignore
import React, { RefObject, useRef, useState } from "react";
import "./styles.css";
import { Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useWindowDimensions } from "./../../../hooks/useWindowDimensions";
import { tabletWidth } from "./../../constants/devices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import { LOGOUT } from "../../../redux/modules/auth/actions";
import Avatar from "./../../../../assets/avatar/1.svg";
import DefaultAvatar from "../avatar";

interface Props {}

const Header: React.FunctionComponent<Props> = (props: Props) => {
  const dispatch = useDispatch();

  const { width } = useWindowDimensions();

  const auth = useSelector((state: RootState) => state.auth);

  const handleSignOut = () => {
    return dispatch({ type: LOGOUT });
  };
  const initialValue: any = {
    search: "",
  };

  const [inputRefs] = useState<{
    [key: string]: RefObject<HTMLInputElement>;
  }>({
    search: useRef<HTMLInputElement>(null),
  });

  const handleSearch = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Row
        id="header-container"
        style={width < tabletWidth ? { marginBottom: "40px" } : {}}
      >
        <div />
        {/* <Formik
          initialValues={initialValue}
          onSubmit={(values) => {
            handleSearch(values);
          }}
        >
          {({ handleSubmit, values }) => (
            <>
              <div id="header-search">
                <Field
                  innerRef={inputRefs.search}
                  component="input"
                  className="search-input"
                  placeholder="Type here to search"
                  row={1}
                  id="inputSearch"
                  name="search"
                />
              </div>
            </>
          )}
        </Formik> */}
        <div id="header-setting" style={{ marginTop: "5px" }}>
          <button className="player-icon-button" onClick={handleSignOut}>
            <FontAwesomeIcon icon={faSignOutAlt} color="#c91414" size="1x" />
          </button>
          <div
            style={{
              width: "150px",
              height: "40px",
              backgroundColor: "#25252D",
              marginLeft: "5px",
              // borderTopLeftRadius: "20px",
              // borderBottomLeftRadius: "20px",
            }}
            className="row"
          >
            <div
              style={{
                height: "40px",
                width: "40px",
                background: "#32323D",
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
              }}
            >
              <DefaultAvatar type={auth.default_avatar} />
            </div>
            <div
              style={{
                color: "white",
                paddingLeft: "10px",
                fontWeight: "bold",
                marginTop: "-5px",
                fontSize: "small",
              }}
              className="section-vertical-align"
            >
              {auth.display_name}
            </div>
          </div>
        </div>
      </Row>
    </>
  );
};

export default Header;
