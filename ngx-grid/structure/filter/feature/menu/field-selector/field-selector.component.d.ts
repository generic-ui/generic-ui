import { ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { FieldModel } from '../../../../field/core/api/field.model';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
import { GuiSelectOption } from '@generic-ui/fabric';
export declare class FieldSelectorComponent extends PureComponent implements OnChanges {
    fields: ReadonlyArray<FieldModel>;
    fieldSelected: EventEmitter<FieldModel>;
    fieldsAsOptions: Array<GuiSelectOption>;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: NgChanges<FieldSelectorComponent>): void;
    onFieldSelected(fieldId: GuiSelectOption): void;
    protected getSelectorName(): string;
}
