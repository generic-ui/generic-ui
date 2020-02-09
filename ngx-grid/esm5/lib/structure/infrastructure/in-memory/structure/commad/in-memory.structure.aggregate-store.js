/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregateStoreRegister, InMemoryAggregateStore } from '@generic-ui/hermes';
import { InMemoryStructureStore } from '../in-memory.structure.store';
var InMemoryStructureAggregateStore = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryStructureAggregateStore, _super);
    function InMemoryStructureAggregateStore(inMemoryStructureStore, aggregateStoreRegister) {
        return _super.call(this, inMemoryStructureStore, aggregateStoreRegister) || this;
    }
    InMemoryStructureAggregateStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryStructureAggregateStore.ctorParameters = function () { return [
        { type: InMemoryStructureStore },
        { type: AggregateStoreRegister }
    ]; };
    return InMemoryStructureAggregateStore;
}(InMemoryAggregateStore));
export { InMemoryStructureAggregateStore };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5hZ2dyZWdhdGUtc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L3N0cnVjdHVyZS9jb21tYWQvaW4tbWVtb3J5LnN0cnVjdHVyZS5hZ2dyZWdhdGUtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3RFO0lBQ3FELDJEQUEwQztJQUU5Rix5Q0FBWSxzQkFBOEMsRUFDdkQsc0JBQThDO2VBQ2hELGtCQUFNLHNCQUFzQixFQUFFLHNCQUFzQixDQUFDO0lBQ3RELENBQUM7O2dCQU5ELFVBQVU7Ozs7Z0JBSEYsc0JBQXNCO2dCQUh0QixzQkFBc0I7O0lBYS9CLHNDQUFDO0NBQUEsQUFQRCxDQUNxRCxzQkFBc0IsR0FNMUU7U0FOWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIsIEluTWVtb3J5QWdncmVnYXRlU3RvcmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZVN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LnN0cnVjdHVyZS5zdG9yZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U3RydWN0dXJlQWdncmVnYXRlU3RvcmUgZXh0ZW5kcyBJbk1lbW9yeUFnZ3JlZ2F0ZVN0b3JlPFN0cnVjdHVyZUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKGluTWVtb3J5U3RydWN0dXJlU3RvcmU6IEluTWVtb3J5U3RydWN0dXJlU3RvcmUsXG5cdFx0XHRcdGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXI6IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIpIHtcblx0XHRzdXBlcihpbk1lbW9yeVN0cnVjdHVyZVN0b3JlLCBhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKTtcblx0fVxufVxuIl19