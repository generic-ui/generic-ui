/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionReadModelRootConverter } from '../../../domain-read/composition.read-model-root-converter';
export class InMemoryCompositionReadStore extends InMemoryReadModelStore {
    /**
     * @param {?} inMemoryCompositionStore
     * @param {?} compositionConverter
     */
    constructor(inMemoryCompositionStore, compositionConverter) {
        super(inMemoryCompositionStore);
        this.inMemoryCompositionStore = inMemoryCompositionStore;
        this.compositionConverter = compositionConverter;
    }
    /**
     * @param {?} aggregate
     * @return {?}
     */
    toReadModel(aggregate) {
        return this.compositionConverter.convert(aggregate);
    }
}
InMemoryCompositionReadStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryCompositionReadStore.ctorParameters = () => [
    { type: InMemoryCompositionStore },
    { type: CompositionReadModelRootConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionReadStore.prototype.inMemoryCompositionStore;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionReadStore.prototype.compositionConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2FwaS9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVhZC1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQU0vRyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsc0JBRzVCOzs7OztJQUVyQixZQUFvQix3QkFBa0QsRUFDM0Qsb0JBQXVEO1FBQ2pFLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRmIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUMzRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQW1DO0lBRWxFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFNBQStCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7WUFiRCxVQUFVOzs7O1lBTkYsd0JBQXdCO1lBQ3hCLGlDQUFpQzs7Ozs7OztJQVc3QixnRUFBMEQ7Ozs7O0lBQ25FLDREQUErRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVSb290IH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLXJlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlLXJvb3QnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24uYWdncmVnYXRlJztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5jb21wb3NpdGlvbi5zdG9yZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtY29udmVydGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlIGV4dGVuZHMgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZTxDb21wb3NpdGlvblJlYWRNb2RlbFJvb3RJZCxcblx0Q29tcG9zaXRpb25SZWFkTW9kZVJvb3QsXG5cdENvbXBvc2l0aW9uSWQsXG5cdENvbXBvc2l0aW9uQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmU6IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSxcblx0XHRcdFx0cHJpdmF0ZSBjb21wb3NpdGlvbkNvbnZlcnRlcjogQ29tcG9zaXRpb25SZWFkTW9kZWxSb290Q29udmVydGVyKSB7XG5cdFx0c3VwZXIoaW5NZW1vcnlDb21wb3NpdGlvblN0b3JlKTtcblx0fVxuXG5cdHRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUpOiBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25Db252ZXJ0ZXIuY29udmVydChhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==