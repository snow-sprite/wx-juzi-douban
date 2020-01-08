<template>
  <div class="weatherLoading-box">
    <div class="weatherLoading-left">
      <p></p>
    </div>
    <div class="weatherLoading-right">
      <div class="weatherLoading-address"></div>
      <div class="weatherLoading-temp-box">
        <span class="weatherLoading-temp"></span>
      </div>
      <div class="weatherLoading-detail-box"></div>
    </div>
  </div>
</template>

<style lang=scss scoped>
@import '../assets/mixins';
.weatherLoading-box {
  width: 100%;
  display: flex;
  .weatherLoading-left {
    width: 50%;
    height: 100px;
    box-sizing: border-box;
    padding-left: r(30px);
    p {
      width: 80%;
      height: 100%;
      background: #f5f5f5;
    }
  }
  .weatherLoading-right {
    width: 50%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .weatherLoading-address {
    height: r(10px);
    width: r(60px);
    background: #f5f5f5;
  }
  .weatherLoading-temp-box {
    .weatherLoading-temp {
      display: inline-block;
      background: #f5f5f5;
      width: r(32px);
      height: r(32px);
      margin-right: r(10px);
    }
  }
  .weatherLoading-detail-box {
    background: #f5f5f5;
    width: r(100px);
    height: r(14px);
  }
}
</style>