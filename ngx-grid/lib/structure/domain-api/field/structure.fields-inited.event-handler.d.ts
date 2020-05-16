import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureFieldUiArchive } from './structure.field.ui-archive';
import { StructureFieldUiConverter } from './structure.field.ui-converter';
import { FieldsInitedEvent } from '../../domain/structure/field/init/fields-inited.event';
import { StructureId } from '../../domain/structure.id';
export declare class StructureFieldsInitedEventHandler extends DomainEventHandler<StructureId, FieldsInitedEvent> {
    private structureFieldsRepository;
    private structureFieldUiConverter;
    constructor(structureFieldsRepository: StructureFieldUiArchive, structureFieldUiConverter: StructureFieldUiConverter);
    handle(event: FieldsInitedEvent): void;
}
