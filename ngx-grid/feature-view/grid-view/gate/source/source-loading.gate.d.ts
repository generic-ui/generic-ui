import { OnChanges, OnInit } from '@angular/core';
import { Gate } from '../../../../feature/common/cdk/component/gate';
import { SourcePublisher } from '../../../../core/structure/source/api/source.publisher';
import { NgChanges } from '../../../../feature/common/cdk/component/ng-changes';
import { StructureId } from '../../../../core/structure/structure-core/api/global/structure.id';
import * as i0 from "@angular/core";
export declare class SourceLoadingGate extends Gate implements OnChanges, OnInit {
    private readonly structureId;
    private readonly sourceCommandInvoker;
    loading: boolean;
    constructor(structureId: StructureId, sourceCommandInvoker: SourcePublisher);
    ngOnChanges(changes: NgChanges<SourceLoadingGate>): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceLoadingGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SourceLoadingGate, "gui-structure[loading]", never, { "loading": "loading"; }, {}, never, never, false>;
}
