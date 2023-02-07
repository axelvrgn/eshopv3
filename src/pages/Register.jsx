import React, { useState } from "react";
//import { supabase } from "../supabaseClient";

import { useNavigate } from "react-router-dom";

import Layout from "../layout/Layout";
import Container from "../components/Container";
import FormField from "../components/FormField";
import FormControl from "../components/FormControl";
import Logo from "../components/Logo";
import Alert from "../components/Alert";

const Register = () => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerif, setPasswordVerif] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    /*
    try {
      await supabase.auth.signUp({ email }, { password });
      alert("Check your mails");
      //await supabase.auth.signInWithPassword(email, password);
      console.log("check email");
    } catch (error) {
      setError(error.message);
    }
    */
  };

  return (
    <Layout>
      <Container>
        <div className="flex justify-center">
          <form className="bg-white p-16" onSubmit={handleSignup}>
            <div className="w-[50ch] flex flex-col space-y-8">
              <Alert title="Inscription en cours de dev" />
              <div className="h-48">
                <Logo />
              </div>
              <div className="flex justify-between">
                <div className="uppercase font-semibold text-lg">
                  Inscription
                </div>
                <button
                  className="uppercase font-semibold text-lg hover:text-yellow-400 duration-150"
                  onClick={() => navigate("/login")}
                >
                  Déjà membre ?
                </button>
              </div>

              <FormField htmlFor="pseudo" label="Pseudo">
                <FormControl
                  type="text"
                  value={pseudo}
                  onChange={(e) => setPseudo(e.target.value)}
                />
              </FormField>
              <FormField htmlFor="email" label="Adresse e-mail">
                <FormControl
                  type="email"
                  placeholder="john.doe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormField>
              <FormField htmlFor="password" label="Mot de passe">
                <FormControl
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormField>
              <FormField
                htmlFor="passwordverif"
                label="Vérification du mot de passe"
              >
                <FormControl
                  type="passwordverif"
                  value={passwordVerif}
                  onChange={(e) => setPasswordVerif(e.target.value)}
                />
              </FormField>
              <button className="bg-yellow-400 p-2 text-white" type="submit">
                S'inscrire
              </button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </form>
        </div>
      </Container>
    </Layout>
  );
};

export default Register;
