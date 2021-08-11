import { OnChanges } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import { GuiListLocalization } from '../../../../../gui/list/core/api/gui.list.public-api';
import { TranslationService } from '../../../../../l10n/core/api/translation.service';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
export declare class ListViewL10nGate extends Gate implements OnChanges {
    private readonly translationService;
    localization: GuiListLocalization;
    constructor(translationService: TranslationService);
    ngOnChanges(changes: NgChanges<ListViewL10nGate>): void;
}
