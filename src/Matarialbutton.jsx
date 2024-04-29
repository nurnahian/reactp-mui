import React from 'react'
import { Button, Divider, Stack, Paper, IconButton, ButtonGroup ,ToggleButtonGroup,ToggleButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';


function Matarialbutton() {



    return (
        <div>
            <Stack direction="row" spacing={2} >
                <Button variant='text' href='https://www.google.com'>Text</Button>
                <Button variant='contained' color='primary'>Text</Button>
                <Button variant='outlined'>Text</Button>
            </Stack>
            <hr />
            <Stack spacing={4} direction='row' >
                <Button variant='contained' color='primary' >Primary</Button>
                <Button variant='contained' color='secondary' >secondary</Button>
                <Button variant='contained' color='error' >error</Button>
                <Button variant='contained' color='warning' >warning</Button>
                <Button variant='contained' color='info' >info</Button>
                <Button variant='contained' color='success' >success</Button>
            </Stack>
            <hr />
            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Small</Button>
            </Stack>
            <hr />
            <Stack spacing={2} direction='row'>
                <Button variant='contained' size='small' startIcon={<SendIcon />}>small</Button>
                <Button variant='contained' size='small' endIcon={<SendIcon />}>small</Button>
                <Button variant='contained' size='medium' startIcon={<SendIcon />}>Medium</Button>
                <Button variant='contained' size='medium' endIcon={<SendIcon />}>Medium</Button>
                <Button variant='contained' size='large' startIcon={<SendIcon />} disableRipple>Small</Button>
                <Button variant='contained' size='large'aria-label='Click me' endIcon={<SendIcon />} disableElevation onClick={() => alert('Click')}>Small</Button>

                <IconButton color='warning'>
                    <SendIcon />
                </IconButton>
                <IconButton color='warning' disableRipple>
                    <AddCircleOutlineIcon />
                </IconButton>

            </Stack>
            <hr />
            <Stack direction='row' spacing={2}>
                <ButtonGroup variant='contained'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup variant='outlined' >
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup variant='text' >
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup variant='contained' orientation='vertical' color='secondary' size='small' >
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <hr />
            <Stack direction='row'>
                <ToggleButtonGroup aria-label='text formaing'>
                    <ToggleButton value='bold'>
                        <FormatBoldIcon/>
                    </ToggleButton>
                    <ToggleButton value='italic'>
                        <FormatItalicIcon/>
                    </ToggleButton>
                    <ToggleButton value='underline' >
                        <FormatUnderlinedIcon/>
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>

        </div>
    )
}

export default Matarialbutton