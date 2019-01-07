<template>
  <div class="control clear">
    <div class="grade1" v-if="content.grade === 5"></div>
    <div class="grade2" v-if="content.grade === 4"></div>
    <div class="grade3" v-if="content.grade <= 3"></div>
    <div class="intro">

      <div class="time" v-if="source === 'live'">{{content.created_at | timestampFormate}}</div>
      <div class="time" v-else-if="source === 'tag'">{{content.created_at | decideFormatTime}}</div>

      <div :class="{'red': content.grade === 5 ? true : false}" class="content">
        <div class="extra-area" v-if="content.extra_type == 0">
          <a class="content-summary" :href="'/lives/' + content.id + '.htm'" target="_blank" v-if="isHasBracket === 1 && !isShowSummary" v-html="getFontColor(content.content.replace(this.toReplaceString, this.replaceString), keyword)"></a>
          <a class="content-summary" :href="'/lives/' + content.id + '.htm'" target="_blank" v-if="isHasBracket === 0 && !isShowSummary" v-html="getFontColor(content.content, keyword)"></a>
        </div>
        <div class="extra-area" v-else>
          <a class="livesb" :href="content.config.url" target="_blank">
            {{ content.config.title }}
          </a>
          <a class="content-summary"
            :href="content.config.url"
            v-if="content.extra.head_text"
            target="_blank">{{ content.extra.head_text }}</a>
          <p class="data-source" v-if="content.extra.bottom_text">{{content.extra.bottom_text}}</p>
          <a :href="content.config.url" target="_blank">
            <div class="content-box">
              <!-- <swiper class="extra-container" :options='swiperOption'>
                <swiperSlide v-for="(item, index) in content.extra.coins" :key="index" class="extra-slide">
                  <p class="coin-name">{{ item.name }}</p>
                  <p class="plate-name" v-if="item.plate_name"> {{item.plate_name}}</p>
                  <p class="coin-price">{{ item.price }}
                    <img class="increase"
                      src="../../../../static/img/up.png"
                      v-if="item.direction == 'up'"/>
                    <img class="increase"
                      src="../../../../static/img/down.png"
                      v-if="item.direction == 'down'"/>
                  </p>
                  <div class="coin-list">
                    <div class="list-item" v-for="(entries, key) in item.list" :key="key">
                      <p class="item-name">{{entries.name}}</p>
                      <p class="item-value up" v-if="entries.direction === 'up'">+{{entries.value}}%</p>
                      <p class="item-value down" v-else-if="entries.direction === 'down'">-{{entries.value}}%</p>
                      <p class="item-value" v-else>{{entries.value}}</p>
                    </div>
                  </div>
                </swiperSlide>
              </swiper> -->
            </div>
          </a>
        </div>

      </div>
      <div class="photo clear" v-if="content.images.length > 0 && !isShowSummary">
        <!--  :href="val.url" -->
        <a v-for="(val, ind) in content.images" :key="ind">
          <img class="previewer-demo-img" :src="val.thumbnail" :alt="val.url" width="100" @click="show(ind)">
          <!-- <div v-transfer-dom v-if="content.images.length > 0">
            <previewer :list="content.images" ref="preview" :options="options(ind)"></previewer>
          </div> -->
        </a>
      </div>
      <div class="read" v-if="content.readings.length > 0  && !isShowSummary">
        <a :href="read.topic_url" v-for="read in content.readings">
          <i>解读：</i>
          <div class="read-con">{{read.title}}</div>
        </a>
      </div>
      <div class="font12 clear resource" v-show="isShowOperation">
        <ul>
          <a :href="content.link" v-if="content.link && content.link_name" target="_blank">{{content.link_name}}</a>
        </ul>
        <span class="share" @click="showSharePop(content)">
          <a href="javascript:;">
            <img src="../../../../static/img/share.svg"> 分享
          </a>
        </span>
        <ol>
          <a href="javascript:;" @touchstart="disLike(content)" :class="content.up_counts < content.down_counts?'fall-h':'fall'" class="like">
            <label>利空 {{content.down_counts}}</label>
            <!-- <label class="text">利空 {{content.down_counts}}</label> -->
          </a>
          <i class="addition green" v-show="content.liKongJiaShow">{{showReduNum}}</i>
        </ol>
        <ol>
          <a href="javascript:;" @touchstart="like(content)" :class="content.up_counts > content.down_counts?'rose-h':'rose'" class="like">
            <label>利好 {{content.up_counts}}</label>
            <!-- <label class="text">利好 {{content.up_counts}}</label> -->
          </a>
          <i class="addition red" v-show="content.liHaoJiaShow">{{showNum}}</i>
        </ol>
      </div>
    </div>

    <!-- <component-share-img v-if="isShowSharePop" ref="shareBox" @hideShare="hideSharePop"></component-share-img> -->
  </div>
