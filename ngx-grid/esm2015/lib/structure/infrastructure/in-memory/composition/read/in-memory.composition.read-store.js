/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionConverter } from '../../../../domain/composition/composition.converter';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2NvbXBvc2l0aW9uL3JlYWQvaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnJlYWQtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFJNUYsTUFBTSxPQUFPLDRCQUE2QixTQUFRLHNCQUF5RDs7Ozs7SUFFMUcsWUFBb0Isd0JBQWtELEVBQzNELG9CQUEwQztRQUNwRCxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUZiLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUVyRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxTQUErQjtRQUMxQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBVkQsVUFBVTs7OztZQUpGLHdCQUF3QjtZQUN4QixvQkFBb0I7Ozs7Ozs7SUFNaEIsZ0VBQTBEOzs7OztJQUNuRSw0REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5UmVhZE1vZGVsU3RvcmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9yZWFkL2NvbXBvc2l0aW9uJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL2NvbXBvc2l0aW9uL2NvbW1hbmQvY29tcG9zaXRpb24uYWdncmVnYXRlJztcbmltcG9ydCB7IEluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5jb21wb3NpdGlvbi5zdG9yZSc7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkNvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21wb3NpdGlvbi5jb252ZXJ0ZXInO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeUNvbXBvc2l0aW9uUmVhZFN0b3JlIGV4dGVuZHMgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZTxDb21wb3NpdGlvbiwgQ29tcG9zaXRpb25BZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGluTWVtb3J5Q29tcG9zaXRpb25TdG9yZTogSW5NZW1vcnlDb21wb3NpdGlvblN0b3JlLFxuXHRcdFx0XHRwcml2YXRlIGNvbXBvc2l0aW9uQ29udmVydGVyOiBDb21wb3NpdGlvbkNvbnZlcnRlcikge1xuXHRcdHN1cGVyKGluTWVtb3J5Q29tcG9zaXRpb25TdG9yZSk7XG5cdH1cblxuXHR0b1JlYWRNb2RlbChhZ2dyZWdhdGU6IENvbXBvc2l0aW9uQWdncmVnYXRlKTogQ29tcG9zaXRpb24ge1xuXHRcdHJldHVybiB0aGlzLmNvbXBvc2l0aW9uQ29udmVydGVyLmNvbnZlcnQoYWdncmVnYXRlKTtcblx0fVxuXG59XG4iXX0=