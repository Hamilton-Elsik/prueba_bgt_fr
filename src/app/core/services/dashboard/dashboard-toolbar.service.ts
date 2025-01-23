import { Injectable } from '@angular/core';
import {
  IToolbarConfig,
  ToolbarConfig,
} from '../../interfaces/toolbar-congig.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardToolbarService {
  private _configuration: ToolbarConfig;
  configChange: BehaviorSubject<ToolbarConfig>;

  constructor() {
    this._configuration = new ToolbarConfig();
    this.configChange = new BehaviorSubject<ToolbarConfig>(this._configuration);
  }

  set configuration(config: IToolbarConfig) {
    this._configuration = new ToolbarConfig(config);
    this.configChange.next(this._configuration);
  }

  get configuration(): IToolbarConfig {
    return this._configuration;
  }
}
