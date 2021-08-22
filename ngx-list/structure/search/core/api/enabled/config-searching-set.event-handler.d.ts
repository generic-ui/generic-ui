import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SearchingRepository } from './searching.repository';
import { ConfigSearchingSetEvent } from '../../domain/config/config-searching-set.event';
import { StructureId } from '../../../../core/domain/structure.id';
export declare class ConfigSearchingSetEventHandler implements DomainEventHandler<StructureId, ConfigSearchingSetEvent> {
    private structureSearchingRepository;
    constructor(structureSearchingRepository: SearchingRepository);
    forEvent(): DomainEventType<ConfigSearchingSetEvent>;
    handle(event: ConfigSearchingSetEvent): void;
}
