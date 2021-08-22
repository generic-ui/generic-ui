import { Provider } from '@angular/core';
import { StructureCommandInvoker } from '../../../core/api/structure.command-invoker';
import { StructureReadModelRootConverter } from './read/structure.read-model-root-converter';
import { StructureAggregateFactory } from '../../../core/domain/structure.aggregate-factory';
import { StructureWarehouse } from './structure.warehouse';
import { StructureDomainCommandInvoker } from '../../../core/domain/structure.domain-command-invoker';
export declare const structureCommandHandlers: Array<Provider>;
export declare const structureDomainEventHandlers: Provider[];
export declare const structureProviders: (typeof StructureWarehouse | typeof import("../../../../generic-ui-ngx-list").ɵdh | typeof StructureReadModelRootConverter | typeof import("../../../../generic-ui-ngx-list").ɵdg | typeof import("../../../../generic-ui-ngx-list").ɵhv | {
    provide: typeof import("../../../../generic-ui-ngx-list").ɵbc;
    useClass: typeof import("../../../../generic-ui-ngx-list").ɵhu;
} | {
    provide: typeof import("./read/structure.read-model-repository").StructureReadModelRepository;
    useClass: typeof import("../../../../generic-ui-ngx-list").ɵsq;
} | typeof StructureAggregateFactory | {
    provide: typeof StructureCommandInvoker;
    useClass: typeof StructureDomainCommandInvoker;
})[];
