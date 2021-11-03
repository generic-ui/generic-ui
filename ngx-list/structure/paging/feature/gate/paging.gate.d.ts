import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { PagingConfig } from '../../core/api/paging-config';
import { StructureId } from '../../../core/api/structure.id';
import { PagingCommandInvoker } from '../../core/api/paging.command-invoker';
import { PagingEventRepository } from '../../core/api/paging.event-repository';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
import { CompositionId } from '../../../../composition/core/api/composition.id';
import * as i0 from "@angular/core";
export declare abstract class PagingGate extends Gate implements OnChanges, OnInit {
    protected readonly structureId: StructureId;
    protected readonly compositionId: CompositionId;
    protected readonly pagingCommandInvoker: PagingCommandInvoker;
    protected readonly pagingEventRepository: PagingEventRepository;
    paging: boolean | PagingConfig;
    pageChanged: EventEmitter<number>;
    pageSizeChanged: EventEmitter<number>;
    protected constructor(structureId: StructureId, compositionId: CompositionId, pagingCommandInvoker: PagingCommandInvoker, pagingEventRepository: PagingEventRepository);
    ngOnChanges(changes: NgChanges<PagingGate>): void;
    ngOnInit(): void;
    onPageChange(page: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PagingGate, never, never, { "paging": "paging"; }, { "pageChanged": "pageChanged"; "pageSizeChanged": "pageSizeChanged"; }, never>;
}
//# sourceMappingURL=paging.gate.d.ts.map