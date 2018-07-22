import renderSyntakHighlight from '../../../clients/helpers/renderSyntakHighlight';

describe('Helper renderSyntakHighlight', () => {
  test('Should be render correct match snapshoot', () => {
    const component = renderer.create(renderSyntakHighlight('test'));
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Should be equal render content', () => {
    const component = shallow(renderSyntakHighlight('var a = 1;'));
    expect(component.html()).toEqual(
      '<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span></code></pre>'
    );
  });
});
