import { OnChanges } from '@angular/core';
import { Gate } from '../../../../../feature/common/cdk/component/gate';
import { GuiRowStyle } from '../../../../../gui/grid/core/api/gui.grid.public-api';
import { NgChanges } from '../../../../../feature/common/cdk/component/ng-changes';
import { SchemaReadModelRootId } from '../../../../../core/schema/api/global/schema.read-model-root-id';
import { SchemaPublisher } from '../../../../../core/schema/api/schema.publisher';
import * as i0 from "@angular/core";
export declare class StructureRowStyleGate extends Gate implements OnChanges {
    private readonly schemaReadModelRootId;
    private readonly schemaPublisher;
    rowStyle: GuiRowStyle;
    constructor(schemaReadModelRootId: SchemaReadModelRootId, schemaPublisher: SchemaPublisher);
    ngOnChanges(changes: NgChanges<StructureRowStyleGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureRowStyleGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureRowStyleGate, "gui-structure[rowStyle]", never, { "rowStyle": "rowStyle"; }, {}, never, never, false>;
}
