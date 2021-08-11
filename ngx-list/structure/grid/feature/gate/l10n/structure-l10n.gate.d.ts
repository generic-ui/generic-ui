import { OnChanges } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import { GuiLocalization } from '../../../../../gui/grid/core/api/gui.grid.public-api';
import { TranslationService } from '../../../../../l10n/core/api/translation.service';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
export declare class StructureL10nGate extends Gate implements OnChanges {
    private readonly translationService;
    localization: GuiLocalization;
    constructor(translationService: TranslationService);
    ngOnChanges(changes: NgChanges<StructureL10nGate>): void;
}
