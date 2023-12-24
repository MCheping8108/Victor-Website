<script>
export default {
      data() {
            return {
                  text: "维克多网站使用了VUE架构中的vue-router",
                  text2: "我们是一家诸如军工级硬件的科技供应商，同时负责研究一部分应用物理和理论物理。",
                  text3: "公元1000年左右，阿卡迪亚人开始从东南亚迁徙至澳大利亚大陆，逐渐形成了分散的部落社会。15世纪，阿卡迪亚人部落之间相互交流和融合，逐渐形成联合和同盟，阿卡迪亚帝国由此产生。阿卡迪亚帝国是一个由多部落和地区组成的联邦制国家。每个部落都可以保持一定程度的自治，但在某些事情上，各部落可以为了维护整个帝国的利益而共同行动。由于澳大利亚的土地、气候和资源非常多样化，因此不同部落之间也可能存在差异，例如语言、信仰等方面的差异。因此，帝国可能需要具有一定的文化包容性和多元性。16世纪，阿卡迪亚帝国在战争和贸易中不断扩张，成为澳大利亚大陆上最强大的政治力量之一。同时，阿卡迪亚文化和艺术也开始繁荣发展。17世纪初期，欧洲探险家到达澳大利亚，但由于阿卡迪亚联盟的强大势力和先进军事技术，欧洲人无法在澳大利亚建立殖民地。18世纪，随着欧洲殖民者的人数和技术的增加，阿卡迪亚联盟逐渐失去优势。他们与欧洲人爆发了一系列战争，并最终被殖民者打败。19世纪，阿卡迪亚联盟被彻底摧毁，殖民者建立了自己的政治和经济体系。然而，阿卡迪亚文化和艺术仍然保留了下来，并成为了澳大利亚多元文化的一部分。阿卡迪亚帝国的巫师克莱瑟（Kleiser）创建了一套预言系统 “克莱瑟之签”（Kleiser's Signs），该系统由七十二种不同的签组成，每个签代表着不同的意义和象征。通过组合这些签，他可以预测澳大利亚大陆未来将会发生的事件。其中，有一个特别的预言引起人们的注意，即关于天选之子的预言。根据该预言，澳大利亚大陆将会诞生一个被神灵选中的人（瓦兰巴，Walanbaa），他将会领导阿卡迪亚帝国并带来一个新的时代。当地的神话认为，这个天选之子将会拥有强大的力量和智慧，并能够凭借自己的勇气和领导能力，推动阿卡迪亚帝国的发展。这个预言给了阿卡迪亚人希望和信仰，许多人开始寻找天选之子，准备迎接他的到来。",
            }
      }
}

</script>

<template>
      <div class="introduce">
            <div class="title-text">
                  <img src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4" alt=""
                        style="width: 100%; height: 500">
                  <h1>VUE 3.0 !!!</h1>
            </div>
            <p class="introduce-text">{{ text }}</p>
      </div>

      <div class="introduce">
            <div class="title-text">
                  <h1>我们是谁？</h1>
            </div>
            <p class="introduce-text">
                  {{ text2 }}
            </p>
      </div>

      <div class="introduce">
            <div class="title-text">
                  <h1>为什么创建这样的科技公司？</h1>
            </div>
            <p class="introduce-text">
                  {{ text3 }}
            </p>
      </div>

      <div class="introduce">
            <img src="../assets/images/why.jpg" alt="">
      </div>
</template>

<style scoped>
@media screen and (min-width: 768px) {
      .introduce .title-text img {
            width: 100%;
            /* height: 500px; */
      }
}
</style>