declare global {
  namespace Cypress {
    interface Chainable {
      landingEditor(): Chainable<void>;
      loginAndLandingEditor(): Chainable<void>;
      uploadFile(
        fileName: string,
        fileType: string
      ): Chainable<JQuery<HTMLElement>>;
      dragTo(targetEl: string): Chainable<JQuery<HTMLElement>>;
      disableImageDownSampling(): Chainable<void>;
    }
  }
}

export {};
