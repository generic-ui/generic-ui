import { SourceManager } from './source.manager';
import { FormationManagerFactory } from '../formation/core/formation.manager-factory';
import * as i0 from "@angular/core";
export declare class SourceManagerFactory {
    private readonly formationManagerFactory;
    constructor(formationManagerFactory: FormationManagerFactory);
    createDefault(): SourceManager;
    create(): SourceManager;
    static ɵfac: i0.ɵɵFactoryDeclaration<SourceManagerFactory, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SourceManagerFactory>;
}
//# sourceMappingURL=source.manager-factory.d.ts.map