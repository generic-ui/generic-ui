import { OnChanges, SimpleChanges } from '@angular/core';
import { StructureId } from '../../../../../lib/structure/domain/structure.id';
import { Gate } from '../../../../../common/cdk/gate';
import { FieldConfig } from '../../../../field/domain-api/field.config';
import { FieldCommandDispatcher } from '../../../../field/domain-api/field.command-dispatcher';
export declare class ListViewFieldGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly fieldCommandDispatcher;
    fields: Array<FieldConfig>;
    constructor(structureId: StructureId, fieldCommandDispatcher: FieldCommandDispatcher);
    ngOnChanges(simpleChanges: SimpleChanges): void;
}
