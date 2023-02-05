import React, { useState } from "react";
import { supabase } from "../supabaseClient";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await supabase.auth.signInWithPassword(email, password);
      console.log("auth ok");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h1>Sign up</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">S'inscrire</button>
    </form>
  );
};

export default Register;
