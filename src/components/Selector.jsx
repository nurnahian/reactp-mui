import React, { useState, useEffect } from 'react'
import { Box, TextField, MenuItem } from '@mui/material'

function Selector() {
    const [country,setCountry] = useState([],"");
    
    useEffect(() => {
        console.log({ country });
    }, [country]); // This will trigger the effect whenever `country` changes
    
    const handleChange = (e) => {
        const value = e.target.value;
        setCountry(value == null ? value.split(',') : value);
    }

    return (
        <>
            <Box width='250px' height='250px'>
                <TextField
                    label='Select Country'
                    select
                    fullWidth
                    value={country}
                    onChange={handleChange}
                    SelectProps={{
                        multiple: true,
                    }}
                    size='small'
                    colorl='secondary'
                    helperText='Please select your country'
                >
                    <MenuItem value='IN'>India</MenuItem>
                    <MenuItem value='US'>USA</MenuItem>
                    <MenuItem value='AU'>Australia</MenuItem>
                </TextField>
            </Box>
        </>
    )
}

export default Selector;
