import { Button } from '@mui/material'
import { Pages } from '..'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export function Auth() {
  const navigate = useNavigate()
  return (
    <div>
      <Button onClick={()=> navigate(Pages.home)}>home</Button>
    </div>
  )
}