import { newSpecPage } from '@stencil/core/testing';
import { IslAmbulanceWlList } from '../isl-ambulance-wl-list';

describe('isl-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IslAmbulanceWlList],
      html: `<isl-ambulance-wl-list></isl-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <isl-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </isl-ambulance-wl-list>
    `);
  });
});
