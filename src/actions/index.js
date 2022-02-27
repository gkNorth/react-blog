export const INCREMENT = 'INCREMENT'

export const increment = name => {
  return {
    type: INCREMENT,
    name
  }
}