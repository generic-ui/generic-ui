import { OnChanges } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { SummariesConfig } from '../../core/api/summaries-config';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
import { SummariesCommandInvoker } from '../../core/api/summaries.command-invoker';
import { StructureId } from '../../../core/api/structure.id';
import * as i0 from "@angular/core";
export declare class StructureSummariesGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly summariesCommandInvoker;
    summaries: SummariesConfig;
    constructor(structureId: StructureId, summariesCommandInvoker: SummariesCommandInvoker);
    ngOnChanges(changes: NgChanges<StructureSummariesGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSummariesGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureSummariesGate, "gui-structure[summaries]", never, { "summaries": "summaries"; }, {}, never>;
}
//# sourceMappingURL=structure-summaries.gate.d.ts.map