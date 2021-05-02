import React from "react";
import {
  Button,
  Card,
  Form,
  Grid,
  Select,
  Header as SemanticHeader,
} from "semantic-ui-react";
import Header from "../../../components/Header/index.jsx";
import "./index.css";
import countries from "../../../utils/countries";

const Create = ({ onChange }) => {
  return (
    <>
      <Header />
      <Grid centered>
        <Grid.Column className="form-column">
          <SemanticHeader>Create Contact</SemanticHeader>
          <Card fluid>
            <Card.Content>
              <Form unstackable>
                <div className="contact-picture">
                  <span>Choose Picture</span>
                </div>
                <Form.Group widths={2}>
                  <Form.Input
                    label="first name"
                    name="firstName"
                    onChange={onChange}
                    placeholder="first name"
                  />
                  <Form.Input
                    label="last name"
                    name="lastName"
                    onChange={onChange}
                    placeholder="last name"
                  />
                </Form.Group>
                <Form.Group widths={2}>
                  <Form.Input
                    label="countryCode"
                    name="country"
                    control={Select}
                    options={countries}
                    onChange={onChange}
                    placeholder="country"
                  />
                  <Form.Input
                    label="phone number"
                    name="phone_number"
                    onChange={onChange}
                    placeholder="phone number"
                  />
                </Form.Group>
                <Form.Checkbox
                  label="favourite?"
                  name="favourite"
                  onChange={(e, data) =>
                    onChange(e, { name: `favourite`, value: data.checked })
                  }
                />
                <Button primary type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Create;