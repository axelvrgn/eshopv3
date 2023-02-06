import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";

import Container from "../components/Container";
import Layout from "../Layout/Layout";
import FormField from "../components/FormField";
import FormControl from "../components/FormControl";
import Logo from "../components/Logo";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, password);

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword(
        { email },
        { password }
      );
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Layout>
        <Container>
          <div className="flex justify-center h-[70vh] items-center">
            <form onSubmit={handleLogin} className="bg-white border p-16 ">
              <div className="flex flex-col space-y-8 w-[50ch]">
                <div className="h-48">
                  <Logo />
                </div>
                <div className="uppercase flex font-semibold text-lg flex-wrap items-center justify-between">
                  <div>Connexion</div>
                  <button
                    type="button"
                    className="uppercase hover:text-yellow-400 duration-150"
                    onClick={() => navigate("/register")}
                  >
                    Créer un compte
                  </button>
                </div>
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
                    minLength="8"
                  />
                </FormField>
                <button
                  className="bg-yellow-400 text-white p-2"
                  aria-live="polite"
                  type="submit"
                >
                  Connexion
                </button>
              </div>
            </form>
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Login;
