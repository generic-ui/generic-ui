import { OnChanges } from '@angular/core';
import { StructureId } from '../../../../core/domain/structure.id';
import { Gate } from '../../../../../common/cdk/component/gate';
import { FieldConfig } from '../../../../field/core/api/field.config';
import { FieldCommandInvoker } from '../../../../field/core/api/field.command-invoker';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
export declare class ListViewFieldGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly fieldCommandDispatcher;
    fields: Array<FieldConfig>;
    constructor(structureId: StructureId, fieldCommandDispatcher: FieldCommandInvoker);
    ngOnChanges(changes: NgChanges<ListViewFieldGate>): void;
}
