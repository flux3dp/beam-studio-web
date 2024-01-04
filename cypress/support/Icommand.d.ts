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
      setUpBackend: (ip: string) => Chainable<void>;
      connectMachine: (ip: string) => Chainable<void>;
    }
  }
}

export {};
