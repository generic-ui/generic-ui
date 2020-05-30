/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { SearchDispatcher } from '../../../../../structure/search/domain/search.dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { Override } from '../../../../../common/cdk/decorators';
import { SearchHighlightArchive } from '../../../../../structure/search/domain-api/highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from '../../../../../structure/search/domain-api/placeholder/search-placeholder.archive';
var LocalStructureSearchCommandDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStructureSearchCommandDispatcher, _super);
    function LocalStructureSearchCommandDispatcher(structureId, commandDispatcher, structureSearchHighlightArchive, structureSearchPlaceholderArchive) {
        var _this = _super.call(this, commandDispatcher, structureSearchHighlightArchive, structureSearchPlaceholderArchive) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    LocalStructureSearchCommandDispatcher.prototype.setSearchingConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        _super.prototype.setSearchingConfig.call(this, config, this.structureId);
    };
    /**
     * @param {?} phrase
     * @return {?}
     */
    LocalStructureSearchCommandDispatcher.prototype.search = /**
     * @param {?} phrase
     * @return {?}
     */
    function (phrase) {
        _super.prototype.search.call(this, phrase, this.structureId);
    };
    LocalStructureSearchCommandDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStructureSearchCommandDispatcher.ctorParameters = function () { return [
        { type: StructureId },
        { type: CommandDispatcher },
        { type: SearchHighlightArchive },
        { type: SearchPlaceholderArchive }
    ]; };
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureSearchCommandDispatcher.prototype, "setSearchingConfig", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureSearchCommandDispatcher.prototype, "search", null);
    return LocalStructureSearchCommandDispatcher;
}(SearchDispatcher));
export { LocalStructureSearchCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureSearchCommandDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXNlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9sb2NhbC9zZWFyY2gvbG9jYWwtc3RydWN0dXJlLXNlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDdkgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFHN0g7SUFDMkQsaUVBQWdCO0lBRTFFLCtDQUFvQixXQUF3QixFQUN6QyxpQkFBb0MsRUFDcEMsK0JBQXVELEVBQ3ZELGlDQUEyRDtRQUg5RCxZQUlDLGtCQUFNLGlCQUFpQixFQUFFLCtCQUErQixFQUFFLGlDQUFpQyxDQUFDLFNBQzVGO1FBTG1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUs1QyxDQUFDOzs7OztJQUdELGtFQUFrQjs7OztJQUFsQixVQUFtQixNQUFvQjtRQUN0QyxpQkFBTSxrQkFBa0IsWUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBR0Qsc0RBQU07Ozs7SUFBTixVQUFPLE1BQWM7UUFDcEIsaUJBQU0sTUFBTSxZQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBbEJELFVBQVU7Ozs7Z0JBUEYsV0FBVztnQkFIWCxpQkFBaUI7Z0JBTWpCLHNCQUFzQjtnQkFDdEIsd0JBQXdCOztJQWNoQztRQURDLFFBQVE7Ozs7bUZBR1I7SUFHRDtRQURDLFFBQVE7Ozs7dUVBR1I7SUFDRiw0Q0FBQztDQUFBLEFBbkJELENBQzJELGdCQUFnQixHQWtCMUU7U0FsQlkscUNBQXFDOzs7Ozs7SUFFckMsNERBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNlYXJjaERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2RvbWFpbi9zZWFyY2guZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9kb21haW4tYXBpL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvZG9tYWluLWFwaS9oaWdobGlnaHQvc2VhcmNoLWhpZ2hsaWdodC5hcmNoaXZlJztcbmltcG9ydCB7IFNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvZG9tYWluLWFwaS9wbGFjZWhvbGRlci9zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RydWN0dXJlU2VhcmNoQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBTZWFyY2hEaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Y29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlOiBTZWFyY2hIaWdobGlnaHRBcmNoaXZlLFxuXHRcdFx0XHRzdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmU6IFNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNvbW1hbmREaXNwYXRjaGVyLCBzdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlLCBzdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFNlYXJjaGluZ0NvbmZpZyhjb25maWcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdHN1cGVyLnNlYXJjaChwaHJhc2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=