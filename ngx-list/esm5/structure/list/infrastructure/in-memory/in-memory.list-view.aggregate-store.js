/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AggregateStoreRegister, InMemoryAggregateStore } from '@generic-ui/hermes';
import { InMemoryListViewStore } from './in-memory.list-view.store';
var InMemoryListViewAggregateStore = /** @class */ (function (_super) {
    tslib_1.__extends(InMemoryListViewAggregateStore, _super);
    function InMemoryListViewAggregateStore(inMemorySchemaStore, aggregateStoreRegister) {
        return _super.call(this, inMemorySchemaStore, aggregateStoreRegister) || this;
    }
    InMemoryListViewAggregateStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    InMemoryListViewAggregateStore.ctorParameters = function () { return [
        { type: InMemoryListViewStore },
        { type: AggregateStoreRegister }
    ]; };
    return InMemoryListViewAggregateStore;
}(InMemoryAggregateStore));
export { InMemoryListViewAggregateStore };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2luZnJhc3RydWN0dXJlL2luLW1lbW9yeS9pbi1tZW1vcnkubGlzdC12aWV3LmFnZ3JlZ2F0ZS1zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFLcEU7SUFDb0QsMERBQXFEO0lBRXhHLHdDQUFZLG1CQUEwQyxFQUNuRCxzQkFBOEM7ZUFDaEQsa0JBQU0sbUJBQW1CLEVBQUUsc0JBQXNCLENBQUM7SUFDbkQsQ0FBQzs7Z0JBTkQsVUFBVTs7OztnQkFMRixxQkFBcUI7Z0JBRnJCLHNCQUFzQjs7SUFlL0IscUNBQUM7Q0FBQSxBQVJELENBQ29ELHNCQUFzQixHQU96RTtTQVBZLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQWdncmVnYXRlU3RvcmVSZWdpc3RlciwgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEluTWVtb3J5TGlzdFZpZXdTdG9yZSB9IGZyb20gJy4vaW4tbWVtb3J5Lmxpc3Qtdmlldy5zdG9yZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0lkIH0gZnJvbSAnLi4vLi4vZG9tYWluL2xpc3Qtdmlldy5pZCc7XG5pbXBvcnQgeyBMaXN0Vmlld0FnZ3JlZ2F0ZSB9IGZyb20gJy4uLy4uL2RvbWFpbi9saXN0LXZpZXcuYWdncmVnYXRlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW5NZW1vcnlMaXN0Vmlld0FnZ3JlZ2F0ZVN0b3JlIGV4dGVuZHMgSW5NZW1vcnlBZ2dyZWdhdGVTdG9yZTxMaXN0Vmlld0lkLCBMaXN0Vmlld0FnZ3JlZ2F0ZT4ge1xuXG5cdGNvbnN0cnVjdG9yKGluTWVtb3J5U2NoZW1hU3RvcmU6IEluTWVtb3J5TGlzdFZpZXdTdG9yZSxcblx0XHRcdFx0YWdncmVnYXRlU3RvcmVSZWdpc3RlcjogQWdncmVnYXRlU3RvcmVSZWdpc3Rlcikge1xuXHRcdHN1cGVyKGluTWVtb3J5U2NoZW1hU3RvcmUsIGFnZ3JlZ2F0ZVN0b3JlUmVnaXN0ZXIpO1xuXHR9XG5cbn1cbiJdfQ==