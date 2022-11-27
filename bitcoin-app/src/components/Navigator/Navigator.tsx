import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import HistoryPage from "../Pages/History/HistoryPage";
import OverviewPage from "../Pages/Overview/OverviewPage";




const Navigator: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return <div><Box>
    <Tabs value={value} onChange={handleChange} >
        <Tab label="History" value={0} />
        <Tab label="Overview" value={1} />
    </Tabs>
  </Box>

  {value === 0 ? <HistoryPage/> : <OverviewPage/>}

  </div>
}

export default Navigator;