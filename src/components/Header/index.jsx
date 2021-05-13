import React, { useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { Button, Icon, Image, Input, Menu } from "semantic-ui-react";
import logo from "../../assets/images/logo.svg";
import logout from "../../context/actions/auth/logout";
import searchContacts from "../../context/actions/contacts/searchContacts";
import { GlobalContext } from "../../context/Provider";
import isAuthenticated from "../../utils/isAuthenticated";

const Header = () => {
  const { contactDispatch } = useContext(GlobalContext);
  const { pathname } = useLocation();
  const history = useHistory();
  const onLogout = () => logout(history)(contactDispatch);
  const onChangeSearch = (e, { name, value }) => {
    const searchText = value.trim().replace(/" "/g, "");
    searchContacts(searchText)(contactDispatch);
  };
  return (
    <Menu as={Link} to="/" secondary pointing>
      <Image src={logo} width={60} />
      <Menu.Item style={{ fontSize: 24 }}>My Contacts</Menu.Item>
      {isAuthenticated() && (
        <Menu.Item>
          <Input
            position="right"
            placeholder="Search contacts"
            onChange={onChangeSearch}
            style={{ width: 350 }}
          />
        </Menu.Item>
      )}
      {isAuthenticated() && pathname === `/` && (
        <Menu.Item position="right">
          <Button as={Link} to="/contacts/create" basic icon>
            <Icon primary name="add" />
            Create Contact
          </Button>
        </Menu.Item>
      )}
      {isAuthenticated() && (
        <Menu.Item>
          <Button onClick={onLogout} color="red" icon>
            <Icon primary basic name="log out" />
            Logout
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Header;
