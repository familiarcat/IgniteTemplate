const type = {
  base: 'OpenSans-Semibold',
  bold: 'OpenSans-Bold',
  emphasis: 'OpenSans-Light',
  body: 'MinionPro-Regular'
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 20,
  h5: 16,
  h6: 10,
  input: 18,
  regular: 16,
  medium: 14,
  small: 12,
  tiny: 8.5
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3
  },
  h4: {
    fontFamily: type.emphasis,
    fontSize: size.h4
  },
  h5: {
    fontFamily: type.emphasis,
    fontSize: size.h5
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6
  },
  p: {
    fontFamily: type.body,
    fontSize: size.regular
  },
  b: {
    fontFamily: type.body,
    fontWeight: "bold",
    fontSize: size.regular
  },
  description: {
    fontFamily: type.body,
    fontSize: size.medium
  }
}

export default {
  type,
  size,
  style
}

