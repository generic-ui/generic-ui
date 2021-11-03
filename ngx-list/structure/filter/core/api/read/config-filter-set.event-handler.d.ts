import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { FilterEnabledArchive } from './filter-enabled.archive';
import { ConfigFilterSetEvent } from '../../domain/config/config-filter-set.event';
import { StructureId } from '../../../../core/api/structure.id';
export declare class ConfigFilterSetEventHandler implements DomainEventHandler<StructureId, ConfigFilterSetEvent> {
    private readonly structureFilterRepository;
    constructor(structureFilterRepository: FilterEnabledArchive);
    forEvent(): DomainEventType<ConfigFilterSetEvent>;
    handle(event: ConfigFilterSetEvent): void;
}
