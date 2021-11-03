import { ElementRef, EventEmitter } from '@angular/core';
import { FieldReadModel } from '../../../../field/core/api/read/field.read-model';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
export declare class FieldSelectorComponent extends PureComponent {
    fields: ReadonlyArray<FieldReadModel>;
    fieldSelected: EventEmitter<FieldReadModel>;
    constructor(elementRef: ElementRef);
    onSelectChange(field: FieldReadModel): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FieldSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FieldSelectorComponent, "div[gui-field-selector][fields]", never, { "fields": "fields"; }, { "fieldSelected": "fieldSelected"; }, never, never>;
}
//# sourceMappingURL=field-selector.component.d.ts.map