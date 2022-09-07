import { styled } from "../../styles/Stitches.config";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  gap: '1rem',
})

export const ImgContainer = styled('div', {
  width: 'max-content',
  height: 'max-content',
  padding: '.75rem',
  borderRadius: '100%',
  backgroundColor: '$yellow'
})