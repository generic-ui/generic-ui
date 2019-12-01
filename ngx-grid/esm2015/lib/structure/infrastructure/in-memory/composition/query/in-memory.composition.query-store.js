/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryCompositionStore } from '../in-memory.composition.store';
import { CompositionConverter } from '../../../../domain/composition/composition.converter';
export class InMemoryCompositionQueryStore extends InMemoryReadModelStore {
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
InMemoryCompositionQueryStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
InMemoryCompositionQueryStore.ctorParameters = () => [
    { type: InMemoryCompositionStore },
    { type: CompositionConverter }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionQueryStore.prototype.inMemoryCompositionStore;
    /**
     * @type {?}
     * @private
     */
    InMemoryCompositionQueryStore.prototype.compositionConverter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LmNvbXBvc2l0aW9uLnF1ZXJ5LXN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9jb21wb3NpdGlvbi9xdWVyeS9pbi1tZW1vcnkuY29tcG9zaXRpb24ucXVlcnktc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFJNUYsTUFBTSxPQUFPLDZCQUE4QixTQUFRLHNCQUF5RDs7Ozs7SUFFM0csWUFBb0Isd0JBQWtELEVBQzNELG9CQUEwQztRQUNwRCxLQUFLLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUZiLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDM0QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUVyRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxTQUErQjtRQUMxQyxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBVkQsVUFBVTs7OztZQUpGLHdCQUF3QjtZQUN4QixvQkFBb0I7Ozs7Ozs7SUFNaEIsaUVBQTBEOzs7OztJQUNuRSw2REFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEluTWVtb3J5UmVhZE1vZGVsU3RvcmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBDb21wb3NpdGlvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9xdWVyeS9jb21wb3NpdGlvbic7XG5pbXBvcnQgeyBDb21wb3NpdGlvbkFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9jb21wb3NpdGlvbi9jb21tYW5kL2NvbXBvc2l0aW9uLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUgfSBmcm9tICcuLi9pbi1tZW1vcnkuY29tcG9zaXRpb24uc3RvcmUnO1xuaW1wb3J0IHsgQ29tcG9zaXRpb25Db252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vY29tcG9zaXRpb24vY29tcG9zaXRpb24uY29udmVydGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlDb21wb3NpdGlvblF1ZXJ5U3RvcmUgZXh0ZW5kcyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlPENvbXBvc2l0aW9uLCBDb21wb3NpdGlvbkFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgaW5NZW1vcnlDb21wb3NpdGlvblN0b3JlOiBJbk1lbW9yeUNvbXBvc2l0aW9uU3RvcmUsXG5cdFx0XHRcdHByaXZhdGUgY29tcG9zaXRpb25Db252ZXJ0ZXI6IENvbXBvc2l0aW9uQ29udmVydGVyKSB7XG5cdFx0c3VwZXIoaW5NZW1vcnlDb21wb3NpdGlvblN0b3JlKTtcblx0fVxuXG5cdHRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZTogQ29tcG9zaXRpb25BZ2dyZWdhdGUpOiBDb21wb3NpdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25Db252ZXJ0ZXIuY29udmVydChhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==