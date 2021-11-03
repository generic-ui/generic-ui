import { CommandInvoker } from '@generic-ui/hermes';
import { StructureId } from '../../../core/api/structure.id';
import { SummariesConfig } from './summaries-config';
import * as i0 from "@angular/core";
export declare abstract class SummariesCommandInvoker implements CommandInvoker {
    protected constructor();
    abstract setSummariesEnabled(enabled: boolean, structureId: StructureId): void;
    abstract setConfig(config: SummariesConfig, structureId: StructureId): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SummariesCommandInvoker, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SummariesCommandInvoker>;
}
//# sourceMappingURL=summaries.command-invoker.d.ts.map