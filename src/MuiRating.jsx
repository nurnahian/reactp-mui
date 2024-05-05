import React, { useState } from 'react'
import { Box, Stack, Rating } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function MuiRating() {
    const [value, setValue] = useState(null);
    console.log({ value });
    const handelChange = (e, newValue) => {
        setValue(newValue || null)
    }

    return (
        <Box>
            <Stack spacing={2}>
                <Rating value={value}
                    onChange={handelChange}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize='inherit' color='error'/>}
                    emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
                    // readOnly
                    // highlightSelectedOnly
                />

            </Stack>
        </Box>
    )
}

export default MuiRating