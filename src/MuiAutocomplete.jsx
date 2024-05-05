import { Box, Autocomplete, TextField, Stack } from '@mui/material'
import React, { useState } from 'react'

const skill = ['HTML', 'CSS', 'JavaScript', 'Go', 'Java'];

const SkillOption = skill.map((skill, index) => ({
    id: index + 1,
    label: skill,
}))

function MuiAutocomplete() {
    const [value, setValue] = useState(null)
    const [SkillValue, setSkillValue] = useState(null)
    console.log(SkillValue);

    return (
        <Box>
            <Stack spacing={2} width='250px'>
                <Autocomplete
                    options={skill}
                    renderInput={(param) => <TextField {...param} label='Skills' />}
                    value={value}
                    onChange={(e, newValue) => setValue(newValue)}
                // freeSolo
                />
                <Autocomplete
                    options={SkillOption}
                    renderInput={(param) => <TextField {...param} label='Skills' />}
                    value={SkillValue}
                    onChange={(e, newValue) => setSkillValue(newValue)}
                // freeSolo
                />
            </Stack>
        </Box>
    )
}

export default MuiAutocomplete