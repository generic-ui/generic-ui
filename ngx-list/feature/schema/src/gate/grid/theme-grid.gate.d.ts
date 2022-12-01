import { Gate } from '../../../../common/src/cdk/component/lib/src/gate';
import { SchemaPublisher } from '../../../../../core/schema/src/api/schema.publisher';
import { SchemaEventRepository } from '../../../../../core/schema/src/api/schema.event-repository';
import { SchemaReadModelRootId } from '../../../../../core/schema/src/api/global/schema.read-model-root-id';
import { NgChanges } from '../../../../common/src/cdk/component/lib/src/ng-changes';
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
    static ɵdir: i0.ɵɵDirectiveDeclaration<ThemeGridGate, "gui-structure[verticalGrid][horizontalGrid]", never, { "verticalGrid": "verticalGrid"; "horizontalGrid": "horizontalGrid"; }, { "horizontalGridChanged": "horizontalGridChanged"; "verticalGridChanged": "verticalGridChanged"; }, never, never, false, never>;
}
