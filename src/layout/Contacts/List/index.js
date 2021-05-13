import React from "react";
import {
  Container,
  Image,
  List,
  Message,
  Placeholder,
  Header,
  Button,
  Icon,
} from "semantic-ui-react";
import AppHeader from "../../../components/Header";
import ImageThumb from "../../../components/ImageThumb";
import Favourites from "../Favourites";

const ContactListUI = ({
  state: {
    contacts: { loading, isSearchActive, foundContacts, data },
  },
  onClickDeleteContact,
  onClickStar,
}) => {
  const currentContacts = isSearchActive ? foundContacts : data;

  return (
    <div>
      <AppHeader />
      <Container>
        <Header>STARRED</Header>
        <Favourites
          favourites={currentContacts.filter((contact) => contact.is_favorite)}
          loading={loading}
        />
        <Header>ALL</Header>
        {loading && (
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        )}
        {!loading && currentContacts.length === 0 && (
          <Message content="No contacts found" />
        )}
        <List>
          {currentContacts?.length > 0 &&
            currentContacts?.map((contact, index) => (
              <List.Item key={index} disabled={contact?.deleting}>
                <List.Content floated="right">
                  <span>
                    {contact.country_code} {contact.phone_number}
                  </span>
                  <Button
                    size="tiny"
                    color="red"
                    onClick={() => onClickDeleteContact(contact.id)}
                  >
                    <Icon name="delete" />
                  </Button>
                  <Button
                    onClick={() => onClickStar(contact.id, contact.is_favorite)}
                  >
                    {contact.is_favorite ? `Unstar` : `Star`}
                  </Button>
                </List.Content>
                <List.Content style={{ display: "flex", alignItems: "center" }}>
                  <ImageThumb
                    firstName={contact.first_name}
                    lastName={contact.last_name}
                    src={contact.contact_picture}
                    style={{ width: 45, height: 45 }}
                  />
                  <span>
                    {contact.first_name} {contact.last_name}{" "}
                    {contact.is_favorite && <Icon name="heart" color="red" />}
                  </span>
                </List.Content>
              </List.Item>
            ))}
        </List>
      </Container>
    </div>
  );
};

export default ContactListUI;
