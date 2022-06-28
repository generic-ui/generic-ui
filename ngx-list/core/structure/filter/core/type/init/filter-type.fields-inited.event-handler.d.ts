import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../structure-core/api/global/structure.id';
import { FieldsInitedEvent } from '../../../../field/core/init/fields-inited.event';
export declare class FilterTypeFieldsInitedEventHandler implements DomainEventHandler<StructureId, FieldsInitedEvent> {
    forEvent(): DomainEventType<FieldsInitedEvent>;
    handle(fieldsInitedEvent: FieldsInitedEvent): void;
}
