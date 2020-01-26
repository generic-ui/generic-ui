import { ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DomainEventBus } from '@generic-ui/hermes';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CellTemplateWithContext } from '../../../composition/domain/read/definition/cell-template-with-context';
import { StructureId } from '../../domain/structure-id';
import { StructureFilterReadModelRepository } from '../../ui-api/structure/filter/structure.filter.read-model.repository';
import { CompositionReadModelService } from '../../../composition/ui-api/composition-read-model.service';
export declare class StructureHeaderComponent extends SmartComponent implements OnInit {
    private readonly changeDetectorRef;
    private readonly renderer;
    private readonly eventBus;
    private readonly structureId;
    private readonly structureFilterReadModelRepository;
    private readonly compositionQueryService;
    containerRef: ElementRef;
    headerColumns: Array<CellTemplateWithContext>;
    filterRowEnabled: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, eventBus: DomainEventBus, structureId: StructureId, structureFilterReadModelRepository: StructureFilterReadModelRepository, compositionQueryService: CompositionReadModelService);
    ngOnInit(): void;
}
