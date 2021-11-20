import { OnChanges } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
import { FilterConfig } from '../../core/api/config/filter.config';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { StructureId } from '../../../core/api/structure.id';
export declare class StructureFilterGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly structureCommandInvoker;
    filtering: boolean | FilterConfig;
    constructor(structureId: StructureId, structureCommandInvoker: StructureCommandInvoker);
    ngOnChanges(changes: NgChanges<StructureFilterGate>): void;
}
