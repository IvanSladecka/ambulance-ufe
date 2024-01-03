import { newSpecPage } from '@stencil/core/testing';
import { IslAmbulanceWlApp } from '../isl-ambulance-wl-app';

describe('isl-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [IslAmbulanceWlApp],
      html: `<isl-ambulance-wl-app base-path="/"></isl-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("isl-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [IslAmbulanceWlApp],
      html: `<isl-ambulance-wl-app base-path="/ambulance-wl/"></isl-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("isl-ambulance-wl-list");
  });
});