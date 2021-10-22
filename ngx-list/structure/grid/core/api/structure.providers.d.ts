import { Provider } from '@angular/core';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { StructureReadModelRootConverter } from './read/structure.read-model-root-converter';
import { StructureAggregateFactory } from '../../../core/domain/structure.aggregate-factory';
import { StructureWarehouse } from './structure.warehouse';
import { StructureDomainCommandInvoker } from '../../../core/domain/structure.domain-command-invoker';
import { StructureInitialValuesReadyArchive } from '../../../core/api/structure.initial-values-ready.archive';
export declare const structureCommandHandlers: Array<Provider>;
export declare const structureDomainEventHandlers: Provider[];
export declare const structureProviders: (typeof StructureInitialValuesReadyArchive | typeof StructureWarehouse | typeof import("../../../../generic-ui-ngx-list").ɵhg | typeof StructureReadModelRootConverter | typeof import("../../../../generic-ui-ngx-list").ɵko | typeof import("../../../../generic-ui-ngx-list").ɵhf | {
    provide: typeof import("../../../../generic-ui-ngx-list").ɵbb;
    useClass: typeof import("../../../../generic-ui-ngx-list").ɵhe;
} | {
    provide: typeof import("./read/structure.read-model-repository").StructureReadModelRepository;
    useClass: typeof import("../../../../generic-ui-ngx-list").ɵtc;
} | typeof StructureAggregateFactory | {
    provide: typeof StructureCommandInvoker;
    useClass: typeof StructureDomainCommandInvoker;
})[];
