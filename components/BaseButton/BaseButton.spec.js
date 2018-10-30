import { mount, shallowMount } from '@vue/test-utils';
import BaseButton from './BaseButton.vue';

describe('BaseButton', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BaseButton);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  it('renders', () => {
    const text = 'Base Button';
    const wrapper = shallowMount(BaseButton, {
      propsData: { text },
    });
    expect(wrapper.text()).toMatch(text);
  });
});
