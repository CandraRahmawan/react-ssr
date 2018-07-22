import Header from '../../../clients/components/Header';
import { Link } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';

describe('<Header />', () => {
  test('Should be render matchToSnapshoot', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should be render 3 link item', () => {
    const shallowComponent = shallow(<Header />);
    expect(shallowComponent.find(Link)).toHaveLength(3);
  });
});
