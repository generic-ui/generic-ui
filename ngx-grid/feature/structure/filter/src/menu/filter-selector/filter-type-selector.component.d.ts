import { ElementRef, EventEmitter, OnChanges } from '@angular/core';
import { FilterTypeModel } from '../../../../../../core/structure/filter/src/api/type/filter-type.model';
import { FilterTypeId } from '../../../../../../core/structure/filter/src/domain/type/filter-type.id';
import { PureComponent } from '../../../../../common/src/cdk/component/lib/src/pure-component';
import { GuiSelectOption } from '@generic-ui/fabric';
import { NgChanges } from '../../../../../common/src/cdk/component/lib/src/ng-changes';
import * as i0 from "@angular/core";
export declare class FilterTypeSelectorComponent extends PureComponent implements OnChanges {
    filterTypes: ReadonlyArray<FilterTypeModel>;
    filterTypeSelected: EventEmitter<FilterTypeId>;
    filterTypesAsOptions: ReadonlyArray<GuiSelectOption>;
    disabled: boolean;
    constructor(elementRef: ElementRef);
    ngOnChanges(changes: NgChanges<FilterTypeSelectorComponent>): void;
    onSelectChange(option: GuiSelectOption): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterTypeSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterTypeSelectorComponent, "div[gui-filter-type-selector][filterTypes]", never, { "filterTypes": "filterTypes"; }, { "filterTypeSelected": "filterTypeSelected"; }, never, never, false, never>;
}
