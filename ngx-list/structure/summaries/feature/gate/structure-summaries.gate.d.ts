import { OnChanges } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { SummariesConfig } from '../../core/api/summaries-config';
import { StructureSummariesConfigService } from '../structure.summaries-config.service';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
export declare class StructureSummariesGate extends Gate implements OnChanges {
    private readonly structureSummariesConfigService;
    summaries: SummariesConfig;
    constructor(structureSummariesConfigService: StructureSummariesConfigService);
    ngOnChanges(changes: NgChanges<StructureSummariesGate>): void;
}
