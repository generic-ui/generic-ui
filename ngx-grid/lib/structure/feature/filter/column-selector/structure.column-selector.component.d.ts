import { EventEmitter } from '@angular/core';
import { SmartComponent } from '../../../../../common/cdk/smart-component';
import { CompositionWarehouse } from '../../../../composition/feature-api/composition.warehouse';
import { CellTemplateWithContext } from '../../../../composition/feature-api/read/definition/cell-template-with-context';
export declare class StructureColumnSelectorComponent extends SmartComponent {
    private readonly compositionWarehouse;
    columnSelected: EventEmitter<string>;
    columns: Array<CellTemplateWithContext>;
    options: Array<string>;
    constructor(compositionWarehouse: CompositionWarehouse);
    ngOnInit(): void;
    onSelectChange(columnId: string): void;
}
