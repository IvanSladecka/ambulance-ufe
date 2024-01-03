import { newE2EPage } from '@stencil/core/testing';

describe('isl-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<isl-ambulance-wl-app></isl-ambulance-wl-app>');

    const element = await page.find('isl-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
