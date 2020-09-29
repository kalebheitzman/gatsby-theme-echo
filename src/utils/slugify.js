// import libs
import slugify from 'slugify'

export default (text) => {
  return slugify(text, { lower: true })
}
