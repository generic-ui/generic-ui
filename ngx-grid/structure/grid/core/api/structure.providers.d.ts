import { Provider } from '@angular/core';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { StructureReadModelRootConverter } from './read/structure.read-model-root-converter';
import { StructureAggregateFactory } from '../../../core/domain/structure.aggregate-factory';
import { StructureWarehouse } from './structure.warehouse';
import { StructureDomainCommandInvoker } from '../../../core/domain/structure.domain-command-invoker';
import { StructureInitialValuesReadyArchive } from '../../../core/api/structure.initial-values-ready.archive';
export declare const structureCommandHandlers: Array<Provider>;
export declare const structureDomainEventHandlers: Provider[][];
export declare const structureProviders: (typeof StructureInitialValuesReadyArchive | typeof StructureWarehouse | typeof StructureReadModelRootConverter | typeof import("../../../../generic-ui-ngx-grid").ɵba[] | typeof StructureAggregateFactory | (typeof import("../../../../generic-ui-ngx-grid").ɵz | {
    provide: typeof import("../../../../generic-ui-ngx-grid").ɵy;
    useClass: typeof import("../../../../generic-ui-ngx-grid").ɵx;
})[][] | (typeof import("../../../../generic-ui-ngx-grid").ɵje | {
    provide: typeof import("./read/structure.read-model-repository").StructureReadModelRepository;
    useClass: typeof import("../../../../generic-ui-ngx-grid").ɵsc;
})[][] | {
    provide: typeof StructureCommandInvoker;
    useClass: typeof StructureDomainCommandInvoker;
})[];
