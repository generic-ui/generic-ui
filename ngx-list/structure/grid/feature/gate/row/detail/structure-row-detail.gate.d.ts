import { OnChanges } from '@angular/core';
import { RowDetailConfig } from '../../../row-detail/row-detail.config';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { StructureRowDetailConfigArchive } from '../../../row-detail/structure.row-detail.config-archive';
import { NgChanges } from '../../../../../../common/cdk/component/ng-changes';
export declare class StructureRowDetailGate extends Gate implements OnChanges {
    private readonly structureDetailViewConfigArchive;
    rowDetail: RowDetailConfig;
    constructor(structureDetailViewConfigArchive: StructureRowDetailConfigArchive);
    ngOnChanges(changes: NgChanges<StructureRowDetailGate>): void;
}
