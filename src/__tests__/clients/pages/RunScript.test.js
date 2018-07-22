import RunScript from '../../../clients/pages/run-script/Index';
import Header from '../../../clients/components/Header';
import Footer from '../../../clients/components/Footer';
import { BodyContainer } from '../../../clients/styled/baseStyled.style';

describe('<Home />', () => {
  const shallowComponent = shallow(<RunScript />);

  test('Should be render Header', () => {
    expect(shallowComponent.find(Header).exists()).toBe(true);
  });

  test('Should be render Footer', () => {
    expect(shallowComponent.find(Footer).exists()).toBe(true);
  });

  test('Should be render list code pre', () => {
    expect(
      shallowComponent
        .find(BodyContainer)
        .find('pre')
        .find('code')
    ).toHaveLength(1);
  });
});
