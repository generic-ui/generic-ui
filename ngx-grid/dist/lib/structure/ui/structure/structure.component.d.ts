import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { StructureQueryService } from 'structure/app/structure/structure-query.service';
import { StructureBase } from 'structure/ui/structure-base';
import { StructureDefinition } from 'structure/ui/structure/structure-definition';
import { StructureId } from 'structure/domain/structure-id';
import { SchemaCssClassManager } from 'structure/ui/schema/schema-css-class.manager';
import { FormationCommandService } from 'structure/app/formation/formation-command.service';
import { SchemaQueryService } from 'structure/app/schema/schema-query.service';
import { SchemaCommandService } from 'structure/app/schema/schema-command.service';
import { OriginCommandService } from 'structure/app/origin/origin-command.service';
import { PagingCommandService } from 'structure/app/paging/paging-command.service';
import { PresentationCommandService } from 'structure/app/presentation/presentation-command.service';
import { PresentationQueryService } from 'structure/app/presentation/presentation-query.service';
import { StructureCommandService } from 'structure/app/structure/structure-command.service';
import { PagingEventService } from 'structure/app/paging/paging-event.service';
import { PagingQueryService } from 'structure/app/paging/paging-query.service';
export declare function structureIdFactory(): StructureId;
export declare const structureComponentSelfProviders: ({
    provide: typeof PagingCommandService;
    useClass: typeof import("structure/ui/structure/local/paging/local-paging-command.service").LocalPagingCommandService;
} | {
    provide: typeof PagingQueryService;
    useClass: typeof import("structure/ui/structure/local/paging/local-paging-query.service").LocalPagingQueryService;
} | {
    provide: typeof OriginCommandService;
    useClass: typeof import("structure/ui/structure/local/origin/local-origin-command.service").LocalOriginCommandService;
} | {
    provide: typeof import("structure/app/origin/origin-query.service").OriginQueryService;
    useClass: typeof import("structure/ui/structure/local/origin/local-origin-query.service").LocalOriginQueryService;
} | {
    provide: typeof SchemaCommandService;
    useClass: typeof import("structure/ui/structure/local/schema/local-schema-command.service").LocalSchemaCommandService;
} | {
    provide: typeof SchemaQueryService;
    useClass: typeof import("structure/ui/structure/local/schema/local-schema-query.service").LocalSchemaQueryService;
} | {
    provide: typeof FormationCommandService;
    useClass: typeof import("structure/ui/structure/local/formation/local-formation-command.service").LocalFormationCommandService;
} | {
    provide: typeof import("structure/app/formation/formation-query.service").FormationQueryService;
    useClass: typeof import("structure/ui/structure/local/formation/local-formation-query.service").LocalFormationQueryService;
} | {
    provide: typeof PresentationCommandService;
    useClass: typeof import("structure/ui/structure/local/presentation/local-presentation-command.service").LocalPresentationCommandService;
} | {
    provide: typeof PresentationQueryService;
    useClass: typeof import("structure/ui/structure/local/presentation/local-presentation-query.service").LocalPresentationQueryService;
} | {
    provide: typeof StructureCommandService;
    useClass: typeof import("structure/ui/structure/local/structure/local-structure-command.service").LocalStructureCommandService;
} | {
    provide: typeof StructureQueryService;
    useClass: typeof import("structure/ui/structure/local/structure/local-structure-query.service").LocalStructureQueryService;
} | typeof SchemaCssClassManager | {
    provide: typeof StructureId;
    useFactory: typeof structureIdFactory;
})[];
export declare class StructureComponent extends StructureBase implements OnChanges, OnInit, AfterViewInit, OnDestroy {
    private elementRef;
    private changeDetectorRef;
    private renderer;
    private structureDefinition;
    private structureId;
    private structureCommandService;
    private structureQueryService;
    private originCommandService;
    private pagingCommandService;
    private pagingEventService;
    private pagingQueryService;
    private schemaCommandService;
    private schemaQueryService;
    private formationCommandService;
    private presentationCommandService;
    private presentationQueryService;
    private schemaStylesManager;
    private className;
    readonly headerCssClass: string;
    readonly contentCssClass: string;
    private structureHeight;
    private columnHeader;
    private pagingQueryModel;
    private structure;
    private readonly unsubscribe$;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, renderer: Renderer2, structureDefinition: StructureDefinition, structureId: StructureId, structureCommandService: StructureCommandService, structureQueryService: StructureQueryService, originCommandService: OriginCommandService, pagingCommandService: PagingCommandService, pagingEventService: PagingEventService, pagingQueryService: PagingQueryService, schemaCommandService: SchemaCommandService, schemaQueryService: SchemaQueryService, formationCommandService: FormationCommandService, presentationCommandService: PresentationCommandService, presentationQueryService: PresentationQueryService, schemaStylesManager: SchemaCssClassManager, className: string);
    ngOnChanges(simpleChanges: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    getHeaderTopClasses(): string;
    getHeaderBottomClasses(): string;
    isColumnHeaderTopEnabled(): boolean;
    isColumnHeaderBottomEnabled(): boolean;
    isPagingTopEnabled(): boolean;
    isPagingBottomEnabled(): boolean;
    isBorderEnabled(): boolean;
}
