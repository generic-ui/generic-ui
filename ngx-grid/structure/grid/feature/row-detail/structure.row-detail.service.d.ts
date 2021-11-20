import { ElementRef, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FormationEventRepository } from '../../../formation/core/api/formation.event-repository';
import { StructureId } from '../../../core/api/structure.id';
import { StructureRowDetailConfigArchive } from './structure.row-detail.config-archive';
import { RowDetailConfig } from './row-detail.config';
import { Reactive } from '@generic-ui/hermes';
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
}
