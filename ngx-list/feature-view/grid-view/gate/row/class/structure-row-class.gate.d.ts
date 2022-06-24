import { OnChanges } from '@angular/core';
import { Gate } from '../../../../../feature/common/cdk/component/gate';
import { GuiRowClass } from '../../../../../gui/grid/core/api/gui.grid.public-api';
import { SchemaRowClassArchive } from '../../../../../core/schema/api/styling/schema.row-class.archive';
import { NgChanges } from '../../../../../feature/common/cdk/component/ng-changes';
import * as i0 from "@angular/core";
export declare class StructureRowClassGate extends Gate implements OnChanges {
    private readonly schemaRowClassArchive;
    rowClass: GuiRowClass;
    constructor(schemaRowClassArchive: SchemaRowClassArchive);
    ngOnChanges(changes: NgChanges<StructureRowClassGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureRowClassGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureRowClassGate, "gui-structure[rowClass]", never, { "rowClass": "rowClass"; }, {}, never>;
}
