import { mount } from 'vue-test-utils';
import Home from '@/pages/Home';

describe('Home.vue', () => {
	it('should render correct message', () => {
		const wrapper = mount(Home);
		expect(wrapper.html()).toContain('Hola mundo');
	})
});
