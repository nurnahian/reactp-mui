import { Skeleton, Stack } from '@mui/material'
import React from 'react'

function MuiSkeleton() {
  return (
      <Stack spacing={1} width='250px'>
        <Skeleton variant='text' animation='wave'/>    
        <Skeleton variant='circular' width={40} height={40} animation='wave'/>    
        <Skeleton variant='rectangular' width={240} height={240} animation='wave'/>    
      </Stack>
  )
}

export default MuiSkeleton