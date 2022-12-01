import { OnChanges } from '@angular/core';
import { Gate } from '../../../../common/src/cdk/component/lib/src/gate';
import { NgChanges } from '../../../../common/src/cdk/component/lib/src/ng-changes';
import { FilterConfig } from '../../../../../core/structure/filter/src/api/config/filter.config';
import { StructurePublisher } from '../../../../../core/structure/structure-core/src/api/structure.publisher';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import * as i0 from "@angular/core";
export declare class StructureFilterGate extends Gate implements OnChanges {
    private readonly structureId;
    private readonly structureCommandInvoker;
    filtering: boolean | FilterConfig;
    constructor(structureId: StructureId, structureCommandInvoker: StructurePublisher);
    ngOnChanges(changes: NgChanges<StructureFilterGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureFilterGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<StructureFilterGate, "gui-structure[filtering]", never, { "filtering": "filtering"; }, {}, never, never, false, never>;
}
