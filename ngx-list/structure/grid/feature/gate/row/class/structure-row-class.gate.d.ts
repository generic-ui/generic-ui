import { OnChanges } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { GuiRowClass } from '../../../../../../gui/grid/core/api/gui.grid.public-api';
import { SchemaRowClassArchive } from '../../../../../../schema/core/api/styling/schema.row-class.archive';
import { NgChanges } from '../../../../../../common/cdk/component/ng-changes';
export declare class StructureRowClassGate extends Gate implements OnChanges {
    private readonly schemaRowClassArchive;
    rowClass: GuiRowClass;
    constructor(schemaRowClassArchive: SchemaRowClassArchive);
    ngOnChanges(changes: NgChanges<StructureRowClassGate>): void;
}
