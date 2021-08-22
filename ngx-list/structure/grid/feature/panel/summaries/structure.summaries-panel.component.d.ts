import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { CellTemplateWithContext } from '../../../../../composition/core/domain-read/definition/cell-template-with-context';
import { StructureId } from '../../../../core/domain/structure.id';
import { StructureSummariesEventRepository } from '../../../../summaries/core/api/structure-summaries.event-repository';
import { CompositionWarehouse } from '../../../../../composition/core/api/composition.warehouse';
import { SmartComponent } from '../../../../../common/cdk/component/smart-component';
import { SourceWarehouse } from '../../../../source/core/api/source.warehouse';
import { TranslationService } from '../../../../../l10n/core/api/translation.service';
import { SummariesTranslations } from './structure.summaries-translations';
export declare class StructureSummariesPanelComponent extends SmartComponent {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly structureSummariesUiEventsRepository;
    private readonly translationService;
    private readonly sourceReadModelService;
    private readonly compositionReadModelService;
    enabled: boolean;
    sourceEmpty: boolean;
    headerColumns: Array<CellTemplateWithContext>;
    summaries: Map<string, any>;
    summariesTranslations: SummariesTranslations;
    constructor(changeDetectorRef: ChangeDetectorRef, elementRef: ElementRef, structureId: StructureId, structureSummariesUiEventsRepository: StructureSummariesEventRepository, translationService: TranslationService, sourceReadModelService: SourceWarehouse, compositionReadModelService: CompositionWarehouse);
    ngOnInit(): void;
    isSummariesTypePresent(summaries: number): boolean;
    protected getSelectorName(): string;
}
