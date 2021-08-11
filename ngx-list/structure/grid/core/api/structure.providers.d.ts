import { Provider } from '@angular/core';
import { StructureCommandDispatcher } from '../../../core/api/structure.command-dispatcher';
import { StructureReadModelRootConverter } from './read/structure.read-model-root-converter';
import { StructureAggregateFactory } from '../../../core/domain/structure.aggregate-factory';
import { StructureWarehouse } from './structure.warehouse';
export declare const structureCommandHandlers: Array<Provider>;
export declare const structureDomainEventHandlers: Provider[];
export declare const structureProviders: (typeof StructureCommandDispatcher | typeof StructureWarehouse | typeof import("../../../../generic-ui-ngx-list").ɵdg | typeof StructureReadModelRootConverter | typeof import("../../../../generic-ui-ngx-list").ɵdf | typeof import("../../../../generic-ui-ngx-list").ɵhz | {
    provide: typeof import("../../../../generic-ui-ngx-list").ɵbc;
    useClass: typeof import("../../../../generic-ui-ngx-list").ɵhy;
} | {
    provide: typeof import("./read/structure.read-model-repository").StructureReadModelRepository;
    useClass: typeof import("../../../../generic-ui-ngx-list").ɵsm;
} | typeof StructureAggregateFactory)[];
