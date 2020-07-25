import React from "react";
import { Row, Col } from "antd";
import { Link, useHistory } from "react-router-dom";
import { Menu, Typography } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import UserAccount from "../Login/index";
import SelectLang from "../Search/SelectLang";
import SearchText from "../Search/SearchText";
import cover from "../../images/logo/cover.png";
import { useSelector } from "react-redux";
import { signOut } from "../../store/actions";
import { useFirebase } from "react-redux-firebase";
import { useLocation } from "react-router-dom";

const { SubMenu } = Menu;

function TitleBar() {
  const firebase = useFirebase();
  const history = useHistory();
  const user = useSelector((state) => state.firebase.auth);
  console.log(user);
  const location = useLocation();
  console.log(location.pathname);

  return (
    <nav>
      <Row align="middle" className="title_bar">
        <Col xl={8} lg={8} md={20} sm={20} xs={20}>
          <Link to="/">
            <span>
              <img alt="title" className="title" src={cover} />
            </span>
          </Link>
        </Col>
        <Col xl={2} lg={2} md={0} sm={0} xs={0}></Col>
        <Col xl={14} lg={14} md={4} sm={4} xs={4}>
          <Menu
            mode="horizontal"
            className="navbar"
            overflowedIndicator={
              <MenuOutlined style={{ color: "#ca6b67", fontWeight: "bold" }} />
            }
          >
            <Menu.Item key="1">
              <Link to="/letter">Dictionary</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/Categories">All categories </Link>
            </Menu.Item>

            <Menu.Item key="3">
              <Link to="/letter">Vote</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/add">
                <span class="icons8-add"></span>
              </Link>
            </Menu.Item>

            {/* <SubMenu
          key="account"
          title={
            <span>
              <UserAccount />
            </span>
          }
        ></SubMenu> */}
            {user.uid ? (
              <SubMenu title={<UserOutlined />} key="profile">
                <Menu.Item key="cat:0">
                  <Link to="/#">{user.displayName}</Link>
                </Menu.Item>
                <Menu.Item key="cat:0">
                  <Typography onClick={() => signOut()(firebase, history)}>
                    Logout
                  </Typography>
                </Menu.Item>
              </SubMenu>
            ) : (
              <SubMenu
                key="account"
                title={
                  <span>
                    <UserAccount />
                  </span>
                }
              ></SubMenu>
            )}
          </Menu>
        </Col>
      </Row>
      <Row style={{ paddingTop: "2vmin" }}>
        <Col xl={2} lg={2} md={2} sm={0} xs={0}></Col>
        <Col xl={6} lg={6} md={6} sm={24} xs={24}>
          <SelectLang />
        </Col>

        {location.pathname.includes("search") ? null : (
          <Col xl={12} lg={12} md={12} sm={24} xs={24}>
            <SearchText />
          </Col>
        )}
        <Col xl={6} lg={6} md={6} sm={0} xs={0}></Col>
      </Row>
    </nav>
  );
}

export default TitleBar;
