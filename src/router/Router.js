import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
export const Router = ({ Navbar }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map(route => <Route key={route.to} path={route.to} element={<route.component />} />)}
      </Routes>
    </BrowserRouter>
  )
}