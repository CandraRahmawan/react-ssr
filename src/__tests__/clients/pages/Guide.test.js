import Guide from '../../../clients/pages/guide/Index';
import Header from '../../../clients/components/Header';
import Footer from '../../../clients/components/Footer';
import { BodyContainer } from '../../../clients/styled/baseStyled.style';

describe('<Guide />', () => {
  const shallowComponent = shallow(<Guide />);

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
    ).toHaveLength(9);
  });
});
