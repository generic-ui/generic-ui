import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { FilterEnabledArchive } from './filter-enabled.archive';
import { ConfigFilterSetEvent } from '../../core/config/config-filter-set.event';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
export declare class ConfigFilterSetEventHandler implements DomainEventHandler<StructureId, ConfigFilterSetEvent> {
    private readonly filterEnabledArchive;
    constructor(filterEnabledArchive: FilterEnabledArchive);
    static readonly services: (typeof FilterEnabledArchive)[];
    forEvent(): DomainEventType<ConfigFilterSetEvent>;
    handle(event: ConfigFilterSetEvent): void;
}
