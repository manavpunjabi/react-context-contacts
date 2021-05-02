import React from "react";
import { Link } from "react-router-dom";
import {
  Form,
  Grid,
  Header as SemanticHeader,
  Message,
  Segment,
} from "semantic-ui-react";
import Header from "../../components/Header";

const Login = ({
  form: { onChange, form, loginFormValid, onSubmit, loading, error },
}) => {
  return (
    <>
      <Header />
      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>login</SemanticHeader>
          <Segment>
            <Form>
              {error && <Message content={error?.detail} negative />}
              <Form.Group widths="equal">
                <Form.Input
                  name="userName"
                  value={form.userName || ``}
                  onChange={onChange}
                  fluid
                  label="user name"
                  placeholder="first name"
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  name="password"
                  value={form.password || ``}
                  onChange={onChange}
                  label="password"
                  type="password"
                  placeholder="password"
                />
              </Form.Group>
              <Form.Button
                onClick={() => onSubmit()}
                loading={loading}
                disabled={loginFormValid || loading}
                fluid
                primary
              >
                Submit
              </Form.Button>
              <Segment>
                Need an account? <Link to="/auth/register">Register</Link>
              </Segment>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Login;
