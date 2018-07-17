import TemplateHtml from '../clients/TemplateHtml';

describe('<TemplateHtml />', () => {
  const shallowComponent = shallow(<TemplateHtml />);

  test('Should be correct match snapshot', () => {
    const component = renderer.create(
      <TemplateHtml entry="test content..." styletags="styletags..." />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should be correct structure html', () => {
    expect(shallowComponent.find('html').exists()).toBe(true);
    expect(shallowComponent.find('body').exists()).toBe(true);
    expect(shallowComponent.find('head').exists()).toBe(true);
  });

  test('Should be render element with id app', () => {
    expect(shallowComponent.find('#app')).toHaveLength(1);
  });

  test('Should be render assets js & style', () => {
    expect(shallowComponent.find('#styled-components')).toHaveLength(1);
    expect(shallowComponent.find('#script-assets')).toHaveLength(1);
  });
});
