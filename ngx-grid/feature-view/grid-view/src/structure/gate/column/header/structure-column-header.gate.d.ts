import { OnChanges } from '@angular/core';
import { Gate } from '../../../../../../../feature/common/component/src/gate';
import { StructureHeaderTopEnabledArchive } from '../../../../header/structure-header-top-enabled.archive';
import { StructureHeaderBottomEnabledArchive } from '../../../../header/structure-header-bottom-enabled.archive';
import { NgChanges } from '../../../../../../../feature/common/component/src/ng-changes';
import * as i0 from "@angular/core";
export declare class StructureColumnHeaderGate extends Gate implements OnChanges {
    private readonly structureHeaderTopEnabledArchive;
    private readonly structureHeaderBottomEnabledArchive;
    columnHeaderTop: boolean;
    columnHeaderBottom: boolean;
    constructor(structureHeaderTopEnabledArchive: StructureHeaderTopEnabledArchive, structureHeaderBottomEnabledArchive: StructureHeaderBottomEnabledArchive);
    ngOnChanges(changes: NgChanges<StructureColumnHeaderGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureColumnHeaderGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureColumnHeaderGate, "gui-structure[columnHeaderTop][columnHeaderBottom], gui-structure[columnHeaderTop], gui-structure[columnHeaderBottom]", never, { "columnHeaderTop": { "alias": "columnHeaderTop"; "required": false; }; "columnHeaderBottom": { "alias": "columnHeaderBottom"; "required": false; }; }, {}, never, never, false, never>;
}
