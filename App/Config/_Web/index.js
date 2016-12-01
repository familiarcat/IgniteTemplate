import AppConfig from "./AppConfig"

export default () => {
  global.__DEV__ = false
  global.__WEB__ = true
}