</template>

<script>
// import Share from '@/components/basic/ShareImg'
// import liveDetailApi from '@/http/api/v4/liveDetail'
// import { Previewer, TransferDom } from 'vux'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'

export default {
  name: 'LiveSingle',
  data () {
    return {
      // 分享显示定时器
      shareTimeOut: '',
      isShowOperation: true,
      showNum: '',
      showReduNum: '',
      isHasBracket: 0,
      toReplaceString: '',
      replaceString: '',
      // imgList: [],
      isShowSharePop: true,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 5
      }
    }
  },
  props: {
    content: null,
    operation: null,
    keyword: null,
    source: {
      type: String,
      default: 'live'
    },
    isShowSummary: null
  },
  watch: {
    content (newData) {
      let regexp = new RegExp(/【(.+)?】/)
      if (newData) {
        this.content.content = newData.content
        this.isHasBracket = regexp.test(this.content.content) ? 1 : 0
        if (this.isHasBracket > 0) {
          this.toReplaceString = this.content.content.match(/【(.+)?】/)[0]
          this.replaceString = ''
        }
      }
    }
  },
  components: {
    // Previewer,
    // 'component-share-img': Share,
    // swiper,
    // swiperSlide
  },
  // directives: {
  //   TransferDom
  // },
  methods: {
    show (ind) {
      this.$refs.preview[ind].show(ind)
    },
    options (ind) {
      let that = this
      return {
        getThumbBoundsFn (ind) {
          // find thumbnail element
          let thumbnail = that.$el.querySelectorAll('.previewer-demo-img')[ind]
          // get window scroll Y
          let pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect()
          // w = width
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    },
    // 显示分享图片预览
    showSharePop (live) {
      this.isShowSharePop = true
      let shareData = {
        title: this.content.content.match(/【(.+)?】/)
          ? this.content.content.match(/【(.+)?】/)[1]
          : '',
        date: ` ${this.$options.filters['timeGetYearMonthDate'](
          this.content.created_at
        )} ${this.$options.filters['timestampFormate'](
          this.content.created_at
        )}`,
        content: this.content.content.replace(
          this.toReplaceString,
          this.replaceString
        ),
        img: this.content.images,
        grade: this.content.grade,
        down_counts: this.content.down_counts,
        up_counts: this.content.up_counts,
        extra_type: this.content.extra_type,
        extra: this.content.extra
      }
      this.$nextTick(() => {
        this.$refs.shareBox.convert2canvas(shareData)
      })
    },
    // 隐藏分享
    hideSharePop () {
      this.isShowSharePop = false
    },
    shareBtnLeave (live) {
      this.shareTimeOut = setTimeout(() => {
        live.isShowSharePop = false
      }, 200)
    },
    shareEnter (live) {
      window.clearTimeout(this.shareTimeOut)
    },
    // like (item) {
    //   let that = this
    //   liveDetailApi
    //     .like({
    //       id: item.id,
    //       type: 'up'
    //     })
    //     .then(res => {
    //       item.zan_status = res.zan_status
    //       item.up_counts = res.up_counts
    //       item.down_counts = res.down_counts
    //       if (item.zan_status === 'up') {
    //         that.showNum = '+1'
    //         item.liHaoJiaShow = true
    //         setTimeout(() => {
    //           item.liHaoJiaShow = false
    //         }, 1000)
    //       } else {
    //         that.showNum = '-1'
    //         item.liHaoJiaShow = true
    //         setTimeout(() => {
    //           item.liHaoJiaShow = false
    //         }, 1000)
    //       }
    //     })
    // },
    // disLike (item) {
    //   liveDetailApi
    //     .like({
    //       id: item.id,
    //       type: 'down'
    //     })
    //     .then(res => {
    //       item.zan_status = res.zan_status
    //       item.up_counts = res.up_counts
    //       item.down_counts = res.down_counts
    //       if (item.zan_status === 'down') {
    //         this.showReduNum = '+1'
    //         item.liKongJiaShow = true
    //         setTimeout(() => {
    //           item.liKongJiaShow = false
    //         }, 1000)
    //       } else {
    //         this.showReduNum = '-1'
    //         item.liKongJiaShow = true
    //         setTimeout(() => {
    //           item.liKongJiaShow = false
    //         }, 1000)
    //       }
    //     })
    // },
    // 返回包装关键字value
    getFontColor (value, keyword) {
      if (!keyword) {
        return value
      }
      let rebuildKeyword = value.replace(
        keyword,
        '<i style="color:#F29700">' + keyword + '</i>'
      )
      return rebuildKeyword
    }
  },
  mounted () {
    // do
  },
  created () {
    // let that = this
    let regexp = new RegExp(/【(.+)?】/)
    this.isHasBracket = regexp.test(this.content.content) ? 1 : 0
    if (this.isHasBracket > 0) {
      this.toReplaceString = this.content.content.match(/【(.+)?】/)[0]
      this.replaceString = ''
    }
    if (this.operation === 'false') {
      this.isShowOperation = false
    }
  }
}
</script>

<style lang=scss scoped>
/*属性*/
.js-lives .main .control span{
  margin: 6px 15px 0 0;
}
.attributes{
  width: 2.3rem;
  height: 1.15rem;
  line-height: 1.15rem;
  color: #fff;
  font-weight: 600;
  text-align: center;
  display: inline-block;
  float: left!important;
  /* margin-left:25px; */
  margin-right: 6px;
  font-size: 0.9rem;
  margin-top:0.158rem;
  padding-top:0.064rem;
}
.gradOne{
  background: #c4192d;
}
.gradTwo{
  background: #F29700;
}
.gradThree{
  background: #999;
}
.content-summary {
  font-size: .96rem /* 15/15.625 */;
  font-family: PingFangSC-Regular;
  color: #9999A6;
}
.data-source {
  font-size:.704rem /* 11/15.625 */;
  font-family:PingFangSC-Regular;
  color: #9999A6;
}
.content-box {
  width: 101%;
  padding: 0.192rem /* 3/15.625 */;
  overflow: hidden;
  margin-top: .64rem /* 10/15.625 */;
  .extra-container {
    width: 100%px;
    overflow: visible;
    .extra-slide {
      width: 8.32rem /* 130/15.625 */ !important;
      padding: 1.024rem /* 16/15.625 */ 0.64rem /* 10/15.625 */;
      box-shadow: 0 .064rem /* 1/15.625 */ .96rem /* 15/15.625 */ 0px
        rgba(27, 27, 78, 0.08);
      border-radius: 0.32rem /* 5/15.625 */;
      margin-bottom: .192rem /* 3/15.625 */;
      margin-top: 3px;
      margin-left: .32rem /* 5/15.625 */;
      .coin-name {
        font-size: 0.96rem /* 15/15.625 */;
        font-family: PingFangSC-Regular;
        line-height: 1.152rem /* 18/15.625 */;
        color: #9999a6;
      }
      .plate-name {
        font-size:13px;
        font-family:PingFangSC-Regular;
        color: #9999A6;
        width:78px;
        height:21px;
        background:rgba(248,248,248,1);
        border-radius:1.28rem /* 20/15.625 */;
        text-align: center;
        line-height: 21px;
        margin-top: .576rem /* 9/15.625 */;
      }
      .coin-price {
        line-height: 1.088rem /* 17/15.625 */;
        font-size: 1.088rem /* 17/15.625 */;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: #29293b;
        margin-top: 0.704rem /* 11/15.625 */;
        .increase {
          float: right;
          width: .704rem /* 11/15.625 */;
          height: .832rem /* 13/15.625 */;
          margin-top: .192rem /* 3/15.625 */;
        }
      }
      .coin-list {
        margin-top: 1.28rem /* 20/15.625 */;
        .list-item {
          margin-top: 0.704rem /* 11/15.625 */;
          p.item-name {
            line-height: 0.704rem /* 11/15.625 */;
            font-size: 0.704rem /* 11/15.625 */;
            font-family: PingFangSC-Regular;
            color: #9999a6;
          }
          p.item-value {
            line-height: 0.96rem /* 15/15.625 */;
            font-size: 0.96rem /* 15/15.625 */;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            margin-top: 0.448rem /* 7/15.625 */;
          }
          p.item-value.up {
            color: #e0051e;
          }
          p.item-value.down {
            color: #219401;
          }
        }
      }
    }
  }
}
.js-lives .main .control ol+ol {
  margin-right: 0;
}
</style>
