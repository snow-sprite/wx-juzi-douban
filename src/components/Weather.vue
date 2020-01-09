<template>
  <div class="weather-box">
    <div class="weather-left">
      <img src="../../static/img/weather/qingtian.svg" v-show="weatherIcon === 'qing'">
      <img src="../../static/img/weather/yintian.svg" v-show="weatherIcon === 'ying'">
      <img src="../../static/img/weather/shuiwutian.svg" v-show="weatherIcon === 'wu'">
      <img src="../../static/img/weather/yutian.svg" v-show="weatherIcon === 'rain'">
      <img src="../../static/img/weather/xuetian.svg" v-show="weatherIcon === 'snow'">
      <img src="../../static/img/weather/cloud.svg" v-show="weatherIcon === 'cloud'">
      <img src="../../static/img/weather/unknow.svg" v-show="weatherIcon === 'unknow'">
    </div>
    <div class="weather-right">
      <div class="weather-address">
        <img src="../../static/img/weather/address.svg">
        <span :class="{'night-text' : isNightMode}">{{ weatherInfo.address }}</span>
      </div>
      <div class="weather-temp-box" :class="{'night-text' : isNightMode}">
        <span class="weather-temp">{{ weatherInfo.temp }}</span>
        <span class="weather-content">{{ weatherInfo.weather }}</span>
      </div>
      <div class="weather-detail-box" :class="{'night-text' : isNightMode}">
        <span style="margin-right: 10px;">{{weatherInfo.windDirection}}风{{ weatherInfo.windPower }}</span>
        <span>湿度{{ weatherInfo.humidity }}</span>
      </div>
      <!-- <div>你若安好便是晴天～</div> -->
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'Weather',
  props: {
    weatherInfo: {
      type: Object,
      default: {},
      required: true
    }
  },
  computed: {
    isNightMode: _ => store.getters.isNightMode // 夜间模式
  },
  data () {
    return {
      weatherIcon: ''
    }
  },
  created () {
    this.getWeatherIcon(this.weatherInfo.weather)
  },
  methods: {
    getWeatherIcon (weather) {
      if (weather.indexOf('晴') > -1) {
        this.weatherIcon = 'qing'
      } else if (weather.indexOf('阴') > -1) {
        this.weatherIcon = 'ying'
      } else if (weather.indexOf('雾') > -1) {
        this.weatherIcon = 'wu'
      } else if (weather.indexOf('雪') > -1) {
        this.weatherIcon = 'snow'
      } else if (weather.indexOf('雨') > -1) {
        this.weatherIcon = 'rain'
      } else if (weather.indexOf('云') > -1) {
        this.weatherIcon = 'cloud'
      } else {
        this.weatherIcon = 'unknow'
      }
    }
  }
}
</script>

<style lang=scss scoped>
@import '../assets/mixins';
.weather-box {
  width: 100%;
  font-size: r(12px);
  text-align: left;
  display: flex;
  .weather-left {
    width: 50%;
    height: 100px;
    box-sizing: border-box;
    padding-left: r(30px);
    img {
      width: 80%;
      height: 100%;
    }
  }
  .weather-right {
    width: 50%;
  }
  .weather-address {
    font-size: r(10px);
    span {
      display: inline-block;
      vertical-align: middle;
      color: #666;
    }
    img {
      width: r(12px);
      height: r(12px);
      vertical-align: middle;
      margin-right: r(3px);
    }
  }
  .weather-temp-box {
    .weather-temp {
      font-size: r(32px);
      margin-right: r(10px);
    }
  }
  .weather-detail-box {
    display: flex;
    color: #666;
  }
}
/* dark theme */
.night-text {
  color: #666 !important;
}
</style>