import { EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Gate } from '../../../../common/src/cdk/component/lib/src/gate';
import { StructureId } from '../../../../../core/structure/structure-core/src/api/global/structure.id';
import { EditedItemModel } from '../../../../../core/structure/source/src/api/edit/edited-item.model';
import { SourcePublisher } from '../../../../../core/structure/source/src/api/source.publisher';
import { SourceEventService } from '../../../../../core/structure/source/src/api/edit/source-event.service';
import { NgChanges } from '../../../../common/src/cdk/component/lib/src/ng-changes';
import * as i0 from "@angular/core";
export declare abstract class SourceGate extends Gate implements OnChanges, OnInit, OnDestroy {
    protected readonly structureId: StructureId;
    protected readonly sourceCommandInvoker: SourcePublisher;
    protected readonly sourceEventService: SourceEventService;
    source: Array<any>;
    items: Array<any>;
    sourceEdited: EventEmitter<EditedItemModel>;
    protected constructor(structureId: StructureId, sourceCommandInvoker: SourcePublisher, sourceEventService: SourceEventService);
    ngOnChanges(changes: NgChanges<SourceGate>): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<SourceGate, never, never, { "source": "source"; "items": "items"; }, { "sourceEdited": "sourceEdited"; }, never, never, false, never>;
}
