import { gsap } from 'gsap'
import { Observer } from 'gsap/Observer'

export default function (height) {
  gsap.registerPlugin(Observer)

  const state = ref(false)

  onMounted(() => {
    if (process.client) {
      Observer.create({
        target: window,
        type: 'scroll',
        onChangeY(e) {
          state.value = e.scrollY() > height
        },
      })
    }
  })
  return {
    state,
  }
}
