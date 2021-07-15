import c from './Button.vue'

c.install = function (app) {
  app.component(c.name, c)
}

export const Button = c