/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { SearchDispatcher } from './search.dispatcher';
import { SearchCommandInvoker } from '../api/search.command-invoker';
var SearchDomainCommandInvoker = /** @class */ (function (_super) {
    tslib_1.__extends(SearchDomainCommandInvoker, _super);
    function SearchDomainCommandInvoker(searchDispatcher) {
        var _this = _super.call(this) || this;
        _this.searchDispatcher = searchDispatcher;
        return _this;
    }
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    SearchDomainCommandInvoker.prototype.setSearchingConfig = /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    function (config, structureId) {
        this.searchDispatcher.setSearchingConfig(config, structureId);
    };
    /**
     * @param {?} phrase
     * @param {?} structureId
     * @return {?}
     */
    SearchDomainCommandInvoker.prototype.search = /**
     * @param {?} phrase
     * @param {?} structureId
     * @return {?}
     */
    function (phrase, structureId) {
        this.searchDispatcher.search(phrase, structureId);
    };
    SearchDomainCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SearchDomainCommandInvoker.ctorParameters = function () { return [
        { type: SearchDispatcher }
    ]; };
    return SearchDomainCommandInvoker;
}(SearchCommandInvoker));
export { SearchDomainCommandInvoker };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchDomainCommandInvoker.prototype.searchDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9kb21haW4vc2VhcmNoLmRvbWFpbi1jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR3ZELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3JFO0lBQ2dELHNEQUFvQjtJQUVuRSxvQ0FBNkIsZ0JBQWtDO1FBQS9ELFlBQ0MsaUJBQU8sU0FDUDtRQUY0QixzQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCOztJQUUvRCxDQUFDOzs7Ozs7SUFFRCx1REFBa0I7Ozs7O0lBQWxCLFVBQW1CLE1BQW9CLEVBQUUsV0FBd0I7UUFDaEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7Ozs7SUFFRCwyQ0FBTTs7Ozs7SUFBTixVQUFPLE1BQWMsRUFBRSxXQUF3QjtRQUM5QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDOztnQkFiRCxVQUFVOzs7O2dCQU5GLGdCQUFnQjs7SUFvQnpCLGlDQUFDO0NBQUEsQUFkRCxDQUNnRCxvQkFBb0IsR0FhbkU7U0FiWSwwQkFBMEI7Ozs7OztJQUUxQixzREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hEaXNwYXRjaGVyIH0gZnJvbSAnLi9zZWFyY2guZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi9hcGkvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWFyY2hDb21tYW5kSW52b2tlciB9IGZyb20gJy4uL2FwaS9zZWFyY2guY29tbWFuZC1pbnZva2VyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoRG9tYWluQ29tbWFuZEludm9rZXIgZXh0ZW5kcyBTZWFyY2hDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzZWFyY2hEaXNwYXRjaGVyOiBTZWFyY2hEaXNwYXRjaGVyKSB7XG5cdFx0c3VwZXIoKTtcblx0fVxuXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hEaXNwYXRjaGVyLnNldFNlYXJjaGluZ0NvbmZpZyhjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hEaXNwYXRjaGVyLnNlYXJjaChwaHJhc2UsIHN0cnVjdHVyZUlkKTtcblx0fVxufVxuIl19