import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { FieldReadModelArchive } from './field-read-model.archive';
import { FieldUiConverter } from './field.ui-converter';
import { FieldsInitedEvent } from '../../domain/init/fields-inited.event';
import { StructureId } from '../../../../core/api/structure.id';
export declare class FieldsInitedEventHandler implements DomainEventHandler<StructureId, FieldsInitedEvent> {
    private fieldReadModelRepository;
    private fieldUiConverter;
    constructor(fieldReadModelRepository: FieldReadModelArchive, fieldUiConverter: FieldUiConverter);
    forEvent(): DomainEventType<FieldsInitedEvent>;
    handle(event: FieldsInitedEvent): void;
}
