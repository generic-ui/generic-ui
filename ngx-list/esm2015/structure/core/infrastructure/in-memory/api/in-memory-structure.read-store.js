/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryStructureStore } from '../in-memory.structure.store';
import { StructureReadModelRootConverter } from '../../../../grid/core/api/read/structure.read-model-root-converter';
export class InMemoryStructureReadStore extends InMemoryReadModelStore {
    /**
     * @param {?} inMemoryProjectStore
     * @param {?} structureConverter
     */
    constructor(inMemoryProjectStore, structureConverter) {
        super(inMemoryProjectStore);
        this.inMemoryProjectStore = inMemoryProjectStore;
        this.structureConverter = structureConverter;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    toReadModel(aggregate) {
        return this.structureConverter.convert(aggregate);
    }
}
InMemoryStructureReadStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryStructureReadStore.ctorParameters = () => [
    { type: InMemoryStructureStore },
    { type: StructureReadModelRootConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureReadStore.prototype.inMemoryProjectStore;
    /**
     * @type {?}
     * @private
     */
    InMemoryStructureReadStore.prototype.structureConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LXN0cnVjdHVyZS5yZWFkLXN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvY29yZS9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvYXBpL2luLW1lbW9yeS1zdHJ1Y3R1cmUucmVhZC1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxvRUFBb0UsQ0FBQztBQU1ySCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsc0JBRzVCOzs7OztJQUVuQixZQUFvQixvQkFBNEMsRUFDckQsa0JBQW1EO1FBQzdELEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRlQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF3QjtRQUNyRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQWlDO0lBRTlELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFNBQTZCO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7WUFiRCxVQUFVOzs7O1lBTkYsc0JBQXNCO1lBQ3RCLCtCQUErQjs7Ozs7OztJQVczQiwwREFBb0Q7Ozs7O0lBQzdELHdEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QgfSBmcm9tICcuLi8uLi8uLi8uLi9ncmlkL2NvcmUvYXBpL3JlYWQvc3RydWN0dXJlLnJlYWQtbW9kZWwtcm9vdCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZVN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LnN0cnVjdHVyZS5zdG9yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVSZWFkTW9kZWxSb290Q29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ3JpZC9jb3JlL2FwaS9yZWFkL3N0cnVjdHVyZS5yZWFkLW1vZGVsLXJvb3QtY29udmVydGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZVJlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2dyaWQvY29yZS9hcGkvcmVhZC9zdHJ1Y3R1cmUucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vYXBpL3N0cnVjdHVyZS5pZCc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U3RydWN0dXJlUmVhZFN0b3JlIGV4dGVuZHMgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZTxTdHJ1Y3R1cmVSZWFkTW9kZWxSb290SWQsXG5cdFN0cnVjdHVyZVJlYWRNb2RlbFJvb3QsXG5cdFN0cnVjdHVyZUlkLFxuXHRTdHJ1Y3R1cmVBZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluTWVtb3J5UHJvamVjdFN0b3JlOiBJbk1lbW9yeVN0cnVjdHVyZVN0b3JlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZUNvbnZlcnRlcjogU3RydWN0dXJlUmVhZE1vZGVsUm9vdENvbnZlcnRlcikge1xuXHRcdHN1cGVyKGluTWVtb3J5UHJvamVjdFN0b3JlKTtcblx0fVxuXG5cdHRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlKTogU3RydWN0dXJlUmVhZE1vZGVsUm9vdCB7XG5cdFx0cmV0dXJuIHRoaXMuc3RydWN0dXJlQ29udmVydGVyLmNvbnZlcnQoYWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=