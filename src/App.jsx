import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import Auth from './pages/Auth'
import { Route,Routes } from 'react-router-dom'
  const queryClient = new QueryClient();
function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <div className="container xl:max-w-screen-xl">
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route exact path="/complete-profile" element={<Auth />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App
