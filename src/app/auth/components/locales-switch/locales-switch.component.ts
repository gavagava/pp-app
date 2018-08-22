import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) {
    
  }
}
