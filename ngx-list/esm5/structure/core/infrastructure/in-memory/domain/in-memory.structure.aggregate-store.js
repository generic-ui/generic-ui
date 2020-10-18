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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5hZ2dyZWdhdGUtc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9kb21haW4vaW4tbWVtb3J5LnN0cnVjdHVyZS5hZ2dyZWdhdGUtc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBR3BGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSXRFO0lBQ3FELDJEQUF1RDtJQUUzRyx5Q0FBWSxzQkFBOEMsRUFDdkQsc0JBQThDO2VBQ2hELGtCQUFNLHNCQUFzQixFQUFFLHNCQUFzQixDQUFDO0lBQ3RELENBQUM7O2dCQU5ELFVBQVU7Ozs7Z0JBSkYsc0JBQXNCO2dCQUh0QixzQkFBc0I7O0lBYy9CLHNDQUFDO0NBQUEsQUFQRCxDQUNxRCxzQkFBc0IsR0FNMUU7U0FOWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIsIEluTWVtb3J5QWdncmVnYXRlU3RvcmUgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZVN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LnN0cnVjdHVyZS5zdG9yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVN0b3JlIGV4dGVuZHMgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZTxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IoaW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZTogSW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZSxcblx0XHRcdFx0YWdncmVnYXRlU3RvcmVSZWdpc3RlcjogQWdncmVnYXRlU3RvcmVSZWdpc3Rlcikge1xuXHRcdHN1cGVyKGluTWVtb3J5U3RydWN0dXJlU3RvcmUsIGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIpO1xuXHR9XG59XG4iXX0=