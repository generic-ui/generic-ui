import { Gate } from '../../../common/cdk/component/gate';
import { SchemaPublisher } from '../../../../core/schema/api/schema.publisher';
import { SchemaEventRepository } from '../../../../core/schema/api/schema.event-repository';
import { SchemaReadModelRootId } from '../../../../core/schema/api/global/schema.read-model-root-id';
import { NgChanges } from '../../../common/cdk/component/ng-changes';
import { EventEmitter, OnChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ThemeGridGate extends Gate implements OnChanges {
    private readonly schemaId;
    private readonly schemaCommandInvoker;
    private readonly schemaEventRepository;
    verticalGrid?: boolean;
    horizontalGrid?: boolean;
    horizontalGridChanged: EventEmitter<boolean>;
    verticalGridChanged: EventEmitter<boolean>;
    constructor(schemaId: SchemaReadModelRootId, schemaCommandInvoker: SchemaPublisher, schemaEventRepository: SchemaEventRepository);
    ngOnChanges(changes: NgChanges<ThemeGridGate>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ThemeGridGate, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThemeGridGate, "gui-structure[verticalGrid][horizontalGrid]", never, { "verticalGrid": "verticalGrid"; "horizontalGrid": "horizontalGrid"; }, { "horizontalGridChanged": "horizontalGridChanged"; "verticalGridChanged": "verticalGridChanged"; }, never, never, false>;
}
