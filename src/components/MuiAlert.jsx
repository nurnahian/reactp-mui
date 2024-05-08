import { Alert, AlertTitle, Button, Stack } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check';
import React from 'react'

function MuiAlert() {
    return (
        <div>
            <Stack spacing={2}>
                <Alert severity='error'>This is error</Alert>
                <Alert severity='warning'>This is error</Alert>
                <Alert severity='info'>This is error</Alert>
                <Alert severity='success'>This is error</Alert>

                <Alert variant='outlined' severity='error'>This is error</Alert>
                <Alert variant='outlined' severity='warning'>This is error</Alert>
                <Alert variant='outlined' severity='info'>This is error</Alert>
                <Alert variant='outlined' severity='success'>This is error</Alert>

                <Alert variant='filled' severity='error' onClose={()=>alert('Close alert')}>
                    <AlertTitle>Error</AlertTitle>
                    This is error</Alert>
                <Alert variant='filled' severity='warning'>
                <AlertTitle>warning</AlertTitle>
                    This is error</Alert>
                <Alert variant='filled' severity='info'>
                <AlertTitle>info</AlertTitle>
                    This is error</Alert>
                <Alert variant='filled' severity='success' icon={<CheckIcon fontSize='inherit'/>}
                action={<Button color='inherit' size='small'>Undo</Button>}
                >
                <AlertTitle>success</AlertTitle>
                    This is error</Alert>
            </Stack>
        </div>
    )
}

export default MuiAlert