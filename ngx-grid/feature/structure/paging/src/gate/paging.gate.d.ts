import { EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Gate } from '../../../../common/src/cdk/component/lib/src/gate';
import { PagingConfig } from '../../../../../core/structure/paging/src/api/config/paging-config';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { PagingPublisher } from '../../../../../core/structure/paging/src/api/paging.publisher';
import { PagingEventRepository } from '../../../../../core/structure/paging/src/api/paging.event-repository';
import { NgChanges } from '../../../../common/src/cdk/component/lib/src/ng-changes';
import { CompositionId } from '../../../../../core/composition/src/api/global/composition.id';
import * as i0 from "@angular/core";
export declare abstract class PagingGate extends Gate implements OnChanges, OnInit {
    protected readonly structureId: StructureId;
    protected readonly compositionId: CompositionId;
    protected readonly pagingCommandInvoker: PagingPublisher;
    protected readonly pagingEventRepository: PagingEventRepository;
    paging: boolean | PagingConfig;
    pageChanged: EventEmitter<number>;
    pageSizeChanged: EventEmitter<number>;
    protected constructor(structureId: StructureId, compositionId: CompositionId, pagingCommandInvoker: PagingPublisher, pagingEventRepository: PagingEventRepository);
    ngOnChanges(changes: NgChanges<PagingGate>): void;
    ngOnInit(): void;
    onPageChange(page: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PagingGate, never, never, { "paging": "paging"; }, { "pageChanged": "pageChanged"; "pageSizeChanged": "pageSizeChanged"; }, never, never, false, never>;
}
