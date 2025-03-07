import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/home/Home.jsx'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import CartPage from './pages/carts/CartPage.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App></App>}>
          <Route path="/" element={<Home></Home>} />
          <Route path="/cart" element={<CartPage></CartPage>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
)
