import Login from 'components/login';
import { RoutePermittedRole } from 'shared';
import AdminDashbord from 'components/AdminDashbord';
import Dashbord from 'components/Dashbord';
import { useAuthUser } from '@core/utility/authHook';

function App() {
  const { user } = useAuthUser();

  if (!user) {
    return <Login />;
  }
  if (user === RoutePermittedRole.admin) {
    return <AdminDashbord />;
  } else if (user === RoutePermittedRole.user) {
    return <Dashbord />;
  }
}

export default App;
