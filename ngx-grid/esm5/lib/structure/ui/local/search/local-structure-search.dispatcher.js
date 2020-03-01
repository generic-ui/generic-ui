/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { StructureSearchDispatcher } from '../../../domain/structure/command/search/structure.search.dispatcher';
import { StructureId } from '../../../domain/structure-id';
import { Override } from '../../../../../common/cdk/decorators';
import { StructureSearchHighlightArchive } from '../../../domain/structure/read/searching/highlight/structure.search-highlight.archive';
import { StructureSearchPlaceholderArchive } from '../../../domain/structure/read/searching/placeholder/structure.search-placeholder.archive';
var LocalStructureSearchDispatcher = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStructureSearchDispatcher, _super);
    function LocalStructureSearchDispatcher(structureId, commandDispatcher, structureSearchHighlightArchive, structureSearchPlaceholderArchive) {
        var _this = _super.call(this, commandDispatcher, structureSearchHighlightArchive, structureSearchPlaceholderArchive) || this;
        _this.structureId = structureId;
        return _this;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    LocalStructureSearchDispatcher.prototype.setSearchingConfig = /**
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
    LocalStructureSearchDispatcher.prototype.search = /**
     * @param {?} phrase
     * @return {?}
     */
    function (phrase) {
        _super.prototype.search.call(this, phrase, this.structureId);
    };
    LocalStructureSearchDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LocalStructureSearchDispatcher.ctorParameters = function () { return [
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
    ], LocalStructureSearchDispatcher.prototype, "setSearchingConfig", null);
    tslib_1.__decorate([
        Override,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [String]),
        tslib_1.__metadata("design:returntype", void 0)
    ], LocalStructureSearchDispatcher.prototype, "search", null);
    return LocalStructureSearchDispatcher;
}(StructureSearchDispatcher));
export { LocalStructureSearchDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureSearchDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXNlYXJjaC5kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL3NlYXJjaC9sb2NhbC1zdHJ1Y3R1cmUtc2VhcmNoLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDeEksT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkZBQTJGLENBQUM7QUFHOUk7SUFDb0QsMERBQXlCO0lBRTVFLHdDQUFvQixXQUF3QixFQUN6QyxpQkFBb0MsRUFDcEMsK0JBQWdFLEVBQ2hFLGlDQUFvRTtRQUh2RSxZQUlDLGtCQUFNLGlCQUFpQixFQUFFLCtCQUErQixFQUFFLGlDQUFpQyxDQUFDLFNBQzVGO1FBTG1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhOztJQUs1QyxDQUFDOzs7OztJQUdELDJEQUFrQjs7OztJQUFsQixVQUFtQixNQUFvQjtRQUN0QyxpQkFBTSxrQkFBa0IsWUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBR0QsK0NBQU07Ozs7SUFBTixVQUFPLE1BQWM7UUFDcEIsaUJBQU0sTUFBTSxZQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBbEJELFVBQVU7Ozs7Z0JBUEYsV0FBVztnQkFIWCxpQkFBaUI7Z0JBTWpCLCtCQUErQjtnQkFDL0IsaUNBQWlDOztJQWN6QztRQURDLFFBQVE7Ozs7NEVBR1I7SUFHRDtRQURDLFFBQVE7Ozs7Z0VBR1I7SUFDRixxQ0FBQztDQUFBLEFBbkJELENBQ29ELHlCQUF5QixHQWtCNUU7U0FsQlksOEJBQThCOzs7Ozs7SUFFOUIscURBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc2VhcmNoL3N0cnVjdHVyZS5zZWFyY2guZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUtaWQnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3NlYXJjaGluZy9oaWdobGlnaHQvc3RydWN0dXJlLnNlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlL3JlYWQvc2VhcmNoaW5nL3BsYWNlaG9sZGVyL3N0cnVjdHVyZS5zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RydWN0dXJlU2VhcmNoRGlzcGF0Y2hlciBleHRlbmRzIFN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmU6IFN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmUsXG5cdFx0XHRcdHN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZTogU3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlKSB7XG5cdFx0c3VwZXIoY29tbWFuZERpc3BhdGNoZXIsIHN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmUsIHN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZzogU2VhcmNoQ29uZmlnKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VhcmNoKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0c3VwZXIuc2VhcmNoKHBocmFzZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cbn1cbiJdfQ==