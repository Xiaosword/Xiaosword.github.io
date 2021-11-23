import React, { useState, useEffect } from 'react'
import { Container, Typography, Box } from '@material-ui/core'
import { dateFormat } from '../utils/date'
import './home.less'

const Home: React.FC = () => {
  const [know, setKnow] = useState(dateFormat('9 4,2015'))
  const [love, setLove] = useState(dateFormat('2 5,2016'))
  const [jxsan, setJxsan] = useState(dateFormat('9 1,2017'))

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    setInterval(() => {
      setKnow(dateFormat('9 4,2015'))
      setLove(dateFormat('2 5,2016'))
      setJxsan(dateFormat('9 1,2017'))
    }, 1000)
  }

  return (
    <Container maxWidth="sm" className="home-wrapper">
      <Box sx={{ pt: 4 }} bgcolor="transparent">
        <Typography color="textPrimary" align="center" variant="h4" component="div" gutterBottom>
          <div className="title">时间轴</div>
        </Typography>
        <Typography color="textPrimary" align="center" component="div">
          <div className="xiangshi time-text">相识：{know}</div>
        </Typography>
        <Typography color="textPrimary" align="center" component="div">
          <div className="love time-text">恋爱：{love}</div>
        </Typography>
        <Typography color="textPrimary" align="center" component="div">
          <div className="jxsan time-text">AFK：{jxsan}</div>
        </Typography>
      </Box>
    </Container>
  )
}

export default Home
