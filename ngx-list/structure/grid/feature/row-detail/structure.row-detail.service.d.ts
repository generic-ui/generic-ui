import { ElementRef, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FormationEventRepository } from '../../../source/core/api/formation/formation.event-repository';
import { StructureId } from '../../../core/domain/structure.id';
import { Reactive } from '../../../../common/cdk/reactive/reactive';
import { StructureRowDetailConfigArchive } from './structure.row-detail.config-archive';
import { RowDetailConfig } from './row-detail.config';
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
