import { useState } from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import FilterSelectControl from "../../Forms/FilterSelectControl";
import styles from './Overview.module.scss'


const OverviewPage: React.FC = () => {
    const [data, setData] = useState()

    function onGet(data: any) {
        setData(data)
    }

    return <div className={styles.root}>
        <FilterSelectControl getData={onGet} />

        {data ? <LineChart
            width={1200}
            height={400}
            data={[...data].splice(0, 30)}
           
        >
            <XAxis dataKey="Date" />
            <YAxis dataKey='High'  />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="High" stroke="#ff7300" />
        </LineChart> : <div/>}
    </div>
}

export default OverviewPage;