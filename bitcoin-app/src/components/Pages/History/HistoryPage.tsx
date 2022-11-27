import { Box } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useState } from "react";
import FilterSelectControl from "../../Forms/FilterSelectControl";
import styles from './HistoryPage.module.scss'



const columns: GridColDef[] = [
    {
        field: 'Date',
        headerName: 'Date',
        width: 170
    },
    {
        field: 'High',
        headerName: 'High',
        type: 'number',
        width: 160,
    },
    {
        field: 'Low',
        headerName: 'Low',
        type: 'number',
        width: 160,
    },
    {
        field: 'Open',
        headerName: 'Open',
        type: 'number',
        width: 160,
    },
    {
        field: 'Close',
        headerName: 'Close',
        type: 'number',
        width: 160,
    },
    {
        field: 'Volume',
        headerName: 'Volume',
        type: 'number',
        width: 160,
    },
];

const HistoryPage: React.FC = () => {
    const [data, setData] = useState()

    function onGet(data: any) {
        setData(data)
    }

    return <div className={styles.root}>
         <FilterSelectControl getData={onGet}/>

        {data ? <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={data as any}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    getRowId={(row) => row['Date']}
                />
            </Box> : <div></div>}
    </div>
}

export default HistoryPage;