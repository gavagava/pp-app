import { Component, Input } from '@angular/core';
import { PredefinedLocales } from '../../../shared/i18n';

@Component({
  selector: 'pp-locales-switch',
  templateUrl: './locales-switch.template.html',
  styleUrls: ['./locales-switch.scss']
})
export class LocalesSwitchComponent {
  @Input()
  langList: string[];

  @Input()
  selectedLang: string;

  locales = PredefinedLocales;

  get extraLangs(): string[] {
    return this.langList
            .filter(lng => lng !== this.selectedLang)
            .slice(0, 3);
  }

  get hiddenLangs(): string[] {
    return this.langList
            .filter(lng => lng !== this.selectedLang)
            .slice(3);
  }

  constructor() {}
}
