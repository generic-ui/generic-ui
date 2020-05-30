import { Type } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { SearchingRepository } from './searching.repository';
import { ConfigSearchingSetEvent } from '../../domain/config/config-searching-set.event';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class ConfigSearchingSetEventHandler implements DomainEventHandler<StructureId, ConfigSearchingSetEvent> {
    private structureSearchingRepository;
    constructor(structureSearchingRepository: SearchingRepository);
    forEvent(): Type<ConfigSearchingSetEvent>;
    handle(event: ConfigSearchingSetEvent): void;
}
