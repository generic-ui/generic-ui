/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionConverter } from '../../../domain/composition.converter';
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
    { type: CompositionConverter }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvcmVhZC9pbi1tZW1vcnkuY29tcG9zaXRpb24ucmVhZC1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk1RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUk3RSxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsc0JBQXlEOzs7OztJQUUxRyxZQUFvQix3QkFBa0QsRUFDM0Qsb0JBQTBDO1FBQ3BELEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBRmIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUMzRCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBRXJELENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLFNBQStCO1FBQzFDLE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7WUFWRCxVQUFVOzs7O1lBSkYsd0JBQXdCO1lBQ3hCLG9CQUFvQjs7Ozs7OztJQU1oQixnRUFBMEQ7Ozs7O0lBQ25FLDREQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IENvbXBvc2l0aW9uIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3JlYWQvY29tcG9zaXRpb24nO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25BZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tbWFuZC9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvblN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnN0b3JlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uLmNvbnZlcnRlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5Q29tcG9zaXRpb25SZWFkU3RvcmUgZXh0ZW5kcyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlPENvbXBvc2l0aW9uLCBDb21wb3NpdGlvbkFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5NZW1vcnlDb21wb3NpdGlvblN0b3JlOiBJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25Db252ZXJ0ZXI6IENvbXBvc2l0aW9uQ29udmVydGVyKSB7XG5cdFx0c3VwZXIoaW5NZW1vcnlDb21wb3NpdGlvblN0b3JlKTtcblx0fVxuXG5cdHRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUpOiBDb21wb3NpdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25Db252ZXJ0ZXIuY29udmVydChhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==