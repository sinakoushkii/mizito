import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon fontSize="small" />, name: 'کپی' },
  { icon: <SaveIcon fontSize="small" />, name: 'ذخیره' },
  { icon: <PrintIcon fontSize="small" />, name: 'پرینت' },
  { icon: <ShareIcon fontSize="small" />, name: 'اشتراک گذاری' },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{transform: 'translateZ(0px)'}}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{
          '& .MuiFab-root': {
            width: 40,         // Smaller main button width
            height: 40,        // Smaller main button height
          },
          '& .MuiSpeedDialIcon-icon': {
            fontSize: 20,      // Smaller icon size
          },
        }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            sx={{
              '& .MuiFab-root': {
                width: 36,      // Smaller action button width
                height: 36,     // Smaller action button height
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
