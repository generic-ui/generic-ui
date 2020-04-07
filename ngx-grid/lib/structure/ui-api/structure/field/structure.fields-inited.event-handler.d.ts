import { DomainEventHandler } from '@generic-ui/hermes';
import { StructureFieldUiArchive } from './structure.field.ui-archive';
import { StructureFieldUiConverter } from './structure.field.ui-converter';
import { FieldsInitedEvent } from '../../../domain/structure/field/init/fields-inited.event';
export declare class StructureFieldsInitedEventHandler extends DomainEventHandler {
    private structureFieldsRepository;
    private structureFieldUiConverter;
    constructor(structureFieldsRepository: StructureFieldUiArchive, structureFieldUiConverter: StructureFieldUiConverter);
    handle(event: FieldsInitedEvent): void;
}
