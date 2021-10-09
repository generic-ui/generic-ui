/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureSetSummariesEnabledCommand } from './set/structure.set-summaries-enabled.command';
import { Injectable } from '@angular/core';
import { SummariesCommandInvoker } from '../api/summaries.command-invoker';
var SummariesDomainCommandInvoker = /** @class */ (function (_super) {
    tslib_1.__extends(SummariesDomainCommandInvoker, _super);
    function SummariesDomainCommandInvoker(commandDispatcher) {
        var _this = _super.call(this) || this;
        _this.commandDispatcher = commandDispatcher;
        return _this;
    }
    /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    SummariesDomainCommandInvoker.prototype.setSummariesEnabled = /**
     * @param {?} enabled
     * @param {?} structureId
     * @return {?}
     */
    function (enabled, structureId) {
        this.commandDispatcher.dispatch(new StructureSetSummariesEnabledCommand(structureId, enabled));
    };
    SummariesDomainCommandInvoker.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SummariesDomainCommandInvoker.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return SummariesDomainCommandInvoker;
}(SummariesCommandInvoker));
export { SummariesDomainCommandInvoker };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SummariesDomainCommandInvoker.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLmRvbWFpbi1jb21tYW5kLWludm9rZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zdW1tYXJpZXMvY29yZS9kb21haW4vc3VtbWFyaWVzLmRvbWFpbi1jb21tYW5kLWludm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNwRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRTNFO0lBQ21ELHlEQUF1QjtJQUV6RSx1Q0FBNkIsaUJBQW9DO1FBQWpFLFlBQ0MsaUJBQU8sU0FDUDtRQUY0Qix1QkFBaUIsR0FBakIsaUJBQWlCLENBQW1COztJQUVqRSxDQUFDOzs7Ozs7SUFFRCwyREFBbUI7Ozs7O0lBQW5CLFVBQW9CLE9BQWdCLEVBQUUsV0FBd0I7UUFDN0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLG1DQUFtQyxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7O2dCQVRELFVBQVU7Ozs7Z0JBTkYsaUJBQWlCOztJQWlCMUIsb0NBQUM7Q0FBQSxBQVhELENBQ21ELHVCQUF1QixHQVV6RTtTQVZZLDZCQUE2Qjs7Ozs7O0lBRTdCLDBEQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldFN1bW1hcmllc0VuYWJsZWRDb21tYW5kIH0gZnJvbSAnLi9zZXQvc3RydWN0dXJlLnNldC1zdW1tYXJpZXMtZW5hYmxlZC5jb21tYW5kJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1bW1hcmllc0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vYXBpL3N1bW1hcmllcy5jb21tYW5kLWludm9rZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3VtbWFyaWVzRG9tYWluQ29tbWFuZEludm9rZXIgZXh0ZW5kcyBTdW1tYXJpZXNDb21tYW5kSW52b2tlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0c2V0U3VtbWFyaWVzRW5hYmxlZChlbmFibGVkOiBib29sZWFuLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVTZXRTdW1tYXJpZXNFbmFibGVkQ29tbWFuZChzdHJ1Y3R1cmVJZCwgZW5hYmxlZCkpO1xuXHR9XG5cbn1cbiJdfQ==