<template>
    <div class="roll-page">
      <slot></slot>
    </div>
</template>
<script>

  export default {
    name: 'rollPage',
    props: {
      className: {
        type: String,
        default: 'move'
      },
      delayDis: {
        type: Number,
        default: 300
      }
    },
    data() {
      return {
        a: '',
        b: '',
        c: '',
      }
    },
    mounted() {
      this.dom()
    },
    methods: {
      dom() {
        this.scroll()
      },
      scroll() {
        let self = this;
        document.addEventListener("scroll",  function() {
          this.a = window.screen.height;
          this.b = document.documentElement.scrollTop || document.body.scrollTop;
         let eleList = document.getElementsByClassName('roll-item');
          for (let i = 0; i < eleList.length; i++) {
            this.c = eleList[i].offsetTop;
             if(this.a + this.b > this.c + +self.delayDis) {
                 self.removeClass(eleList[i]);
                 self.addClass(eleList[i])
             }else {
               self.removeClass(eleList[i])
             }
          }
        })
      },
      addClass(self) {
        let classVal = self.getAttribute("class");
        classVal = classVal.concat(" move");
        self.setAttribute("class", classVal)
      },
      removeClass(self) {
        let classVal = self.getAttribute("class");
        classVal = classVal.replace(" move", '');
        self.setAttribute("class", classVal)
      }
    }
  }
</script>

<style>
  @import "index.css";
</style>
