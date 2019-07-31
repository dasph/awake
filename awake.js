const { get } = require('https')

const { EP, INT, APPS } = process.env

const ep = EP || 'awake'
const int = Number(INT) || 12e5
const apps = JSON.parse(APPS || "[]")

const mins = (t) => Math.trunc(t / 6e4)
const wakeup = (app) => get(`https://${app}.herokuapp.com/${ep}`)
const f = () => apps.forEach(wakeup)

console.log('Ξ Launching Awake')
console.log(`<> Provided apps: ${apps.join(', ') || 0}`)
console.log(`<> Interval: ${mins(int)}mins`)
console.log(`<> Endpoint: /${ep}`)

f()
setInterval(f, int)
