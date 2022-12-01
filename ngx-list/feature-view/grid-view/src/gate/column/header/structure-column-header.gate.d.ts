import { OnChanges } from '@angular/core';
import { Gate } from '../../../../../../feature/common/src/cdk/component/lib/src/gate';
import { StructureHeaderTopEnabledArchive } from '../../../header/structure-header-top-enabled.archive';
import { StructureHeaderBottomEnabledArchive } from '../../../header/structure-header-bottom-enabled.archive';
import { NgChanges } from '../../../../../../feature/common/src/cdk/component/lib/src/ng-changes';
import * as i0 from "@angular/core";
export declare class StructureColumnHeaderGate extends Gate implements OnChanges {
    private readonly structureHeaderTopEnabledArchive;
    private readonly structureHeaderBottomEnabledArchive;
    columnHeaderTop: boolean;
    columnHeaderBottom: boolean;
    constructor(structureHeaderTopEnabledArchive: StructureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive);
    ngOnChanges(changes: NgChanges<StructureColumnHeaderGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnHeaderGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureColumnHeaderGate, "gui-structure[columnHeaderTop][columnHeaderBottom], gui-structure[columnHeaderTop], gui-structure[columnHeaderBottom]", never, { "columnHeaderTop": "columnHeaderTop"; "columnHeaderBottom": "columnHeaderBottom"; }, {}, never, never, false, never>;
}
