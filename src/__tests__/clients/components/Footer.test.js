import Footer from '../../../clients/components/Footer';

describe('<Footer />', () => {
  test('Should be render matchToSnapshoot', () => {
    const component = renderer.create(<Footer />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
