import { Box ,FormControlLabel,Checkbox} from '@mui/material'
import React from 'react'

function MuiCheckBox() {
  return (
      <>
          <Box>
              <FormControlLabel
                  label='I accept terms and conditions'
                  control={<Checkbox/>}
              />
          </Box>
      </>
  )
}

export default MuiCheckBox