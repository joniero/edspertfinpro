import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ListPage from "./pages/list";
import DetailPage from "./pages/detail";
import CheckoutPage from "./pages/checkout";
import InstruksiBayarPage from "./pages/instruksibayar";
import { Provider } from "react-redux";
import store from './store'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <ListPage/>
            },
            {
                 path: 'detail/:id',
                 element: <DetailPage/>
             },
             {
              path: 'checkout/:id',
              element: <CheckoutPage/>
             },
             {
              path: 'instruksibayar/:id',
              element: <InstruksiBayarPage/>
             },
             
        ]
    }
])

function App() {
  return (
    <>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
    </>
);
}

export default App
