/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionReadModelRootConverter } from '../../../domain-api/read/composition.read-model-root-converter';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9pbmZyYXN0cnVjdHVyZS9pbi1tZW1vcnkvZmVhdHVyZS1hcGkvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sZ0VBQWdFLENBQUM7QUFNbkgsTUFBTSxPQUFPLDRCQUE2QixTQUFRLHNCQUc1Qjs7Ozs7SUFFckIsWUFBb0Isd0JBQWtELEVBQzNELG9CQUF1RDtRQUNqRSxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUZiLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFtQztJQUVsRSxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxTQUErQjtRQUMxQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBYkQsVUFBVTs7OztZQU5GLHdCQUF3QjtZQUN4QixpQ0FBaUM7Ozs7Ozs7SUFXN0IsZ0VBQTBEOzs7OztJQUNuRSw0REFBK0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5UmVhZE1vZGVsU3RvcmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvblJlYWRNb2RlUm9vdCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGUtcm9vdCc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgSW5NZW1vcnlDb21wb3NpdGlvblN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnN0b3JlJztcbmltcG9ydCB7IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvcmVhZC9jb21wb3NpdGlvbi5yZWFkLW1vZGVsLXJvb3QtY29udmVydGVyJztcbmltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3JlYWQvY29tcG9zaXRpb24ucmVhZC1tb2RlbC1yb290LWlkJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlDb21wb3NpdGlvblJlYWRTdG9yZSBleHRlbmRzIEluTWVtb3J5UmVhZE1vZGVsU3RvcmU8Q29tcG9zaXRpb25SZWFkTW9kZWxSb290SWQsXG5cdENvbXBvc2l0aW9uUmVhZE1vZGVSb290LFxuXHRDb21wb3NpdGlvbklkLFxuXHRDb21wb3NpdGlvbkFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5NZW1vcnlDb21wb3NpdGlvblN0b3JlOiBJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25Db252ZXJ0ZXI6IENvbXBvc2l0aW9uUmVhZE1vZGVsUm9vdENvbnZlcnRlcikge1xuXHRcdHN1cGVyKGluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSk7XG5cdH1cblxuXHR0b1JlYWRNb2RlbChhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlKTogQ29tcG9zaXRpb25SZWFkTW9kZVJvb3Qge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uQ29udmVydGVyLmNvbnZlcnQoYWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=