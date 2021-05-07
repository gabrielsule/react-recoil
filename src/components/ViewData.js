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