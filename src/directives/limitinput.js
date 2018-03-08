const reg = /^(\d{1,5}((\.[\d]{0,2})?)|(\.))[\d\D]*$/

function handleIpt(e) {
  const { value } = e.target
  if (value) {
    e.target.value = value.replace(reg, '$1')
  }
}

function handleKeydown(e) {
  const {
    keyCode,
    target: { value },
  } = e
  const keyCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 8, 37, 39, 190]
  if (value && value.indexOf('.') > -1 && keyCode === 190) { // 防止输入 17.22.2这种两个点的情况，虽然不能处理17..这种，但是可以防止12.3.2
    e.preventDefault && e.preventDefault()
  } else if (keyCodes.indexOf(keyCode) < 0) {
    e.preventDefault && e.preventDefault()
  }
}

export default {
  bind(el, binding) {
    el.addEventListener('input', handleIpt, false)
    el.addEventListener('keydown', handleKeydown, false)
  },
  unbind(el, binding) {
    el.removeEventListener('input', handleIpt)
    el.removeEventListener('keydown', handleKeydown)
  },
}
