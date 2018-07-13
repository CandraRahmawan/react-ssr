import TemplateHtml from '../clients/TemplateHtml';

test('test component', () => {
  const component = renderer.create(
    <TemplateHtml entry="testing bro...."/>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});