import { EventEmitter, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Gate } from '../../../../common/cdk/component/gate';
import { StructureId } from '../../../core/domain/structure.id';
import { EditemItemValues } from '../../core/api/event/editem-item.values';
import { SourceCommandInvoker } from '../../core/api/source.command-invoker';
import { SourceEventService } from '../../core/api/event/source-event.service';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
export declare abstract class SourceGate extends Gate implements OnChanges, OnInit, OnDestroy {
    protected readonly structureId: StructureId;
    protected readonly sourceCommandInvoker: SourceCommandInvoker;
    protected readonly sourceEventService: SourceEventService;
    source: Array<any>;
    items: Array<any>;
    sourceEdited: EventEmitter<EditemItemValues>;
    private readonly localStreamCloser;
    protected constructor(structureId: StructureId, sourceCommandInvoker: SourceCommandInvoker, sourceEventService: SourceEventService);
    ngOnChanges(changes: NgChanges<SourceGate>): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
}
