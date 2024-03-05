import { newE2EPage } from '@stencil/core/testing';

describe('xskriba-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xskriba-ambulance-wl-editor></xskriba-ambulance-wl-editor>');

    const element = await page.find('xskriba-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
