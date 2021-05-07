### Crear aplicación
```bash
npx create-react-app dummy

cd dummy
```

### Instalar librerías
```bash
npm i recoil

npm i axios
```

### Creación del store
> /src/store/Atom.js

```javascript
import { atom } from "recoil";

export const userState = atom({
    key: "user",
    default: {
        id: '',
        userName: '',
        email: ''
    }
});
```

### Creación de componente Login.js
```javascript
import { useRecoilState } from 'recoil';
import { userState } from '../store/Atom';
import axios from 'axios';

function Login() {
    const [data, setData] = useRecoilState(userState);

    const apiUrl = 'https://randomuser.me/api/';

    const handleData = () => (
        axios.get(apiUrl)
            .then(res => {
                const result = res.data.results[0];

                const value = {
                    id: result.login.uuid,
                    userName: result.login.username,
                    email: result.email
                }

                setData(value);
            })
    );

    return (
        <div>
            <button onClick={handleData}>Login</button>
        </div>
    );
}

export default Login;
```

### Creación de componente ViewData.js
```javascript
import { useRecoilState } from 'recoil';
import { userState } from '../store/Atom';

function ViewData() {
    const [data, setData] = useRecoilState(userState);

    return (
        <>
            <div>{data.id}</div>
            <div>{data.userName}</div>
            <div>{data.email}</div>
        </>
    );
}

export default ViewData;
```

### Modificación de App.js
```javascript
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
```

### Ejecutar aplicación
```bash
npm start
```

[localhost:3000](http://localhost:3000/)