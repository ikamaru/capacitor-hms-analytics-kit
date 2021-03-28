import { WebPlugin } from '@capacitor/core';
import { AnalyticsKitPlugin } from './definitions';

export class AnalyticsKitWeb extends WebPlugin implements AnalyticsKitPlugin {
  constructor() {
    super({
      name: 'AnalyticsKit',
      platforms: ['web'],
    });
  }

}

const AnalyticsKit = new AnalyticsKitWeb();

export { AnalyticsKit };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AnalyticsKit);
