import { MemoryRouter } from 'react-router-dom';
import Route from '../../routes/route';
import Guide from '../../clients/pages/guide';
import RunScript from '../../clients/pages/run-script';
import Home from '../../clients/pages/Home';

describe('<Route />', () => {
  const wrapper = path =>
    mount(
      <MemoryRouter initialEntries={[path]}>
        <Route />
      </MemoryRouter>
    );
  test('Should be correct path /guide', () => {
    expect(wrapper('/guide').find(Guide)).toHaveLength(1);
  });

  test('Should be correct path /home', () => {
    expect(wrapper('/').find(Home)).toHaveLength(1);
  });

  test('Should be correct path /run-script', () => {
    expect(wrapper('/run-script').find(RunScript)).toHaveLength(1);
  });
});
