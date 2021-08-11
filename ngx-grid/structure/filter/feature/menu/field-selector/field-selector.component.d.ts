import { ElementRef, EventEmitter } from '@angular/core';
import { FieldReadModel } from '../../../../field/core/api/read/field.read-model';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
export declare class FieldSelectorComponent extends PureComponent {
    fields: ReadonlyArray<FieldReadModel>;
    fieldSelected: EventEmitter<FieldReadModel>;
    constructor(elementRef: ElementRef);
    onSelectChange(field: FieldReadModel): void;
    protected getSelectorName(): string;
}
