import { RecoilRoot } from 'recoil';
import Login from './components/Login';
import ViewData from './components/ViewData';

function App() {
  return (
    <RecoilRoot>
      <Login />
      <hr />
      <ViewData />
    </RecoilRoot>
  );
}

export default App;
