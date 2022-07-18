import { OnChanges } from '@angular/core';
import { Gate } from '../../../../../feature/common/src/cdk/component/lib/src/gate';
import { GuiListLocalization } from '../../../../../gui/list/src/core/api/gui.list.public-api';
import { TranslationFacade } from '../../../../../core/l10n/src/api/translation.facade';
import { NgChanges } from '../../../../../feature/common/src/cdk/component/lib/src/ng-changes';
import * as i0 from "@angular/core";
export declare class ListViewL10nGate extends Gate implements OnChanges {
    private readonly translationService;
    localization: GuiListLocalization;
    constructor(translationService: TranslationFacade);
    ngOnChanges(changes: NgChanges<ListViewL10nGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewL10nGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListViewL10nGate, "gui-list-view[localization]", never, { "localization": "localization"; }, {}, never, never, false>;
}
