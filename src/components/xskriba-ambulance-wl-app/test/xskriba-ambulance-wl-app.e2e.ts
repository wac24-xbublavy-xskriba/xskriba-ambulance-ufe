import { newE2EPage } from '@stencil/core/testing';

describe('xskriba-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<xskriba-ambulance-wl-app></xskriba-ambulance-wl-app>');

    const element = await page.find('xskriba-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
