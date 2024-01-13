import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css'
import Auth from './pages/Auth'
import { Route,Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
  const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster/>
      <div className="container xl:max-w-screen-xl">
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route exact path="/complete-profile" element={<h2>Complete Profile </h2>} />
        </Routes>
      </div>
     </QueryClientProvider>
  );
}

export default App
