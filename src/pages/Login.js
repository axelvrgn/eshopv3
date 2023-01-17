import React from "react";

import Container from "../components/Container";
import Layout from "../Layout/Layout";
import FormField from "../components/FormField";
import FormControl from "../components/FormControl";

const Login = () => {
  return (
    <div>
      <Layout>
        <Container>
          <div className="flex justify-center h-[70vh] items-center">
            <form className="bg-white border p-16 flex flex-col space-y-8">
              <FormField label="Adresse e-mail">
                <FormControl type="mail" placeholder="john.doe@gmail.com" />
              </FormField>
              <FormField label="Mot de passe">
                <FormControl type="password" />
              </FormField>
              <button className="bg-yellow-400 text-white p-2" type="submit">
                Connexion
              </button>
            </form>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Login;
