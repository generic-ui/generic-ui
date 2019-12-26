/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { InMemoryReadModelStore } from '@generic-ui/hermes';
import { InMemoryStructureStore } from '../in-memory.structure.store';
import { StructureConverter } from '../../../../domain/structure/structure.converter';
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
    { type: StructureConverter }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LXN0cnVjdHVyZS5yZWFkLXN0b3JlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9zdHJ1Y3R1cmUvcmVhZC9pbi1tZW1vcnktc3RydWN0dXJlLnJlYWQtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJNUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJdEYsTUFBTSxPQUFPLDBCQUEyQixTQUFRLHNCQUFxRDs7Ozs7SUFFcEcsWUFBb0Isb0JBQTRDLEVBQ3JELGtCQUFzQztRQUNoRCxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUZULHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBd0I7UUFDckQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtJQUVqRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxTQUE2QjtRQUN4QyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7O1lBVkQsVUFBVTs7OztZQUpGLHNCQUFzQjtZQUN0QixrQkFBa0I7Ozs7Ozs7SUFNZCwwREFBb0Q7Ozs7O0lBQzdELHdEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgSW5NZW1vcnlSZWFkTW9kZWxTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZSB9IGZyb20gJy4uLy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zdHJ1Y3R1cmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3N0cnVjdHVyZS5hZ2dyZWdhdGUnO1xuaW1wb3J0IHsgSW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZSB9IGZyb20gJy4uL2luLW1lbW9yeS5zdHJ1Y3R1cmUuc3RvcmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zdHJ1Y3R1cmUuY29udmVydGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlTdHJ1Y3R1cmVSZWFkU3RvcmUgZXh0ZW5kcyBJbk1lbW9yeVJlYWRNb2RlbFN0b3JlPFN0cnVjdHVyZSwgU3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBpbk1lbW9yeVByb2plY3RTdG9yZTogSW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZSxcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVDb252ZXJ0ZXI6IFN0cnVjdHVyZUNvbnZlcnRlcikge1xuXHRcdHN1cGVyKGluTWVtb3J5UHJvamVjdFN0b3JlKTtcblx0fVxuXG5cdHRvUmVhZE1vZGVsKGFnZ3JlZ2F0ZTogU3RydWN0dXJlQWdncmVnYXRlKTogU3RydWN0dXJlIHtcblx0XHRyZXR1cm4gdGhpcy5zdHJ1Y3R1cmVDb252ZXJ0ZXIuY29udmVydChhZ2dyZWdhdGUpO1xuXHR9XG5cbn1cbiJdfQ==