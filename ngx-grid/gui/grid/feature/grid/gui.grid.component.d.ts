import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { GuiGridGateway } from './gui.grid-gateway';
import { GuiGridIdGenerator } from './register/gui.grid-id.generator';
import { GuiGridRegister } from './register/gui.grid.register';
import { GuiGridApi } from './api/gui.grid.api-provider';
import { FormationPublisher } from '../../../../core/structure/formation/api/formation.publisher';
import { SourcePublisher } from '../../../../core/structure/source/api/source.publisher';
import { FormationWarehouse } from '../../../../core/structure/formation/api/formation.warehouse';
import { SearchPublisher } from '../../../../core/structure/search/api/search.publisher';
import { SchemaPublisher } from '../../../../core/schema/api/schema.publisher';
import { StructurePublisher } from '../../../../core/structure/structure-core/api/structure.publisher';
import { PagingPublisher } from '../../../../core/structure/paging/api/paging.publisher';
import { SummariesPublisher } from '../../../../core/structure/summaries/api/summaries.publisher';
import { SortingPublisher } from '../../../../core/structure/sorting/api/sorting.publisher';
import { CompositionPublisher } from '../../../../core/composition/api/composition.publisher';
import { CompositionWarehouse } from '../../../../core/composition/api/composition.warehouse';
import { FilterIntegration } from '../../../../core/structure/filter/api-integration/filter.integration';
import { StructureIdGenerator } from '../../../../feature-view/grid-view/structure-id.generator';
import * as i0 from "@angular/core";
export declare class GuiGridComponent extends GuiGridGateway implements OnInit, OnDestroy {
    private readonly platformId;
    private readonly elementRef;
    private readonly changeDetectorRef;
    private readonly gridRegister;
    private readonly gridIdGenerator;
    private readonly structureIdGenerator;
    private readonly formationCommandDispatcher;
    private readonly formationWarehouse;
    private readonly compositionCommandInvoker;
    private readonly compositionWarehouse;
    private readonly filterIntegration;
    private readonly sourceCommandDispatcher;
    private readonly searchCommandInvoker;
    private readonly schemaCommandInvoker;
    private readonly structureCommandDispatcher;
    private readonly summariesCommandInvoker;
    private readonly sortingCommandInvoker;
    private readonly pagingCommandInvoker;
    private static readonly GUI_GRID_ID;
    structureRef: any;
    gridId: string;
    api: GuiGridApi;
    private localGridId;
    private readonly gridThemeCommandInvoker;
    private readonly classModifier;
    private readonly styleModifier;
    private readonly attributeModifier;
    constructor(platformId: any, elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, gridRegister: GuiGridRegister, gridIdGenerator: GuiGridIdGenerator, structureIdGenerator: StructureIdGenerator, formationCommandDispatcher: FormationPublisher, formationWarehouse: FormationWarehouse, compositionCommandInvoker: CompositionPublisher, compositionWarehouse: CompositionWarehouse, filterIntegration: FilterIntegration, sourceCommandDispatcher: SourcePublisher, searchCommandInvoker: SearchPublisher, schemaCommandInvoker: SchemaPublisher, structureCommandDispatcher: StructurePublisher, summariesCommandInvoker: SummariesPublisher, sortingCommandInvoker: SortingPublisher, pagingCommandInvoker: PagingPublisher);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getElementRef(): ElementRef;
    getGridId(): string;
    detectChanges(): void;
    private exposeGridId;
    private initApi;
    static ɵfac: i0.ɵɵFactoryDeclaration<GuiGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GuiGridComponent, "gui-grid", never, { "gridId": "gridId"; }, {}, never, never, false>;
}
