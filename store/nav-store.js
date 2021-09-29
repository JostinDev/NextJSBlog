import { makeAutoObservable } from 'mobx'

class NavStore {
    nav = [
      { id: 0, name: 'Home', href: '/', current: true },
      { id: 1, name: 'Projects', href: '/projects', current: false },
      { id: 2, name: 'Blog', href: '/blog', current: false },
      { id: 3, name: 'Renders', href: '/renders', current: false }
    ]
    constructor () {
      this.routerPath('/')
      makeAutoObservable(this)
    }

    routerPath(page) {
      switch (page) {
        case '/':
          this.changeFocus(this.nav[0])
          break;
        case '/projects':
          this.changeFocus(this.nav[1])
          break;
        case '/blog':
          this.changeFocus(this.nav[2])
          break;
        case '/posts/[id]':
          this.changeFocus(this.nav[2])
          break;
        case '/renders':
        this.changeFocus(this.nav[3])
        break;
    }
  }

  changeFocus (item) {
    const tempNav = [...this.nav]

    for (const key in tempNav) {
      tempNav[key].current = false
    }
    tempNav[item.id].current = true

    this.nav = tempNav
  }


    getNav() {
      return this.nav
    }
}

export { NavStore }
