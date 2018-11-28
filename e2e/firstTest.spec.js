describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have test Element on screen', async () => {
    await expect(element(by.id('testElementID'))).toBeVisible();
  });
})