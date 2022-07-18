import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { QuickFilterEnabledArchive } from './quick-filter-enabled.archive';
import { ConfigQuickFilterSetEvent } from '../../core/quick/config-quick-filter-set.event';
import { StructureId } from '../../../../structure-core/src/api/global/structure.id';
export declare class ConfigQuickFilterSetEventHandler implements DomainEventHandler<StructureId, ConfigQuickFilterSetEvent> {
    private readonly quickFilterEnabledArchive;
    constructor(quickFilterEnabledArchive: QuickFilterEnabledArchive);
    static readonly services: (typeof QuickFilterEnabledArchive)[];
    forEvent(): DomainEventType<ConfigQuickFilterSetEvent>;
    handle(event: ConfigQuickFilterSetEvent): void;
}
