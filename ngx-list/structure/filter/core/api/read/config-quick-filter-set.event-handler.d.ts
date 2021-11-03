import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { QuickFilterEnabledArchive } from './quick-filter-enabled.archive';
import { ConfigQuickFilterSetEvent } from '../../domain/quick/config-quick-filter-set.event';
import { StructureId } from '../../../../core/api/structure.id';
import * as i0 from "@angular/core";
export declare class ConfigQuickFilterSetEventHandler implements DomainEventHandler<StructureId, ConfigQuickFilterSetEvent> {
    private structureQuickFilterRepository;
    constructor(structureQuickFilterRepository: QuickFilterEnabledArchive);
    forEvent(): DomainEventType<ConfigQuickFilterSetEvent>;
    handle(event: ConfigQuickFilterSetEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfigQuickFilterSetEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfigQuickFilterSetEventHandler>;
}
//# sourceMappingURL=config-quick-filter-set.event-handler.d.ts.map