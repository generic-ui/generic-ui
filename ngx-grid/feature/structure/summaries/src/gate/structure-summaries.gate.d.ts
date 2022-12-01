import { OnChanges } from '@angular/core';
import { Gate } from '../../../../common/src/cdk/component/lib/src/gate';
import { SummariesConfig } from '../../../../../core/structure/summaries/src/api/config/summaries-config';
import { NgChanges } from '../../../../common/src/cdk/component/lib/src/ng-changes';
import { SummariesPublisher } from '../../../../../core/structure/summaries/src/api/summaries.publisher';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import * as i0 from "@angular/core";
export declare class StructureSummariesGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly summariesCommandInvoker;
    summaries: SummariesConfig;
    constructor(structureId: StructureId, summariesCommandInvoker: SummariesPublisher);
    ngOnChanges(changes: NgChanges<StructureSummariesGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureSummariesGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureSummariesGate, "gui-structure[summaries]", never, { "summaries": "summaries"; }, {}, never, never, false, never>;
}
