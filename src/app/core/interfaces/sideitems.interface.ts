export interface ISidemenuItemOptions {
  text: string;
  url?: string;
  isDisabled?: boolean;
}

export class SidemenuItemOptions implements ISidemenuItemOptions {
  text: string;
  url: string | undefined;
  isDisabled?: boolean;

  constructor(config?: ISidemenuItemOptions) {
    this.text = config?.text ?? '';
    this.url = config?.url;
    this.isDisabled = config?.isDisabled ?? false;
  }
}

export class ExtendedSidemenuItemOptions extends SidemenuItemOptions {
  isSelected: boolean;
  constructor(config?: ISidemenuItemOptions) {
    super(config);

    this.isSelected = false;
  }
}
