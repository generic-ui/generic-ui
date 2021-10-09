/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { SearchDispatcher } from './search.dispatcher';
import { SearchCommandInvoker } from '../api/search.command-invoker';
export class SearchDomainCommandInvoker extends SearchCommandInvoker {
    /**
     * @param {?} searchDispatcher
     */
    constructor(searchDispatcher) {
        super();
        this.searchDispatcher = searchDispatcher;
    }
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    setSearchingConfig(config, structureId) {
        this.searchDispatcher.setSearchingConfig(config, structureId);
    }
    /**
     * @param {?} phrase
     * @param {?} structureId
     * @return {?}
     */
    search(phrase, structureId) {
        this.searchDispatcher.search(phrase, structureId);
    }
}
SearchDomainCommandInvoker.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchDomainCommandInvoker.ctorParameters = () => [
    { type: SearchDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchDomainCommandInvoker.prototype.searchDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9kb21haW4vc2VhcmNoLmRvbWFpbi1jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFJckUsTUFBTSxPQUFPLDBCQUEyQixTQUFRLG9CQUFvQjs7OztJQUVuRSxZQUE2QixnQkFBa0M7UUFDOUQsS0FBSyxFQUFFLENBQUM7UUFEb0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUUvRCxDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxNQUFvQixFQUFFLFdBQXdCO1FBQ2hFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLE1BQWMsRUFBRSxXQUF3QjtRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7WUFiRCxVQUFVOzs7O1lBTkYsZ0JBQWdCOzs7Ozs7O0lBU1osc0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoRGlzcGF0Y2hlciB9IGZyb20gJy4vc2VhcmNoLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vYXBpL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoQ29tbWFuZEludm9rZXIgfSBmcm9tICcuLi9hcGkvc2VhcmNoLmNvbW1hbmQtaW52b2tlcic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaERvbWFpbkNvbW1hbmRJbnZva2VyIGV4dGVuZHMgU2VhcmNoQ29tbWFuZEludm9rZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoRGlzcGF0Y2hlcjogU2VhcmNoRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoRGlzcGF0Y2hlci5zZXRTZWFyY2hpbmdDb25maWcoY29uZmlnLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRzZWFyY2gocGhyYXNlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuc2VhcmNoRGlzcGF0Y2hlci5zZWFyY2gocGhyYXNlLCBzdHJ1Y3R1cmVJZCk7XG5cdH1cbn1cbiJdfQ==