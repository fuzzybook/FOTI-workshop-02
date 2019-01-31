// import Singleton from './singletonClass.js'

const Singleton = require('./singletonClass')

const run = () => {
  let singleton1 = Singleton
  let singleton2 = Singleton

  console.log(`singleton1.name: ${singleton1.name} | singleton2.name: ${singleton2.name}`)

  singleton1.name = 'I\'m Pluto'

  console.log(`singleton1.name: ${singleton1.name} | singleton2.name: ${singleton2.name}`)
}

run()

