export const dateFormat = (endDate: string) => {
  let start: number = new Date().valueOf()
  let end: number = new Date(endDate).valueOf()
  let xtime = start - end
  let xdays = Math.floor(xtime / 86400000)
  let xhour = Math.floor((xtime % 86400000) / 3600000)
  let xmin = Math.floor(((xtime % 86400000) % 3600000) / 60000)
  let xsec = Math.floor((((xtime % 86400000) % 3600000) % 60000) / 1000)
  return xdays + '天' + xhour + '时' + fillZero(xmin) + '分' + fillZero(xsec) + '秒'
}

const fillZero = (nums: number) => {
  const data = nums.toString()
  return data.length < 2 ? data.padStart(2, '0') : data
}
