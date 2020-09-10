import { OnChanges, SimpleChanges } from '@angular/core';
import { StructureId } from '../../../../core/domain/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
import { FieldConfig } from '../../../../field/domain-api/field.config';
import { FieldCommandInvoker } from '../../../../field/domain-api/field.command-invoker';
export declare class ListViewFieldGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly fieldCommandDispatcher;
    fields: Array<FieldConfig>;
    constructor(structureId: StructureId, fieldCommandDispatcher: FieldCommandInvoker);
    ngOnChanges(simpleChanges: SimpleChanges): void;
}
