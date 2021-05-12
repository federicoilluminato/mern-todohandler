import AuthProvider from './auth/AuthProvider';
import AppRouter from './routers/AppRouter';
import {HashRouter as Router} from 'react-router-dom';
import Layout from './components/layouts/Layout';

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
    </div>
  );
}

export default App;
