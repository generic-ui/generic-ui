import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { SummariesEventRepository } from '../../../../../core/structure/summaries/src/api/summaries.event-repository';
import { SmartComponent } from '../../../../common/component/src/smart-component';
import { SourceWarehouse } from '../../../../../core/structure/source/src/api/source.warehouse';
import { TranslationFacade } from '../../../../../core/l10n/src/api/translation.facade';
import { SummariesTranslations } from '../structure.summaries-translations';
import { CompositionId } from '../../../../../core/composition/src/api/global/composition.id';
import { CompositionTemplateWarehouse } from '../../../../composition/src/column/composition.template-warehouse';
import { FormationWarehouse } from '../../../../../core/structure/formation/src/api/formation.warehouse';
import { HermesObservable } from '@generic-ui/hermes';
import { GuiState } from '../../../../../feature/gui-angular/state/gui.state';
import * as i0 from "@angular/core";
export interface StructureSummariesPanelComponentState {
    summariesTranslations: SummariesTranslations;
    sourceEmpty: boolean;
    summaries: Map<string, any>;
}
export declare class StructureSummariesPanelComponent extends SmartComponent {
    private readonly guiState;
    private readonly structureId;
    private readonly compositionId;
    private readonly structureSummariesEventRepository;
    private readonly translationService;
    private readonly sourceWarehouse;
    private readonly formationWarehouse;
    private readonly compositionTemplateWarehouse;
    enabled: boolean;
    headerColumns$: HermesObservable<readonly import("../../../../composition/src/column/composition.template.model").CompositionTemplateModel[]>;
    readonly state$: HermesObservable<StructureSummariesPanelComponentState>;
    readonly checkboxSelection$: HermesObservable<boolean>;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, guiState: GuiState<StructureSummariesPanelComponentState>, structureId: StructureId, compositionId: CompositionId, structureSummariesEventRepository: SummariesEventRepository, translationService: TranslationFacade, sourceWarehouse: SourceWarehouse, formationWarehouse: FormationWarehouse, compositionTemplateWarehouse: CompositionTemplateWarehouse);
    isSummariesTypePresent(summaries: number): boolean;
    protected getSelectorName(): string;
    private selectCheckboxSelection;
    private selectSourceEmpty;
    private selectSummariesTranslations;
    private selectSummaries;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSummariesPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureSummariesPanelComponent, "div[gui-structure-summaries-panel][enabled]", never, { "enabled": { "alias": "enabled"; "required": false; }; }, {}, never, never, false, never>;
}
