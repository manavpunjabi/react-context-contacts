import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Grid,
  Header as SemanticHeader,
  Segment,
} from "semantic-ui-react";
import Header from "../../components/Header";

const Register = ({
  form: {
    onChange,
    form,
    registerFormValid,
    onSubmit,
    loading,
    error,
    fieldErrors,
  },
}) => {
  return (
    <>
      <Header />
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>sign-up</SemanticHeader>
          <Segment>
            <Form>
              <Form.Group widths="equal">
                <Form.Input
                  name="userName"
                  value={form.userName || ``}
                  onChange={onChange}
                  fluid
                  label="user name"
                  placeholder="first name"
                  error={
                    fieldErrors?.username && {
                      content: fieldErrors.username,
                      pointing: `below`,
                    }
                  }
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  name="firstName"
                  value={form.firstName || ``}
                  onChange={onChange}
                  error={
                    fieldErrors?.last_name && {
                      content: fieldErrors.last_name,
                      pointing: `below`,
                    }
                  }
                  fluid
                  label="first name"
                  placeholder="first name"
                />
                <Form.Input
                  fluid
                  name="lastName"
                  value={form.lastName || ``}
                  onChange={onChange}
                  error={
                    fieldErrors?.last_name && {
                      content: fieldErrors.last_name,
                      pointing: `below`,
                    }
                  }
                  label="last name"
                  placeholder="last name"
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  name="email"
                  value={form.email || ``}
                  onChange={onChange}
                  error={
                    fieldErrors?.email && {
                      content: fieldErrors.email,
                      pointing: `below`,
                    }
                  }
                  label="email"
                  placeholder="email"
                  type="email"
                />
              </Form.Group>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  name="password"
                  value={form.password || ``}
                  onChange={onChange}
                  error={
                    fieldErrors?.password && {
                      content: fieldErrors.password,
                      pointing: `below`,
                    }
                  }
                  label="password"
                  type="password"
                  placeholder="password"
                />
              </Form.Group>
              <Form.Button
                onClick={() => onSubmit()}
                loading={loading}
                disabled={registerFormValid || loading}
                fluid
                primary
              >
                Submit
              </Form.Button>
              <Segment>
                Have an account? <Link to="/auth/login">Login</Link>
              </Segment>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Register;
