import { DomainEventHandler, DomainEventType } from '@generic-ui/hermes';
import { FieldReadModelRepository } from './field.read-model-repository';
import { FieldUiConverter } from './field.ui-converter';
import { FieldsInitedEvent } from '../../domain/init/fields-inited.event';
import { StructureId } from '../../../../core/domain/structure.id';
export declare class FieldsInitedEventHandler implements DomainEventHandler<StructureId, FieldsInitedEvent> {
    private fieldReadModelRepository;
    private fieldUiConverter;
    constructor(fieldReadModelRepository: FieldReadModelRepository, fieldUiConverter: FieldUiConverter);
    forEvent(): DomainEventType<FieldsInitedEvent>;
    handle(event: FieldsInitedEvent): void;
}
