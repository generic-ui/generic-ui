import { ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { FieldModel } from '../../../../../../core/structure/field/src/api/model/field.model';
import { PureComponent } from '../../../../../common/src/cdk/component/lib/src/pure-component';
import { NgChanges } from '../../../../../common/src/cdk/component/lib/src/ng-changes';
import { GuiSelectOption } from '@generic-ui/fabric';
import * as i0 from "@angular/core";
export declare class FieldSelectorComponent extends PureComponent implements OnChanges {
    fields: ReadonlyArray<FieldModel>;
    fieldSelected: EventEmitter<FieldModel>;
    fieldsAsOptions: Array<GuiSelectOption>;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: NgChanges<FieldSelectorComponent>): void;
    onFieldSelected(fieldId: GuiSelectOption): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FieldSelectorComponent, "div[gui-field-selector][fields]", never, { "fields": "fields"; }, { "fieldSelected": "fieldSelected"; }, never, never, false, never>;
}
