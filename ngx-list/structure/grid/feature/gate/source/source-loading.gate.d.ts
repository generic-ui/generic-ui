import { OnChanges, OnInit } from '@angular/core';
import { Gate } from '../../../../../common/cdk/component/gate';
import { SourceCommandInvoker } from '../../../../source/core/api/source.command-invoker';
import { NgChanges } from '../../../../../common/cdk/component/ng-changes';
import { StructureId } from '../../../../core/api/structure.id';
export declare class SourceLoadingGate extends Gate implements OnChanges, OnInit {
    private readonly structureId;
    private readonly sourceCommandInvoker;
    loading: boolean;
    constructor(structureId: StructureId, sourceCommandInvoker: SourceCommandInvoker);
    ngOnChanges(changes: NgChanges<SourceLoadingGate>): void;
    ngOnInit(): void;
}
