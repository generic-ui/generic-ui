import { Logger } from '../../../../common/cdk/logger/logger';
import { PagingManager } from './paging.manager';
import { PagingConfigWithId } from './paging-config-with-id';
import * as i0 from "@angular/core";
export declare class PagingManagerFactory {
    private readonly logger;
    constructor(logger: Logger);
    createDefault(): PagingManager;
    createFromConfig(config: PagingConfigWithId): PagingManager;
    static ɵfac: i0.ɵɵFactoryDeclaration<PagingManagerFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<PagingManagerFactory>;
}
//# sourceMappingURL=paging.manager-factory.d.ts.map