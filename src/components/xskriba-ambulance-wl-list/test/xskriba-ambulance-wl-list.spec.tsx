import { newSpecPage } from '@stencil/core/testing';
import { XskribaAmbulanceWlList } from '../xskriba-ambulance-wl-list';

describe('xskriba-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [XskribaAmbulanceWlList],
      html: `<xskriba-ambulance-wl-list></xskriba-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <xskriba-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </xskriba-ambulance-wl-list>
    `);
  });
});
