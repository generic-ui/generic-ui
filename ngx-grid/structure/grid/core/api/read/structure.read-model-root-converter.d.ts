import { PagingConverter } from '../../../../paging/core/api/read/paging.converter';
import { SourceConverter } from '../../../../source/core/api/source.converter';
import { VerticalFormationConverter } from '../../../../vertical-formation/core/api/vertical-formation.converter';
import { StructureAggregate } from '../../../../core/domain/structure.aggregate';
import { StructureReadModelRoot } from './structure.read-model-root';
import * as i0 from "@angular/core";
export declare class StructureReadModelRootConverter {
    private pagingConverter;
    private sourceConverter;
    private verticalFormationConverter;
    constructor(pagingConverter: PagingConverter, sourceConverter: SourceConverter, verticalFormationConverter: VerticalFormationConverter);
    convert(aggregate: StructureAggregate): StructureReadModelRoot;
    private convertSource;
    static ɵfac: i0.ɵɵFactoryDeclaration<StructureReadModelRootConverter, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<StructureReadModelRootConverter>;
}
//# sourceMappingURL=structure.read-model-root-converter.d.ts.map