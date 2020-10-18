/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregateStoreRegister, InMemoryAggregateStore } from '@generic-ui/hermes';
import { InMemorySchemaStore } from './in-memory.schema.store';
var InMemorySchemaAggregateStore = /** @class */ (function (_super) {
    tslib_1.__extends(InMemorySchemaAggregateStore, _super);
    function InMemorySchemaAggregateStore(inMemorySchemaStore, aggregateStoreRegister) {
        return _super.call(this, inMemorySchemaStore, aggregateStoreRegister) || this;
    }
    InMemorySchemaAggregateStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemorySchemaAggregateStore.ctorParameters = function () { return [
        { type: InMemorySchemaStore },
        { type: AggregateStoreRegister }
    ]; };
    return InMemorySchemaAggregateStore;
}(InMemoryAggregateStore));
export { InMemorySchemaAggregateStore };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInNjaGVtYS9jb3JlL2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkuc2NoZW1hLmFnZ3JlZ2F0ZS1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHL0Q7SUFDa0Qsd0RBQWlEO0lBRWxHLHNDQUFZLG1CQUF3QyxFQUNqRCxzQkFBOEM7ZUFDaEQsa0JBQU0sbUJBQW1CLEVBQUUsc0JBQXNCLENBQUM7SUFDbkQsQ0FBQzs7Z0JBTkQsVUFBVTs7OztnQkFIRixtQkFBbUI7Z0JBSm5CLHNCQUFzQjs7SUFlL0IsbUNBQUM7Q0FBQSxBQVJELENBQ2tELHNCQUFzQixHQU92RTtTQVBZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciwgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vYXBpL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYVN0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkuc2NoZW1hLnN0b3JlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlTY2hlbWFBZ2dyZWdhdGVTdG9yZSBleHRlbmRzIEluTWVtb3J5QWdncmVnYXRlU3RvcmU8U2NoZW1hSWQsIFNjaGVtYUFnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKGluTWVtb3J5U2NoZW1hU3RvcmU6IEluTWVtb3J5U2NoZW1hU3RvcmUsXG5cdFx0XHRcdGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXI6IEFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIpIHtcblx0XHRzdXBlcihpbk1lbW9yeVNjaGVtYVN0b3JlLCBhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKTtcblx0fVxuXG59XG4iXX0=