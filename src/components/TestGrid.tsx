import { LinearProgress } from '@mui/material';
import { DataGridPro, GridColDef, GridRowsProp } from '@mui/x-data-grid-pro';
import { LicenseInfo } from '@mui/x-license';
import { useState } from 'react';

const initialRows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'Hello 2', col2: 'World 2' },
  { id: 3, col1: 'Hello 3', col2: 'World 3' },
  { id: 4, col1: 'Hello', col2: 'World 4' },
  { id: 5, col1: 'Hello', col2: 'World 5' },
  { id: 6, col1: 'Hello', col2: 'World 6' },
  { id: 7, col1: 'Hello', col2: 'World 7' },
  { id: 8, col1: 'Hello', col2: 'World 8' },
  { id: 9, col1: 'Hello', col2: 'World 9' },
  { id: 10, col1: 'Hello', col2: 'World 10' },
  { id: 11, col1: 'Hello', col2: 'World 11' },
  { id: 12, col1: 'Hello', col2: 'World 12' },
  { id: 13, col1: 'Hello', col2: 'World 13' },
  { id: 14, col1: 'Hello', col2: 'World 14' },
  { id: 15, col1: 'Hello', col2: 'World 15' },
  { id: 16, col1: 'Hello', col2: 'World 16' },
  { id: 17, col1: 'Hello', col2: 'World 17' },
  { id: 18, col1: 'Hello', col2: 'World 18' },
  { id: 19, col1: 'Hello', col2: 'World 19' },
  { id: 20, col1: 'Hello', col2: 'World 20' },
  { id: 21, col1: 'Hello', col2: 'World 21' },
  { id: 22, col1: 'Hello', col2: 'World 22' },
  { id: 23, col1: 'Hello', col2: 'World 23' },
  { id: 24, col1: 'Hello', col2: 'World 24' },
  { id: 25, col1: 'Hello', col2: 'World 25' },
  { id: 26, col1: 'Hello', col2: 'World 26' },
  { id: 27, col1: 'Hello', col2: 'World 27' },
  { id: 28, col1: 'Hello', col2: 'World 28' },
  { id: 29, col1: 'Hello', col2: 'World 29' },
  { id: 30, col1: 'Hello', col2: 'World 30' },
  { id: 31, col1: 'Hello', col2: 'World 31' },
  { id: 32, col1: 'Hello', col2: 'World 32' },
  { id: 33, col1: 'Hello', col2: 'World 33' },
  { id: 34, col1: 'Hello', col2: 'World 34' },
  { id: 35, col1: 'Hello', col2: 'World 35' },
  { id: 36, col1: 'Hello', col2: 'World 36' },
  { id: 37, col1: 'Hello', col2: 'World 37' },
  { id: 38, col1: 'Hello', col2: 'World 38' },
  { id: 39, col1: 'Hello', col2: 'World 39' },
  { id: 40, col1: 'Hello', col2: 'World 40' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

const CustomLoadingMoreOverlay: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <LinearProgress />
    </div>
  );
};

const TestGrid = () => {
  const [rows, setRows] = useState(initialRows);
  const [pushCount, setPushCount] = useState(0);

  const handleOnRowsScrollEnd = () => {
    if (pushCount === 0) {
      setTimeout(() => {
        const newRows = rows.concat(
          { id: 41, col1: 'Hello', col2: 'World 41' },
          { id: 42, col1: 'Hello', col2: 'World 42' },
          { id: 43, col1: 'Hello', col2: 'World 43' },
          { id: 44, col1: 'Hello', col2: 'World 44' },
          { id: 45, col1: 'Hello', col2: 'World 45' },
        )
        setRows(newRows);
      }, 1000);
    } else if (pushCount === 1) {
      setTimeout(() => {
        const newRows = rows.concat(
          { id: 46, col1: 'Hello', col2: 'World 46' },
          { id: 47, col1: 'Hello', col2: 'World 47' },
          { id: 48, col1: 'Hello', col2: 'World 48' },
          { id: 49, col1: 'Hello', col2: 'World 49' },
          { id: 50, col1: 'Hello', col2: 'World 50' },
        )
        setRows(newRows);
      }, 1000);
    } else if (pushCount === 2) {
      setTimeout(() => {
        const newRows = rows.concat(
          { id: 51, col1: 'Hello', col2: 'World 51' },
          { id: 52, col1: 'Hello', col2: 'World 52' },
          { id: 53, col1: 'Hello', col2: 'World 53' },
          { id: 54, col1: 'Hello', col2: 'World 54' },
          { id: 55, col1: 'Hello', col2: 'World 55' },
        )
        setRows(newRows);
      }, 1000);
    } else if (pushCount === 3) {
      setTimeout(() => {
        const newRows = rows.concat(
          { id: 56, col1: 'Hello', col2: 'World 56' },
          { id: 57, col1: 'Hello', col2: 'World 57' },
          { id: 58, col1: 'Hello', col2: 'World 58' },
          { id: 59, col1: 'Hello', col2: 'World 59' },
          { id: 60, col1: 'Hello', col2: 'World 60' },
        )
        setRows(newRows);
      }, 1000);
    }
    setPushCount(pushCount + 1);
  };

  LicenseInfo.setLicenseKey(`${process.env.REACT_APP_DATA_GRID_PRO_KEY}`);

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <DataGridPro
        columns={columns} 
        hideFooterPagination
        hideFooterRowCount
        onRowsScrollEnd={handleOnRowsScrollEnd}
        pagination={false}
        rows={rows}
        slots={{
          loadingOverlay: CustomLoadingMoreOverlay,
        }}
        slotProps={{
          row: {
            rowHeight: 40,
          },
        }}
      />
    </div>
  );
}

export default TestGrid;