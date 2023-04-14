import logo from "./logo.svg";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { store } from "./utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import VideoContainer from "./components/VideoContainer";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

function App() {
  /***
   *
   * Head
   * Body
   *  SideBar
   *    MenuItems
   *  MainContainer
   *    ButtonList
   *     VideoContainer
   *     VideoCard
   ***/

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "demo",
          element: (
            <>
              <Demo />
              <Demo2 />
            </>
          ),
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
