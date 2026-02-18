import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
