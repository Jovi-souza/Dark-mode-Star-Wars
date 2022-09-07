import { styled } from "../../styles/Stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '$black',
  gap: '1rem',
  
  '& h1': {
    color: '$yellow',
  }
})

export const ImgContainer = styled('div', {
  width: 'max-content',
  height: 'max-content',
  padding: '2rem 3rem',
  borderRadius: '100%',
  backgroundColor: '#ffffff',
  mb: '3rem'
})