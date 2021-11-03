import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../../core/api/structure.id';
import { FieldsInitedEvent } from '../../../../../field/core/domain/init/fields-inited.event';
import * as i0 from "@angular/core";
export declare class FilterTypeFieldsInitedEventHandler implements DomainEventHandler<StructureId, FieldsInitedEvent> {
    forEvent(): DomainEventType<FieldsInitedEvent>;
    handle(fieldsInitedEvent: FieldsInitedEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterTypeFieldsInitedEventHandler, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FilterTypeFieldsInitedEventHandler>;
}
//# sourceMappingURL=filter-type.fields-inited.event-handler.d.ts.map