import { OnChanges } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { GuiRowStyle } from '../../../../../../gui/grid/core/api/gui.grid.public-api';
import { SchemaRowStyleArchive } from '../../../../../../schema/core/api/styling/schema.row-style.archive';
import { NgChanges } from '../../../../../../common/cdk/component/ng-changes';
import * as i0 from "@angular/core";
export declare class StructureRowStyleGate extends Gate implements OnChanges {
    private readonly schemaRowStyleArchive;
    rowStyle: GuiRowStyle;
    constructor(schemaRowStyleArchive: SchemaRowStyleArchive);
    ngOnChanges(changes: NgChanges<StructureRowStyleGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureRowStyleGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureRowStyleGate, "gui-structure[rowStyle]", never, { "rowStyle": "rowStyle"; }, {}, never>;
}
//# sourceMappingURL=structure-row-style.gate.d.ts.map