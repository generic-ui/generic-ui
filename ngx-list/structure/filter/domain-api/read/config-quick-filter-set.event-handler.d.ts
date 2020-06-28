import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { QuickFilterEnabledRepository } from './quick-filter-enabled.repository';
import { ConfigQuickFilterSetEvent } from '../../domain/quick/config-quick-filter-set.event';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class ConfigQuickFilterSetEventHandler implements DomainEventHandler<StructureId, ConfigQuickFilterSetEvent> {
    private structureQuickFilterRepository;
    constructor(structureQuickFilterRepository: QuickFilterEnabledRepository);
    forEvent(): DomainEventType<ConfigQuickFilterSetEvent>;
    handle(event: ConfigQuickFilterSetEvent): void;
}
