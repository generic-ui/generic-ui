import { OnChanges } from '@angular/core';
import { Gate } from '../../../../../feature/common/cdk/component/gate';
import { GuiRowClass } from '../../../../../gui/grid/core/api/gui.grid.public-api';
import { NgChanges } from '../../../../../feature/common/cdk/component/ng-changes';
import { SchemaPublisher } from '../../../../../core/schema/api/schema.publisher';
import { SchemaReadModelRootId } from '../../../../../core/schema/api/global/schema.read-model-root-id';
import * as i0 from "@angular/core";
export declare class StructureRowClassGate extends Gate implements OnChanges {
    private readonly schemaReadModelRootId;
    private readonly schemaPublisher;
    rowClass: GuiRowClass;
    constructor(schemaReadModelRootId: SchemaReadModelRootId, schemaPublisher: SchemaPublisher);
    ngOnChanges(changes: NgChanges<StructureRowClassGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureRowClassGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureRowClassGate, "gui-structure[rowClass]", never, { "rowClass": "rowClass"; }, {}, never, never, false>;
}
