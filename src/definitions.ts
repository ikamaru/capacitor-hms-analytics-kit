declare module '@capacitor/core' {
  interface PluginRegistry {
    AnalyticsKit: AnalyticsKitPlugin;
  }
}

export interface AnalyticsKitPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
