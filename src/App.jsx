import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { Provider } from "react-redux";
import Data from "./components/Data";
import { productApi } from "./utils/apiSlice";
import { store } from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <ApiProvider api={productApi}>
      <div>
        <Data />
      </div>
      </ApiProvider>
    </Provider>
  );
}

export default App;
