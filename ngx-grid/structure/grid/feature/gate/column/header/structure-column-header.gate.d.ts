import { OnChanges } from '@angular/core';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { StructureHeaderTopEnabledArchive } from '../../../header/structure-header-top-enabled.archive';
import { StructureHeaderBottomEnabledArchive } from '../../../header/structure-header-bottom-enabled.archive';
import { NgChanges } from '../../../../../../common/cdk/component/ng-changes';
export declare class StructureColumnHeaderGate extends Gate implements OnChanges {
    private readonly structureHeaderTopEnabledArchive;
    private readonly structureHeaderBottomEnabledArchive;
    columnHeaderTop: boolean;
    columnHeaderBottom: boolean;
    constructor(structureHeaderTopEnabledArchive: StructureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive);
    ngOnChanges(changes: NgChanges<StructureColumnHeaderGate>): void;
}
