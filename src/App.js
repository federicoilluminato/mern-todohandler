import AuthProvider from './auth/AuthProvider';
import AppRouter from './routers/AppRouter';
import {BrowserRouter as Router} from 'react-router-dom';
// import {HashRouter as Router} from 'react-router-dom';
import Layout from './components/layouts/Layout';
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <AuthProvider>
            <Layout>
              <AppRouter />
            </Layout>
        </AuthProvider>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
