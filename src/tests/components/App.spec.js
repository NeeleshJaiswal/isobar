import { shallow } from "enzyme";
import App from "../../App";

it('should render app component', () => {
    const wrapper = shallow(<App/>);

    expect(wrapper.type()).toBe('div');
});