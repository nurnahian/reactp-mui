import { Box, FormControl, FormLabel, FormGroup, Radio, RadioGroup, FormControlLabel, FormHelperText } from '@mui/material'
import React, { useState } from 'react'

function MuiRadioButton() {

    const [value, setValue] = useState('');
    console.log({ value });
    const handelChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <Box>
                <FormControl id='job-ex-group-lable' error>
                    <FormLabel>
                        Year of Experiance
                    </FormLabel>
                </FormControl>
                <RadioGroup
                    name='job-ex-group'
                    aria-labelledby='job-ex-group-lable'
                    value={value}
                    onChange={handelChange}
                    row
                >
                    <FormControlLabel control={<Radio />} label='0-2' value='0-2' />
                    <FormControlLabel control={<Radio />} label='0-2' value='2-4' />
                    <FormControlLabel control={<Radio />} label='0-2' value='5-6' />
                </RadioGroup>
                <FormHelperText>Invalid Selector</FormHelperText>
            </Box>
        </>
    )
}

export default MuiRadioButton