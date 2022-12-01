import { OnChanges } from '@angular/core';
import { Gate } from '../../../../../../feature/common/src/cdk/component/lib/src/gate';
import { GuiRowClass } from '../../../../../../gui/grid/src/core/api/gui.grid.public-api';
import { NgChanges } from '../../../../../../feature/common/src/cdk/component/lib/src/ng-changes';
import { SchemaPublisher } from '../../../../../../core/schema/src/api/schema.publisher';
import { SchemaReadModelRootId } from '../../../../../../core/schema/src/api/global/schema.read-model-root-id';
import * as i0 from "@angular/core";
export declare class StructureRowClassGate extends Gate implements OnChanges {
    private readonly schemaReadModelRootId;
    private readonly schemaPublisher;
    rowClass: GuiRowClass;
    constructor(schemaReadModelRootId: SchemaReadModelRootId, schemaPublisher: SchemaPublisher);
    ngOnChanges(changes: NgChanges<StructureRowClassGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureRowClassGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureRowClassGate, "gui-structure[rowClass]", never, { "rowClass": "rowClass"; }, {}, never, never, false, never>;
}
