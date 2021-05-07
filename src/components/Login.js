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