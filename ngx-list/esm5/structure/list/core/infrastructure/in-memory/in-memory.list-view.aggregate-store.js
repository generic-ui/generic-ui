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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW4tbWVtb3J5Lmxpc3Qtdmlldy5hZ2dyZWdhdGUtc3RvcmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2NvcmUvaW5mcmFzdHJ1Y3R1cmUvaW4tbWVtb3J5L2luLW1lbW9yeS5saXN0LXZpZXcuYWdncmVnYXRlLXN0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUtwRTtJQUNvRCwwREFBcUQ7SUFFeEcsd0NBQVksbUJBQTBDLEVBQ25ELHNCQUE4QztlQUNoRCxrQkFBTSxtQkFBbUIsRUFBRSxzQkFBc0IsQ0FBQztJQUNuRCxDQUFDOztnQkFORCxVQUFVOzs7O2dCQUxGLHFCQUFxQjtnQkFGckIsc0JBQXNCOztJQWUvQixxQ0FBQztDQUFBLEFBUkQsQ0FDb0Qsc0JBQXNCLEdBT3pFO1NBUFksOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyLCBJbk1lbW9yeUFnZ3JlZ2F0ZVN0b3JlIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgSW5NZW1vcnlMaXN0Vmlld1N0b3JlIH0gZnJvbSAnLi9pbi1tZW1vcnkubGlzdC12aWV3LnN0b3JlJztcbmltcG9ydCB7IExpc3RWaWV3SWQgfSBmcm9tICcuLi8uLi9kb21haW4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IExpc3RWaWV3QWdncmVnYXRlIH0gZnJvbSAnLi4vLi4vZG9tYWluL2xpc3Qtdmlldy5hZ2dyZWdhdGUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbk1lbW9yeUxpc3RWaWV3QWdncmVnYXRlU3RvcmUgZXh0ZW5kcyBJbk1lbW9yeUFnZ3JlZ2F0ZVN0b3JlPExpc3RWaWV3SWQsIExpc3RWaWV3QWdncmVnYXRlPiB7XG5cblx0Y29uc3RydWN0b3IoaW5NZW1vcnlTY2hlbWFTdG9yZTogSW5NZW1vcnlMaXN0Vmlld1N0b3JlLFxuXHRcdFx0XHRhZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyOiBBZ2dyZWdhdGVTdG9yZVJlZ2lzdGVyKSB7XG5cdFx0c3VwZXIoaW5NZW1vcnlTY2hlbWFTdG9yZSwgYWdncmVnYXRlU3RvcmVSZWdpc3Rlcik7XG5cdH1cblxufVxuIl19