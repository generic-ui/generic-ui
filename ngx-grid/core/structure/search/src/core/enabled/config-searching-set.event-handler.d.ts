import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { SearchingEnabledArchive } from './searching-enabled.archive';
import { ConfigSearchingSetEvent } from '../config/config-searching-set.event';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
export declare class ConfigSearchingSetEventHandler implements DomainEventHandler<StructureId, ConfigSearchingSetEvent> {
    private readonly searchingEnabledArchive;
    constructor(searchingEnabledArchive: SearchingEnabledArchive);
    static readonly services: (typeof SearchingEnabledArchive)[];
    forEvent(): DomainEventType<ConfigSearchingSetEvent>;
    handle(event: ConfigSearchingSetEvent): void;
}
