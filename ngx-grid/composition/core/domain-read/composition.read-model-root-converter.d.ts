import { ColumnDefinitionFactory } from './definition/column-definition.factory';
import { CompositionAggregate } from '../domain/composition.aggregate';
import { CompositionReadModeRoot } from './composition.read-mode-root';
import * as i0 from "@angular/core";
export declare class CompositionReadModelRootConverter {
    private columnDefinitionFactory;
    constructor(columnDefinitionFactory: ColumnDefinitionFactory);
    convert(aggregate: CompositionAggregate): CompositionReadModeRoot;
    private convertToColumnDef;
    private convertActiveColumnsToColumnDef;
    static ɵfac: i0.ɵɵFactoryDeclaration<CompositionReadModelRootConverter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CompositionReadModelRootConverter>;
}
//# sourceMappingURL=composition.read-model-root-converter.d.ts.map