import { newSpecPage } from '@stencil/core/testing';
import { IslAmbulanceWlList } from '../isl-ambulance-wl-list';

describe('isl-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IslAmbulanceWlList],
      html: `<isl-ambulance-wl-list></isl-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as IslAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length
    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
