import { OnChanges } from '@angular/core';
import { StructureId } from '../../../../core/api/structure.id';
import { Gate } from '../../../../../common/cdk/component/gate';
import { FieldConfig } from '../../../../field/core/api/field.config';
import { FieldCommandInvoker } from '../../../../field/core/api/field.command-invoker';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
import * as i0 from "@angular/core";
export declare class ListViewFieldGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly fieldCommandDispatcher;
    fields: Array<FieldConfig>;
    constructor(structureId: StructureId, fieldCommandDispatcher: FieldCommandInvoker);
    ngOnChanges(changes: NgChanges<ListViewFieldGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ListViewFieldGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ListViewFieldGate, "gui-list-view[fields]", never, { "fields": "fields"; }, {}, never>;
}
//# sourceMappingURL=list-view-field.gate.d.ts.map