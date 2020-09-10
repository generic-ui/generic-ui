/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { structureGlobalId } from '../../core/domain-api/structure.global-id';
import { SearchDispatcher } from '../domain/search.dispatcher';
var SearchCommandInvoker = /** @class */ (function () {
    function SearchCommandInvoker(searchDispatcher) {
        this.searchDispatcher = searchDispatcher;
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    SearchCommandInvoker.prototype.setSearchingConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.searchDispatcher.setSearchingConfig(config, structureId);
    };
    /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    SearchCommandInvoker.prototype.search = /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    function (phrase, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.searchDispatcher.search(phrase, structureId);
    };
    SearchCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SearchCommandInvoker.ctorParameters = function () { return [
        { type: SearchDispatcher }
    ]; };
    return SearchCommandInvoker;
}());
export { SearchCommandInvoker };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchCommandInvoker.prototype.searchDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbW1hbmQtaW52b2tlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsic3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC5jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFOUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFHL0Q7SUFHQyw4QkFBNkIsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFDL0QsQ0FBQzs7Ozs7O0lBRUQsaURBQWtCOzs7OztJQUFsQixVQUFtQixNQUFvQixFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ3BGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7O0lBRUQscUNBQU07Ozs7O0lBQU4sVUFBTyxNQUFjLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFDbEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Z0JBWkQsVUFBVTs7OztnQkFIRixnQkFBZ0I7O0lBZ0J6QiwyQkFBQztDQUFBLEFBYkQsSUFhQztTQVpZLG9CQUFvQjs7Ozs7O0lBRXBCLGdEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZEludm9rZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uL2NvcmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4vc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTZWFyY2hEaXNwYXRjaGVyIH0gZnJvbSAnLi4vZG9tYWluL3NlYXJjaC5kaXNwYXRjaGVyJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoQ29tbWFuZEludm9rZXIgaW1wbGVtZW50cyBDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBzZWFyY2hEaXNwYXRjaGVyOiBTZWFyY2hEaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5zZWFyY2hEaXNwYXRjaGVyLnNldFNlYXJjaGluZ0NvbmZpZyhjb25maWcsIHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLnNlYXJjaERpc3BhdGNoZXIuc2VhcmNoKHBocmFzZSwgc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=