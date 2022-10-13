import _ from 'lodash'

//监听滚动条
export default {
  scrollTop: _.debounce(function () {
    if (!__VUEPRESS_SSR__) {
      let scroll = document.documentElement.scrollTop || document.body.scrollTop
      console.log(scroll)
    }
  }, 300),

  clickPoint() {
    if (!__VUEPRESS_SSR__) {
      window.onload = () => {
        // 全局注册点击事件
        document.addEventListener(
          'mousedown',
          _.debounce(function (event) {
            let target = event.target
            target.style.setProperty('--offsetx', event.offsetX + 'px')
            target.style.setProperty('--offsety', event.offsetY + 'px')
            if (target.parentElement) {
              target.parentElement.style.setProperty('--target-width', target.clientWidth)
              target.parentElement.style.setProperty('--target-height', target.clientHeight)
              target.parentElement.style.setProperty('--target-left', target.offsetLeft)
              target.parentElement.style.setProperty('--target-top', target.offsetTop)
            }
          }, 300),
        )
        console.log('loading---success')
      }
    }
  },
  appendDom(dom, father) {
    if (!__VUEPRESS_SSR__) {
      const frag = document.createDocumentFragment()
      frag.appendChild(dom)
      setTimeout(() => {
        father?.appendChild && father.appendChild(frag)
        // document.body.appendChild(dogWrap)
      }, 300)
    }
  },

  addCube(father) {
    if (!__VUEPRESS_SSR__) {
      const temp = document.createElement('div')
      const str = `<div class="flip-box">${['A', 'M', 'B', 'E', 'R', '', '']
        .map((cur, i) => '<div class=flip-box' + i + '>' + cur + '</div>')
        .join('')} </div>`
      temp.innerHTML = str
      this.appendDom(temp, father)
    }
  },
  addDog(father) {
    if (!__VUEPRESS_SSR__) {
      const dogWrap = document.createElement('div')
      const dog = `<div class="dog-wrap" >
      <div class="dog" >
        <div class="dog__paws" >
          <div class="dog__bl-leg leg" >
            <div class="dog__bl-paw paw" ></div>
            <div class="dog__bl-top dog-top" ></div>
          </div>
          <div class="dog__fl-leg leg" >
            <div class="dog__fl-paw paw" ></div>
            <div class="dog__fl-top dog-top" ></div>
          </div>
          <div class="dog__fr-leg leg" >
            <div class="dog__fr-paw paw" ></div>
            <div class="dog__fr-top dog-top" ></div>
          </div>
        </div>
        <div class="dog__body" >
          <div class="dog__tail" ></div>
        </div>
        <div class="dog__head" >
          <div class="dog__snout" >
            <div class="dog__nose" ></div>
            <div class="dog__eyes" >
              <div class="dog__eye-l" ></div>
              <div class="dog__eye-r" ></div>
            </div>
          </div>
        </div>
        <div class="dog__head-c" >
          <div class="dog__ear-l" ></div>
          <div class="dog__ear-r" ></div>
        </div>
      </div>
    </div>`
      dogWrap.innerHTML = dog
      this.appendDom(dogWrap, father)
    }
  },
  init() {
    // var linkzh = document.createElement('link')
    // linkzh.setAttribute('rel', 'stylesheet')
    // linkzh.setAttribute('href', 'https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.min.css')
    // document.head.appendChild(linkzh)
    this.addDog()
  },
}
