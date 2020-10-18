import { EventEmitter } from '@angular/core';
import { FieldReadModel } from '../../../field/core/api/read/field.read-model';
export declare class FieldSelectorComponent {
    fields: ReadonlyArray<FieldReadModel>;
    fieldSelected: EventEmitter<FieldReadModel>;
    onSelectChange(field: FieldReadModel): void;
}
