import { ElementRef, Injector } from '@angular/core';
import { FabricDrawerService } from '@generic-ui/fabric';
import { FormationEventService } from '../../feature-api/formation/formation-event.service';
import { StructureId } from '../../domain/structure.id';
import { Reactive } from '../../../../common/cdk/reactive';
import { StructureDetailViewConfigArchive } from './structure.detail-view.config-archive';
import { DetailViewConfig } from './detail-view.config';
export declare class StructureDetailViewService extends Reactive {
    private readonly injector;
    private readonly structureId;
    private readonly structureDetailViewConfigArchive;
    private readonly formationEventService;
    private readonly drawerService;
    enabled: boolean;
    config: DetailViewConfig;
    elementRef: ElementRef;
    constructor(injector: Injector, structureId: StructureId, structureDetailViewConfigArchive: StructureDetailViewConfigArchive, formationEventService: FormationEventService, drawerService: FabricDrawerService);
    init(ref: ElementRef): void;
    private turnOn;
    private turnOff;
}
