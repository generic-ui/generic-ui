import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { FieldArchive } from '../field.archive';
import { FieldConverter } from './field.converter';
import { FieldsInitedEvent } from '../../domain/init/fields-inited.event';
import { StructureId } from '../../../core/api/global/structure.id';
export declare class FieldsInitedEventHandler implements DomainEventHandler<StructureId, FieldsInitedEvent> {
    private readonly fieldArchive;
    private readonly fieldConverter;
    constructor(fieldArchive: FieldArchive, fieldConverter: FieldConverter);
    static readonly services: readonly [typeof FieldArchive, typeof FieldConverter];
    forEvent(): DomainEventType<FieldsInitedEvent>;
    handle(event: FieldsInitedEvent): void;
}
