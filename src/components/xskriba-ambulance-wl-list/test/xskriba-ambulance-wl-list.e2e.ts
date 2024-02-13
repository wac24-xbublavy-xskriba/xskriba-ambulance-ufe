import { newE2EPage } from '@stencil/core/testing';

describe('xskriba-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xskriba-ambulance-wl-list></xskriba-ambulance-wl-list>');

    const element = await page.find('xskriba-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
