// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

// Components
import Test1 from '@/components/Tests/Test1.vue'

// Utilities
import { createLocalVue, mount } from '@vue/test-utils'

Vue.use(Vuetify)

describe('Test1.vue', () => {
  const localVue = createLocalVue()
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it("shouldn't format message if name is empty", async () => {
    const wrapper = mount(Test1, {
      localVue,
      vuetify,
    })

    const button = wrapper.find('.v-btn')
    expect(button.classes()).toContain('v-btn--disabled')
  })

  it('should format message on button click', async () => {
    const wrapper = mount(Test1, {
      localVue,
      vuetify,
    })
    await wrapper.setData({
      name: 'GTRSuite',
    })

    const button = wrapper.find('.v-btn')
    button.trigger('click')
    expect(wrapper.vm.message).toBe('Bonjour GTRSuite')
  })

  it('should show message on button click', async () => {
    const wrapper = mount(Test1, {
      localVue,
      vuetify,
    })
    await wrapper.setData({
      name: 'GTRSuite',
    })

    const button = wrapper.find('.v-btn')
    await button.trigger('click')
    const p = wrapper.find('p')
    expect(p.text()).toBe('Bonjour GTRSuite')
  })
})
