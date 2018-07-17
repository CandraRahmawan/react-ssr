import ContactUs from '../../clients/pages/ContactUs';
import Header from '../../clients/components/Header';
import Footer from '../../clients/components/Footer';

describe('<Home />', () => {
  const shallowComponent = shallow(<ContactUs />);

  test('Should be render Header', () => {
    expect(shallowComponent.find(Header).exists()).toBe(true);
  });

  test('Should be render Footer', () => {
    expect(shallowComponent.find(Footer).exists()).toBe(true);
  });
});
