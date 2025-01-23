import {
  ExtendedSidemenuItemOptions,
  ISidemenuItemOptions,
  SidemenuItemOptions,
} from './sideitems.interface';

export interface ISidemenuItem extends ISidemenuItemOptions {
  icon: string;
  options?: Array<ISidemenuItemOptions>;
}

export class SidemenuItem implements ISidemenuItem {
  icon: string;
  options: SidemenuItemOptions[];
  text: string;
  url: string | undefined;
  isDisabled: boolean;

  get hasOptions(): boolean {
    return !!this.options && (this.options?.length ?? 0) > 0;
  }

  constructor(config?: ISidemenuItem) {
    this.icon = config?.icon ?? '';
    this.text = config?.text ?? '';
    this.url = config?.url;
    this.isDisabled = config?.isDisabled ?? false;
    this.options = [];

    if (config?.options) {
      config?.options.forEach((element) => {
        this.options.push(new SidemenuItemOptions(element));
      });
    }
  }
}

export class ExtendedSideMenuItem extends SidemenuItem {
  override options: ExtendedSidemenuItemOptions[];
  isSelected: boolean;
  constructor(config?: ISidemenuItem) {
    super(config);
    this.isSelected = false;

    this.options = [];

    if (config?.options) {
      config?.options.forEach((element) => {
        this.options.push(new ExtendedSidemenuItemOptions(element));
      });
    }
  }
}
