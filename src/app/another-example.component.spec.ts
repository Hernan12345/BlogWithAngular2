import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AnotherExampleAppComponent } from '../app/another-example.component';

beforeEachProviders(() => [AnotherExampleAppComponent]);

describe('App: AnotherExample', () => {
  it('should create the app',
      inject([AnotherExampleAppComponent], (app: AnotherExampleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'another-example works!\'',
      inject([AnotherExampleAppComponent], (app: AnotherExampleAppComponent) => {
    expect(app.title).toEqual('another-example works!');
  }));
});
