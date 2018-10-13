import { LoterieModule } from './loterie.module';

describe('LoterieModule', () => {
  let loterieModule: LoterieModule;

  beforeEach(() => {
    loterieModule = new LoterieModule();
  });

  it('should create an instance', () => {
    expect(loterieModule).toBeTruthy();
  });
});
