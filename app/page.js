"use client";
import { Provider } from "react-redux";
import Dashbord from "./components/Dashbord";

import Store from "./store/Store";

export default function Home() {
  return (
    <div>
      <Provider store={Store}>
        <Dashbord />
      </Provider>
    </div>
  );
}
