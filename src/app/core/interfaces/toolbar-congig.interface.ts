export interface IToolbarConfig {
  showMenuIcon?: boolean;
  showExitButton?: boolean;
  showUserInfo?: boolean;
  showThemeSwitch?: boolean;
  title: string;
  exitButtonClicked?: () => void;
}

export class ToolbarConfig implements IToolbarConfig {
  showMenuIcon: boolean;
  showExitButton: boolean;
  showUserInfo: boolean;
  showThemeSwitch: boolean;
  title: string;
  exitButtonClicked: () => void = () => {
    ('');
  };

  constructor(config?: IToolbarConfig) {
    this.showMenuIcon = config?.showMenuIcon ?? true;
    this.showExitButton = config?.showExitButton ?? true;
    this.showUserInfo = config?.showUserInfo ?? true;
    this.showThemeSwitch = config?.showThemeSwitch ?? true;
    this.title = config?.title ?? '';

    if (config?.exitButtonClicked)
      this.exitButtonClicked = config?.exitButtonClicked;
  }
}
