import { ChangeDetectorRef, ElementRef, OnInit } from '@angular/core';
import { CellTemplateWithContext } from '../../../../composition/core/domain-read/definition/cell-template-with-context';
import { StructureId } from '../../../core/api/structure.id';
import { SummariesEventRepository } from '../../core/api/summaries.event-repository';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { TranslationFacade } from '../../../../l10n/core/api/translation.facade';
import { SummariesTranslations } from '../structure.summaries-translations';
import { RowSelectionTypeArchive } from '../../../source/core/api/formation/type/row-selection-type.archive';
import { CompositionId } from '../../../../composition/core/api/composition.id';
import * as i0 from "@angular/core";
export declare class StructureSummariesPanelComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly compositionId;
    private readonly structureSummariesEventRepository;
    private readonly translationService;
    private readonly sourceWarehouse;
    private readonly rowSelectionTypeArchive;
    private readonly compositionWarehouse;
    enabled: boolean;
    sourceEmpty: boolean;
    headerColumns: Array<CellTemplateWithContext>;
    summaries: Map<string, any>;
    summariesTranslations: SummariesTranslations;
    checkboxSelection: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, compositionId: CompositionId, structureSummariesEventRepository: SummariesEventRepository, translationService: TranslationFacade, sourceWarehouse: SourceWarehouse, rowSelectionTypeArchive: RowSelectionTypeArchive, compositionWarehouse: CompositionWarehouse);
    ngOnInit(): void;
    isSummariesTypePresent(summaries: number): boolean;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSummariesPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StructureSummariesPanelComponent, "div[gui-structure-summaries-panel][enabled]", never, { "enabled": "enabled"; }, {}, never, never>;
}
//# sourceMappingURL=structure.summaries-panel.component.d.ts.map