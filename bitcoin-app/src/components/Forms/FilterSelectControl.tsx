import { Box, Tab, Tabs } from "@mui/material";
import { useEffect, useState } from "react";
import { DATA_API_HOUR, DATA_API_MINUTE, DATA_API_WEEK } from "../../Config/config";
import { GetHistory } from "../../Hooks/Hooks";



type Props = {
    getData: (data: any) => void;
}

const FilterSelectControl: React.FC<Props> = ({ getData }) => {
    const [filter, setFilter] = useState('Minutes');

    const dataMinutes = GetHistory(DATA_API_MINUTE)
    const dataHours = GetHistory(DATA_API_HOUR)
    const dataWeeks = GetHistory(DATA_API_WEEK)


    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setFilter(newValue);
    };

    
    function getIntervalFiveMinutes(data: any) {
            return [...data].filter(d => new Date(d['Date']).getMinutes() % 5 === 0)
    }

    useEffect(() => {
        if (filter === 'Minutes' && dataMinutes) {
            getData(dataMinutes)
        } else if (filter === 'FiveMinutes' && dataMinutes ) {
            getData(getIntervalFiveMinutes(dataMinutes))
        } else if (filter === 'Hours' && dataHours) {
            getData(dataHours)
        } else if (filter === 'Weeks' && dataWeeks) {
            getData(dataWeeks)
        }
    }, [dataHours, dataMinutes, dataWeeks, filter, getData])



    return <Box>
        <Tabs value={filter} onChange={handleChange} >
            <Tab label="Minutes" value={'Minutes'} />
            <Tab label="5 minutes" value={'FiveMinutes'} />
            <Tab label="Hours" value={'Hours'} />
            <Tab label="Weeks" value={'Weeks'} />
        </Tabs>
    </Box>
}

export default FilterSelectControl;