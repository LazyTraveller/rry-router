const El = document.querySelector('#page')

export class BaseRouter {
  /** list 路由表 */
  constructor(list) {
    this.list = list
  }

  render(state) {
    /** 匹配当前的路由，匹配不到则使用404配置内容并渲染 */
    let ele = this.list.find(el => el.path === state)
    ele = ele ? ele : this.list.find(ele => ele.path === '*')
    El.innerHTML = ele.component
  }
}