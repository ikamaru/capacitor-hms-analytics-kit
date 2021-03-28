import { WebPlugin } from '@capacitor/core';
import { AnalyticsKitPlugin } from './definitions';

export class AnalyticsKitWeb extends WebPlugin implements AnalyticsKitPlugin {
  constructor() {
    super({
      name: 'AnalyticsKit',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const AnalyticsKit = new AnalyticsKitWeb();

export { AnalyticsKit };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AnalyticsKit);
