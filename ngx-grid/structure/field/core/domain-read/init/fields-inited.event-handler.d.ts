import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { FieldArchive } from '../field.archive';
import { FieldConverter } from './field.converter';
import { FieldsInitedEvent } from '../../domain/init/fields-inited.event';
import { StructureId } from '../../../../core/api/structure.id';
export declare class FieldsInitedEventHandler implements DomainEventHandler<StructureId, FieldsInitedEvent> {
    private fieldArchive;
    private fieldConverter;
    constructor(fieldArchive: FieldArchive, fieldConverter: FieldConverter);
    forEvent(): DomainEventType<FieldsInitedEvent>;
    handle(event: FieldsInitedEvent): void;
}
