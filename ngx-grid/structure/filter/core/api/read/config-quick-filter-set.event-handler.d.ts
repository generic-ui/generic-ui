import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { QuickFilterEnabledArchive } from './quick-filter-enabled.archive';
import { ConfigQuickFilterSetEvent } from '../../domain/quick/config-quick-filter-set.event';
import { StructureId } from '../../../../core/api/structure.id';
export declare class ConfigQuickFilterSetEventHandler implements DomainEventHandler<StructureId, ConfigQuickFilterSetEvent> {
    private structureQuickFilterRepository;
    constructor(structureQuickFilterRepository: QuickFilterEnabledArchive);
    forEvent(): DomainEventType<ConfigQuickFilterSetEvent>;
    handle(event: ConfigQuickFilterSetEvent): void;
}
