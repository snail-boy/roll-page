<template>
    <roll-page 
    :delayDis="600"
    >
      <div class="roll-page-con">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
      <ul class="roll-page-list">
        <li class="roll-item">
          <div class="flex-sb">
            <div class="ro-from-left">left</div>
            <div class="ro-from-right">right</div>
          </div>
        </li>
        <li class="roll-item">
          <div class="flex-sb">
            <div class="ro-scale">放大</div>
            <div class="ro-opacity">opacity</div>            
          </div>
        </li>
      </ul>
    </roll-page>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {

  },
}
</script>

<style scoped>
  .flex-sb {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .flex-sb div:nth-child(1) {
    width: 200px;
    height: 200px;
    background: antiquewhite;
  }
  .flex-sb div:nth-child(2) {
    width: 200px;
    height: 200px;
    background: aqua;
  }


  .roll-page-con {
    height: 2000px;
  }
  .roll-page-list {
    list-style: none;
    padding: 0;
    margin: 0;
    border-top: 2px solid blue;
  }
  .roll-page-list li {
    width: 100%;
    height: 800px;
    border-bottom: 1px solid green;
  }
















</style>
