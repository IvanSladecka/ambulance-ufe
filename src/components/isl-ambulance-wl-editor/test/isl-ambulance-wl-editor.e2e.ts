import { newE2EPage } from '@stencil/core/testing';

describe('isl-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<isl-ambulance-wl-editor></isl-ambulance-wl-editor>');

    const element = await page.find('isl-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
