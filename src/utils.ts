const dateFormat = (endDate: string) => {
  const start: number = new Date().valueOf()
  const end: number = new Date(endDate).valueOf()
  const xtime = start - end
  const xdays = Math.floor(xtime / 86400000)
  const xhour = Math.floor((xtime % 86400000) / 3600000)
  const xmin = Math.floor(((xtime % 86400000) % 3600000) / 60000)
  const xsec = Math.floor((((xtime % 86400000) % 3600000) % 60000) / 1000)
  return (
    xdays + '天' + xhour + '时' + fillZero(xmin) + '分' + fillZero(xsec) + '秒'
  )
}

const fillZero = (nums: number) => {
  const data = nums.toString()
  return data.length < 2 ? data.padStart(2, '0') : data
}

export { dateFormat }
