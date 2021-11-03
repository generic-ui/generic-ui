import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SearchingEnabledArchive } from './searching-enabled.archive';
import { ConfigSearchingSetEvent } from '../config/config-searching-set.event';
import { StructureId } from '../../../../core/api/structure.id';
export declare class ConfigSearchingSetEventHandler implements DomainEventHandler<StructureId, ConfigSearchingSetEvent> {
    private readonly structureSearchingRepository;
    constructor(structureSearchingRepository: SearchingEnabledArchive);
    forEvent(): DomainEventType<ConfigSearchingSetEvent>;
    handle(event: ConfigSearchingSetEvent): void;
}
