import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { StructureId } from '../../../../../core/domain/structure.id';
import { FieldsInitedEvent } from '../../../../../field/core/domain/init/fields-inited.event';
export declare class FilterTypeFieldsInitedEventHandler implements DomainEventHandler<StructureId, FieldsInitedEvent> {
    forEvent(): DomainEventType<FieldsInitedEvent>;
    handle(fieldsInitedEvent: FieldsInitedEvent): void;
}
