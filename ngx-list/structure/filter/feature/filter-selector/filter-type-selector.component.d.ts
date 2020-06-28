import { EventEmitter } from '@angular/core';
import { FilterTypeReadModel } from '../../domain-api/type/filter-type.read-model';
import { FilterTypeId } from '../../domain/type/filter-type.id';
import { PureComponent } from '../../../../common/cdk/pure-component';
export declare class FilterTypeSelectorComponent extends PureComponent {
    filterTypes: Array<FilterTypeReadModel>;
    filterTypeSelected: EventEmitter<FilterTypeId>;
    onSelectChange(filterType: FilterTypeReadModel): void;
}
