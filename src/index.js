import { HashRouter } from './hash'
import { HistoryRouter } from './history'
import { ROUTE_LIST } from './routeList'

const MODE = 'hash'


class WebRouter {
  constructor({ mode = 'hash', routeList }) {
    this.router = mode === 'hash' ? new HashRouter(routeList) : new HistoryRouter(routeList)
  }

  push(path) {
    this.router.push(path)
  }

  replace(path) {
    this.router.replace(path)
  }

  go(num) {
    this.router.go(num)
  }
}

new WebRouter({
  mode: MODE,
  routeList: ROUTELIST
})