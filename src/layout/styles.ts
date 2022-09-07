import { styled } from "../styles/Stitches.config"

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '$primary',
  gap: '1rem',
  
  '& h1': {
    color: '$secondary',
  }
})

export const ImgContainer = styled('div', {
  width: 'max-content',
  height: 'max-content',
  padding: '2.5rem ',
  borderRadius: '100%',
  backgroundColor: '$tertiary',
  mb: '3rem',

  '& img': {
    width: '12rem',
    height: '12rem'
  }
})