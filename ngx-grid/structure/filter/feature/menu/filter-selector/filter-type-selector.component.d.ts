import { ElementRef, EventEmitter } from '@angular/core';
import { FilterTypeReadModel } from '../../../core/api/type/filter-type.read-model';
import { FilterTypeId } from '../../../core/domain/type/filter-type.id';
import { PureComponent } from '../../../../../common/cdk/component/pure-component';
import * as i0 from "@angular/core";
export declare class FilterTypeSelectorComponent extends PureComponent {
    filterTypes: Array<FilterTypeReadModel>;
    filterTypeSelected: EventEmitter<FilterTypeId>;
    constructor(elementRef: ElementRef);
    onSelectChange(filterType: FilterTypeReadModel): void;
    protected getSelectorName(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilterTypeSelectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilterTypeSelectorComponent, "div[gui-filter-type-selector][filterTypes]", never, { "filterTypes": "filterTypes"; }, { "filterTypeSelected": "filterTypeSelected"; }, never, never>;
}
//# sourceMappingURL=filter-type-selector.component.d.ts.map