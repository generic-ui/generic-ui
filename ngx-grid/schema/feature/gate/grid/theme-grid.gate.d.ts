import { Gate } from '../../../../common/cdk/component/gate';
import { SchemaCommandInvoker } from '../../../core/api/schema.command-invoker';
import { SchemaEventRepository } from '../../../core/api/schema.event-repository';
import { SchemaReadModelRootId } from '../../../core/api/schema.read-model-root-id';
import { NgChanges } from '../../../../common/cdk/component/ng-changes';
import { EventEmitter, OnChanges, OnInit } from '@angular/core';
export declare class ThemeGridGate extends Gate implements OnChanges, OnInit {
    private readonly schemaId;
    private readonly schemaCommandInvoker;
    private readonly schemaEventRepository;
    verticalGrid: boolean;
    horizontalGrid: boolean;
    horizontalGridChanged: EventEmitter<boolean>;
    verticalGridChanged: EventEmitter<boolean>;
    constructor(schemaId: SchemaReadModelRootId, schemaCommandInvoker: SchemaCommandInvoker, schemaEventRepository: SchemaEventRepository);
    ngOnChanges(changes: NgChanges<ThemeGridGate>): void;
    ngOnInit(): void;
}
