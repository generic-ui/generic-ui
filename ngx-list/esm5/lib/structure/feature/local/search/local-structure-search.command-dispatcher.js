/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureSearchDispatcher } from '../../../domain/structure/search/structure.search.dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureSearchHighlightArchive } from '../../../domain-api/search/highlight/structure.search-highlight.archive';
import { StructureSearchPlaceholderArchive } from '../../../domain-api/search/placeholder/structure.search-placeholder.archive';
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
        { type: StructureSearchHighlightArchive },
        { type: StructureSearchPlaceholderArchive }
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
}(StructureSearchDispatcher));
export { LocalStructureSearchCommandDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureSearchCommandDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXNlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9sb2NhbC9zZWFyY2gvbG9jYWwtc3RydWN0dXJlLXNlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUVBQXlFLENBQUM7QUFDMUgsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sNkVBQTZFLENBQUM7QUFHaEk7SUFDMkQsaUVBQXlCO0lBRW5GLCtDQUFvQixXQUF3QixFQUN6QyxpQkFBb0MsRUFDcEMsK0JBQWdFLEVBQ2hFLGlDQUFvRTtRQUh2RSxZQUlDLGtCQUFNLGlCQUFpQixFQUFFLCtCQUErQixFQUFFLGlDQUFpQyxDQUFDLFNBQzVGO1FBTG1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUs1QyxDQUFDOzs7OztJQUdELGtFQUFrQjs7OztJQUFsQixVQUFtQixNQUFvQjtRQUN0QyxpQkFBTSxrQkFBa0IsWUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBR0Qsc0RBQU07Ozs7SUFBTixVQUFPLE1BQWM7UUFDcEIsaUJBQU0sTUFBTSxZQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBbEJELFVBQVU7Ozs7Z0JBUEYsV0FBVztnQkFIWCxpQkFBaUI7Z0JBTWpCLCtCQUErQjtnQkFDL0IsaUNBQWlDOztJQWN6QztRQURDLFFBQVE7Ozs7bUZBR1I7SUFHRDtRQURDLFFBQVE7Ozs7dUVBR1I7SUFDRiw0Q0FBQztDQUFBLEFBbkJELENBQzJELHlCQUF5QixHQWtCbkY7U0FsQlkscUNBQXFDOzs7Ozs7SUFFckMsNERBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3NlYXJjaC9zdHJ1Y3R1cmUuc2VhcmNoLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc2VhcmNoL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc2VhcmNoL2hpZ2hsaWdodC9zdHJ1Y3R1cmUuc2VhcmNoLWhpZ2hsaWdodC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi1hcGkvc2VhcmNoL3BsYWNlaG9sZGVyL3N0cnVjdHVyZS5zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RydWN0dXJlU2VhcmNoQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBTdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Y29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlOiBTdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlLFxuXHRcdFx0XHRzdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmU6IFN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNvbW1hbmREaXNwYXRjaGVyLCBzdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlLCBzdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFNlYXJjaGluZ0NvbmZpZyhjb25maWcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdHN1cGVyLnNlYXJjaChwaHJhc2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=