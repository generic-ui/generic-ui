import { ElementRef, Renderer2, OnDestroy, AfterViewInit, ChangeDetectorRef, OnInit, NgZone } from '@angular/core';
import { ResizeDetector } from '@generic-ui/fabric';
import { SmartComponent } from '../../../../common/cdk/smart-component';
import { CellTemplateWithAccessor } from '../../../composition/domain/read/definition/cell-template-with-accessor';
import { SchemaRowColoring } from '../../domain/schema/schema-row-coloring';
import { StructureId } from '../../domain/structure-id';
import { StructureCommandService } from '../../ui-api/structure/structure-command.service';
import { StructureReadModelService } from '../../ui-api/structure/structure-read-model.service';
import { SourceReadModelService } from '../../ui-api/source/source-read-model.service';
import { SchemaReadModelService } from '../../ui-api/schema/schema-read-model.service';
import { CompositionCommandService } from '../../../composition/ui-api/composition.command-service';
import { CompositionReadModelService } from '../../../composition/ui-api/composition-read-model.service';
import { FormationReadModelService } from '../../ui-api/formation/formation-read-model.service';
import { ItemEntity } from '../../domain/source/item.entity';
export declare class StructureContainerComponent extends SmartComponent implements OnInit, AfterViewInit, OnDestroy {
    private elementRef;
    private renderer;
    private changeDetectorRef;
    private ngZone;
    private structureId;
    private structureCommandService;
    private structureQueryService;
    private sourceQueryService;
    private schemaQueryService;
    private compositionCommandService;
    private compositionQueryService;
    private formationQueryService;
    private resizeDetector;
    private structureParent;
    containerRef: ElementRef;
    columns: Array<CellTemplateWithAccessor>;
    source: Array<ItemEntity>;
    height: number;
    rowColoring: SchemaRowColoring;
    private autoResizeWidthEnabled;
    private scrollObservation$;
    constructor(elementRef: ElementRef, renderer: Renderer2, changeDetectorRef: ChangeDetectorRef, ngZone: NgZone, structureId: StructureId, structureCommandService: StructureCommandService, structureQueryService: StructureReadModelService, sourceQueryService: SourceReadModelService, schemaQueryService: SchemaReadModelService, compositionCommandService: CompositionCommandService, compositionQueryService: CompositionReadModelService, formationQueryService: FormationReadModelService, resizeDetector: ResizeDetector, structureParent: any);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setHeight(height: number): void;
    private recalculateContainer;
    private enableScrollObservation;
    private disableScrollObservation;
}
