import { OnChanges } from '@angular/core';
import { Gate } from '../../../../feature/common/cdk/component/gate';
import { GuiLocalization } from '../../../../gui/grid/core/api/gui.grid.public-api';
import { TranslationFacade } from '../../../../core/l10n/api/translation.facade';
import { NgChanges } from '../../../../feature/common/cdk/component/ng-changes';
import * as i0 from "@angular/core";
export declare class StructureL10nGate extends Gate implements OnChanges {
    private readonly translationService;
    localization: GuiLocalization;
    constructor(translationService: TranslationFacade);
    ngOnChanges(changes: NgChanges<StructureL10nGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureL10nGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureL10nGate, "gui-structure[localization]", never, { "localization": "localization"; }, {}, never>;
}
