import Home from '../../clients/pages/Home';
import Header from '../../clients/components/Header';
import Footer from '../../clients/components/Footer';

describe('<Home />', () => {
  const shallowComponent = shallow(<Home/>);

  test('Should be render Header', () => {
    expect(shallowComponent.find(Header).exists()).toBe(true);
  });

  test('Should be render Footer', () => {
    expect(shallowComponent.find(Footer).exists()).toBe(true);
  });
});