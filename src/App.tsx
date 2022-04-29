import { FC } from "react";
import "./App.scss";

import Home from "./pages/Home";
import Faq from "./pages/Faq";
import Dao from "./pages/Dao";
import Marketplace from "./pages/Marketplace";
import SharkClub from "./pages/SharkClub";
import AdminNFT from "./pages/AdminNFT";
//import Configurations from "./pages/Configurations";
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";



//import IpfsRouter from "ipfs-react-router";

// change sidebar to consume x height
// change footer to consume y height
// change Route to consume 100% - x - y height

const App: FC = () => {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/faq" component={Faq} exact></Route>
          <Route path="/dao" component={Dao} exact></Route>
          <Route path="/marketplace" component={Marketplace} exact></Route>
          <Route path="/the-shark-club" component={SharkClub} exact></Route>
          <Route path="/admin-nft" component={AdminNFT} exact></Route>
        </Switch> 
      </HashRouter>
    </>
  );
}; 

export default App;
