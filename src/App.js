import { BrowserRouter as Router, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import Report from "./pages/Report";
import Payment from "./pages/Payment";

function App() {
  return (
    <Router>
      <div
        className="flex h-screen overflow-y-hidden bg-gray-100"
        style={{ width: "100vw" }}
      >
        <Layout>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
