import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../core/api/structure.id';
import { FilterTypeArchive } from './filter-type.archive';
import { FilterTypesInitedEvent } from '../../domain/type/init/filter-types-inited.event';
import * as i0 from "@angular/core";
export declare class FilterTypeConfigFilterSetEventHandler implements DomainEventHandler<StructureId, FilterTypesInitedEvent> {
    private readonly filterTypeArchive;
    constructor(filterTypeArchive: FilterTypeArchive);
    forEvent(): DomainEventType<FilterTypesInitedEvent>;
    handle(filterTypesInitedEvent: FilterTypesInitedEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterTypeConfigFilterSetEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FilterTypeConfigFilterSetEventHandler>;
}
//# sourceMappingURL=filter-type.config-filter-set.event-handler.d.ts.map