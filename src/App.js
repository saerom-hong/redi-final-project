import React from "react";
import Layout from "./components/Layout/Layout";
import { Top5 } from "./components/Top5";
import { Gosearch } from "./components/Gosearch";

function App() {
  return (
    <Layout>
      <Top5 />
      <Gosearch />
    </Layout>
  );
}

export default App;
