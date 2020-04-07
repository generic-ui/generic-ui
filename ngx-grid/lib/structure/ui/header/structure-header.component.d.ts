import { AfterViewInit, ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { DomainEventBus } from '@generic-ui/hermes';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CellTemplateWithContext } from '../../../composition/read/definition/cell-template-with-context';
import { StructureId } from '../../domain/structure.id';
import { StructureFilterReadModelWarehouse } from '../../ui-api/structure/filter/structure-filter.read-model-warehouse';
import { CompositionReadModelWarehouse } from '../../../composition/ui-api/composition.read-model-warehouse';
import { StructureReadModelWarehouse } from '../../ui-api/structure/structure.read-model-warehouse';
export declare class StructureHeaderComponent extends SmartComponent implements OnInit, AfterViewInit {
    private readonly changeDetectorRef;
    private readonly renderer;
    private readonly eventBus;
    private readonly structureId;
    private readonly structureFilterReadModelRepository;
    private readonly structureReadModelService;
    private readonly compositionReadModelService;
    containerRef: ElementRef;
    filtersRef: ElementRef;
    headerColumns: Array<CellTemplateWithContext>;
    filterRowEnabled: boolean;
    constructor(changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, eventBus: DomainEventBus, structureId: StructureId, structureFilterReadModelRepository: StructureFilterReadModelWarehouse, structureReadModelService: StructureReadModelWarehouse, compositionReadModelService: CompositionReadModelWarehouse);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
