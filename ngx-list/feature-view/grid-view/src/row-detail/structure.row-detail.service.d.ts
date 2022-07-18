import { ElementRef, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FormationEventRepository } from '../../../../core/structure/formation/src/api/formation.event-repository';
import { StructureId } from '../../../../core/structure/structure-core/src/api/global/structure.id';
import { StructureRowDetailConfigArchive } from './structure.row-detail.config-archive';
import { RowDetailConfig } from './row-detail.config';
import { Reactive } from '@generic-ui/hermes';
import * as i0 from "@angular/core";
export declare class StructureRowDetailService extends Reactive {
    private readonly injector;
    private readonly structureId;
    private readonly structureDetailViewConfigArchive;
    private readonly formationEventService;
    private readonly drawerService;
    enabled: boolean;
    config: RowDetailConfig;
    elementRef: ElementRef;
    constructor(injector: Injector, structureId: StructureId, structureDetailViewConfigArchive: StructureRowDetailConfigArchive, formationEventService: FormationEventRepository, drawerService: FabricDrawerService);
    init(ref: ElementRef): void;
    private turnOn;
    private turnOff;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureRowDetailService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureRowDetailService>;
}
