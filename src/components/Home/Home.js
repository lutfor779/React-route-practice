import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData/useData';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Home = () => {
    const users = useData();

    const data = [{ name: 'Page A', uv: 1000, pv: 2400, amt: 2400 }, { name: 'Page B', uv: 200, pv: 2400, amt: 2400 }, { name: 'Page C', uv: 200, pv: 2400, amt: 2400 }, { name: 'Page D', uv: 1000, pv: 2400, amt: 2400 }];

    return (
        <div>
            <h1 className="bg-info text-white my-5 w-25 p-3 mx-auto rounded-3">Users found {users.length}</h1>
            <div className="pt-5">
                <Link to="/users">
                    <Button variant="warning">Show users</Button>
                </Link>
            </div>

            {/* chart */}
            <div>
                <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Home;