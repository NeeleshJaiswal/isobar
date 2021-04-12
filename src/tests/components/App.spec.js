import { shallow } from "enzyme";
import App from "../../App";

describe('should have App component', () => {
    it('should render app component', () => {
        const wrapper = shallow(<App/>);

        expect(wrapper.type()).toBe('div');
    });
})
