/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregateStoreRegister, InMemoryAggregateStore } from '@generic-ui/hermes';
import { InMemorySchemaStore } from '../in-memory.schema.store';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5LnNjaGVtYS5hZ2dyZWdhdGUtc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zY2hlbWEvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2RvbWFpbi9pbi1tZW1vcnkuc2NoZW1hLmFnZ3JlZ2F0ZS1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJcEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHaEU7SUFDa0Qsd0RBQWlEO0lBRWxHLHNDQUFZLG1CQUF3QyxFQUNqRCxzQkFBOEM7ZUFDaEQsa0JBQU0sbUJBQW1CLEVBQUUsc0JBQXNCLENBQUM7SUFDbkQsQ0FBQzs7Z0JBTkQsVUFBVTs7OztnQkFIRixtQkFBbUI7Z0JBSm5CLHNCQUFzQjs7SUFlL0IsbUNBQUM7Q0FBQSxBQVJELENBQ2tELHNCQUFzQixHQU92RTtTQVBZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciwgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3NjaGVtYS5pZCc7XG5pbXBvcnQgeyBTY2hlbWFBZ2dyZWdhdGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc2NoZW1hLmFnZ3JlZ2F0ZSc7XG5pbXBvcnQgeyBJbk1lbW9yeVNjaGVtYVN0b3JlIH0gZnJvbSAnLi4vaW4tbWVtb3J5LnNjaGVtYS5zdG9yZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluTWVtb3J5U2NoZW1hQWdncmVnYXRlU3RvcmUgZXh0ZW5kcyBJbk1lbW9yeUFnZ3JlZ2F0ZVN0b3JlPFNjaGVtYUlkLCBTY2hlbWFBZ2dyZWdhdGU+IHtcblxuXHRjb25zdHJ1Y3Rvcihpbk1lbW9yeVNjaGVtYVN0b3JlOiBJbk1lbW9yeVNjaGVtYVN0b3JlLFxuXHRcdFx0XHRhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyOiBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKSB7XG5cdFx0c3VwZXIoaW5NZW1vcnlTY2hlbWFTdG9yZSwgYWdncmVnYXRlU3RvcmVSZWdpc3Rlcik7XG5cdH1cblxufVxuIl19