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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnN0cnVjdHVyZS5hZ2dyZWdhdGUtc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2RvbWFpbi9pbi1tZW1vcnkuc3RydWN0dXJlLmFnZ3JlZ2F0ZS1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJdEU7SUFDcUQsMkRBQXVEO0lBRTNHLHlDQUFZLHNCQUE4QyxFQUN2RCxzQkFBOEM7ZUFDaEQsa0JBQU0sc0JBQXNCLEVBQUUsc0JBQXNCLENBQUM7SUFDdEQsQ0FBQzs7Z0JBTkQsVUFBVTs7OztnQkFKRixzQkFBc0I7Z0JBSHRCLHNCQUFzQjs7SUFjL0Isc0NBQUM7Q0FBQSxBQVBELENBQ3FELHNCQUFzQixHQU0xRTtTQU5ZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciwgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUFnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc3RydWN0dXJlLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVN0cnVjdHVyZVN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LnN0cnVjdHVyZS5zdG9yZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeVN0cnVjdHVyZUFnZ3JlZ2F0ZVN0b3JlIGV4dGVuZHMgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZTxTdHJ1Y3R1cmVJZCwgU3RydWN0dXJlQWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IoaW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZTogSW5NZW1vcnlTdHJ1Y3R1cmVTdG9yZSxcblx0XHRcdFx0YWdncmVnYXRlU3RvcmVSZWdpc3RlcjogQWdncmVnYXRlU3RvcmVSZWdpc3Rlcikge1xuXHRcdHN1cGVyKGluTWVtb3J5U3RydWN0dXJlU3RvcmUsIGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIpO1xuXHR9XG59XG4iXX0=