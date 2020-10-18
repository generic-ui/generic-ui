import { Provider } from '@angular/core';
import { StructureCommandDispatcher } from '../../../core/api/structure.command-dispatcher';
import { StructureReadModelRootConverter } from '../domain-read/structure.read-model-root-converter';
import { StructureAggregateFactory } from '../../../core/domain/structure.aggregate-factory';
import { StructureWarehouse } from './structure.warehouse';
export declare const structureCommandHandlers: Array<Provider>;
export declare const structureDomainEventHandlers: Provider[];
export declare const structureProviders: (typeof StructureCommandDispatcher | typeof StructureWarehouse | typeof import("../../../../generic-ui-ngx-list").ɵct | typeof StructureReadModelRootConverter | typeof import("../../../../generic-ui-ngx-list").ɵcs | typeof import("../../../../generic-ui-ngx-list").ɵgw | {
    provide: typeof import("../../../../generic-ui-ngx-list").ɵbc;
    useClass: typeof import("../../../../generic-ui-ngx-list").ɵgv;
} | {
    provide: typeof import("../domain-read/structure.read-model-repository").StructureReadModelRepository;
    useClass: typeof import("../../../../generic-ui-ngx-list").ɵro;
} | typeof StructureAggregateFactory)[];
