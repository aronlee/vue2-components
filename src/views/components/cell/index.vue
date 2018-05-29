<template>
  <div class="mod-cell-comp flex-row">
    <div v-if="$slots.title" class="cell-title"><slot name="title"></slot></div>
    <slot></slot>
    <i v-if="isLink" class="cell-link iconfont" :class="linkIcon"></i>
  </div>
</template>

<script>
export default {
  props: {
    isLink: {
      type: Boolean,
    },
    linkIcon: {
      type: String,
      default: () => 'if-rightarrow',
    },
  },
}
</script>

<style lang="scss">
.mod-cell-comp {
  $borderColor: #e6e6e6;
  background-color: #fff;
  padding-left: 16px;
  line-height: 48px;
  font-size: 16px;
  position: relative;

  // 非首项上边框
  + .mod-cell-comp {
    background-image: linear-gradient(to right, $borderColor, $borderColor);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-origin: content-box;
  }

  .cell-title {
    min-width: 76px;
  }

  .cell-link {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    padding-right: 16px;
    color: #bdbdbd;
  }

  .cell-left {
    flex: 1;
    display: flex;
    flex-direction: row;
    min-width: 156px;
  }

  .cell-right {
    flex: 1;
    display: flex;
    flex-direction: row;
    background-image: linear-gradient(
      to bottom,
      transparent,
      transparent 12px,
      #e6e6e6 12px,
      #e6e6e6 36px,
      transparent 36px,
      transparent
    );
    background-size: 1px 100%;
    background-position: 24px 0;
    background-repeat: no-repeat;
    padding-left: 48px;
  }

  .cell-input {
    flex: 1;
    line-height: 40px;
    height: 40px;
    padding: 0;
    display: inline-block;
    font-size: 16px;
    align-self: center;
    border: none;
    outline: none;
    min-width: 10px;
    &::placeholder {
      color: #bdbdbd;
      opacity: 1;
      font-size: 16px;
    }
    &:disabled {
      opacity: 1;
      background-color: #fff;
    }
  }

  .cell-placeholder {
    color: #bdbdbd;
  }
}
</style>
