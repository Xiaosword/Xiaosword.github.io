import React, { useState, useEffect } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { dateFormat } from '../utils/date'
import './home.less'

const Home: React.FC = () => {
  const [know, setKnow] = useState(dateFormat('9 4,2015'))
  const [love, setLove] = useState(dateFormat('2 5,2016'))
  // const [jxsan, setJxsan] = useState(dateFormat('9 1,2017'))
  const [weddingDay, setWeddingDay] = useState(dateFormat('8 22,2023'))

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    setInterval(() => {
      setKnow(dateFormat('9 4,2015'))
      setLove(dateFormat('2 5,2016'))
      // setJxsan(dateFormat('9 1,2017'))
      setWeddingDay(dateFormat('8 22,2023'))
    }, 1000)
  }

  return (
    <Container className="home-wrapper" maxWidth="sm">
      <Box className="container" sx={{ pt: 4 }} bgcolor="transparent">
        <Typography color="textPrimary" align="center" component="div">
          <img
            className="avatar"
            src="https://cdn.jsdelivr.net/gh/imloren/cdn/img/avatar.jpg"
            alt=""
          />
        </Typography>
        <Typography color="textPrimary" align="center" component="div">
          <div className="xiangshi time-text">相识：{know}</div>
        </Typography>
        <Typography color="textPrimary" align="center" component="div">
          <div className="love time-text">相恋：{love}</div>
        </Typography>
        <Typography color="textPrimary" align="center" component="div">
          <div className="wedding time-text">结婚：{weddingDay}</div>
        </Typography>
        {/* <Typography color="textPrimary" align="center" component="div">
          <div className="jxsan time-text">离开剑三：{jxsan}</div>
        </Typography> */}
      </Box>
    </Container>
  )
}

export default Home
