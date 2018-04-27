<template>
  <div class="getInputFile">
    <div class="upload-list">
      <i class="iconfont icon-close"></i>
      <a type="file" class="add-btn"><p>获取录像</p> <input type="file" accept="video/*" capture="camcorder"></a></div> <div class="upload-list"><i class="iconfont icon-close"></i> <a type="file" class="add-btn"><p>获取照片</p> <input type="file" accept="image/*" capture="camera"></a></div></div>
</template>

<script>
export default {
  name: 'demo-filter',
  data() {
    return {}
  },
}
</script>
