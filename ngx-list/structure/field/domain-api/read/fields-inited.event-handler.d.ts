import { Type } from '@angular/core';
import { DomainEventHandler } from '@generic-ui/hermes';
import { FieldUiArchive } from './field.ui-archive';
import { FieldUiConverter } from './field.ui-converter';
import { FieldsInitedEvent } from '../../domain/init/fields-inited.event';
import { StructureId } from '../../../../lib/structure/domain/structure.id';
export declare class FieldsInitedEventHandler implements DomainEventHandler<StructureId, FieldsInitedEvent> {
    private fieldUiArchive;
    private fieldUiConverter;
    constructor(fieldUiArchive: FieldUiArchive, fieldUiConverter: FieldUiConverter);
    forEvent(): Type<FieldsInitedEvent>;
    handle(event: FieldsInitedEvent): void;
}
