import { ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { StructureId } from '../../../../core/api/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
import { FieldConfig } from '../../../../field/core/api/field.config';
import { FieldCommandInvoker } from '../../../../field/core/api/field.command-invoker';
export declare class ListViewFieldGate extends Gate implements OnChanges {
    private readonly changeDetectorRef;
    private readonly structureId;
    private readonly fieldCommandDispatcher;
    fields: Array<FieldConfig>;
    constructor(changeDetectorRef: ChangeDetectorRef, structureId: StructureId, fieldCommandDispatcher: FieldCommandInvoker);
    ngOnChanges(simpleChanges: SimpleChanges): void;
}
