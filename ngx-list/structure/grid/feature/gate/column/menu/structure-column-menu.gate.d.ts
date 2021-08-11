import { OnChanges } from '@angular/core';
import { ColumnMenuConfig } from '../../../../core/api/column-menu-config';
import { StructureColumnMenuConfigArchive } from '../../../header/menu/config/structure.column-menu-config.archive';
import { Gate } from '../../../../../../common/cdk/component/gate';
import { NgChanges } from '../../../../../../common/cdk/component/ng-changes';
export declare class StructureColumnMenuGate extends Gate implements OnChanges {
    private readonly structureColumnMenuConfigArchive;
    columnMenu: ColumnMenuConfig;
    constructor(structureColumnMenuConfigArchive: StructureColumnMenuConfigArchive);
    ngOnChanges(changes: NgChanges<StructureColumnMenuGate>): void;
}
