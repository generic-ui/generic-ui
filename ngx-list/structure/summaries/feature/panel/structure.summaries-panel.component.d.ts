import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { CellTemplateWithContext } from '../../../../composition/core/domain-read/definition/cell-template-with-context';
import { StructureId } from '../../../core/api/structure.id';
import { SummariesEventRepository } from '../../core/api/summaries.event-repository';
import { CompositionWarehouse } from '../../../../composition/core/api/composition.warehouse';
import { SmartComponent } from '../../../../common/cdk/component/smart-component';
import { SourceWarehouse } from '../../../source/core/api/source.warehouse';
import { TranslationFacade } from '../../../../l10n/core/api/translation.facade';
import { SummariesTranslations } from '../structure.summaries-translations';
import { RowSelectionTypeArchive } from '../../../source/core/api/formation/type/row-selection-type.archive';
export declare class StructureSummariesPanelComponent extends SmartComponent {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly structureSummariesEventRepository;
    private readonly translationService;
    private readonly sourceReadModelService;
    private readonly rowSelectionTypeArchive;
    private readonly compositionReadModelService;
    enabled: boolean;
    sourceEmpty: boolean;
    headerColumns: Array<CellTemplateWithContext>;
    summaries: Map<string, any>;
    summariesTranslations: SummariesTranslations;
    checkboxSelection: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, structureSummariesEventRepository: SummariesEventRepository, translationService: TranslationFacade, sourceReadModelService: SourceWarehouse, rowSelectionTypeArchive: RowSelectionTypeArchive, compositionReadModelService: CompositionWarehouse);
    ngOnInit(): void;
    isSummariesTypePresent(summaries: number): boolean;
    protected getSelectorName(): string;
}
