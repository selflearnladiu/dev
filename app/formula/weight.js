export const to1Kg = ({ type, value }) => {
  switch (type) {
    case "lb":
      return value / 2.20462262
    case "oz":
      return value / 35.2739619
    case "g":
      return value / 1000
    case "kin":
      return value / 1.66666667
    case "tael":
      return value / 26.6595574
    default:
      return value
  }
}

export const kgTo = ({ type, value }) => {
  switch (type) {
    case "lb":
      return value * 2.20462262
    case "oz":
      return value * 35.2739619
    case "g":
      return value * 1000
    case "kin":
      return value * 1.66666667
    case "tael":
      return value * 26.6595574
    default:
      return value
  }
}
