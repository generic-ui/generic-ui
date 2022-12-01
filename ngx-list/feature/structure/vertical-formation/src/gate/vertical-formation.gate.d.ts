import { Gate } from '../../../../common/src/cdk/component/lib/src/gate';
import { NgChanges } from '../../../../common/src/cdk/component/lib/src/ng-changes';
import { StructurePublisher } from '../../../../../core/structure/structure-core/src/api/structure.publisher';
import { OnChanges } from '@angular/core';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import * as i0 from "@angular/core";
export declare class VerticalFormationGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly structureCommandInvoker;
    virtualScroll: boolean;
    constructor(structureId: StructureId, structureCommandInvoker: StructurePublisher);
    ngOnChanges(changes: NgChanges<VerticalFormationGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<VerticalFormationGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<VerticalFormationGate, "gui-structure[virtualScroll]", never, { "virtualScroll": "virtualScroll"; }, {}, never, never, false, never>;
}
