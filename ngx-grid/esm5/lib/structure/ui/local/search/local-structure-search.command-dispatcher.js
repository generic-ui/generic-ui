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
import { StructureSearchHighlightArchive } from '../../../read/structure/searching/highlight/structure.search-highlight.archive';
import { StructureSearchPlaceholderArchive } from '../../../read/structure/searching/placeholder/structure.search-placeholder.archive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXNlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvbG9jYWwvc2VhcmNoL2xvY2FsLXN0cnVjdHVyZS1zZWFyY2guY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ2pJLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBR3ZJO0lBQzJELGlFQUF5QjtJQUVuRiwrQ0FBb0IsV0FBd0IsRUFDekMsaUJBQW9DLEVBQ3BDLCtCQUFnRSxFQUNoRSxpQ0FBb0U7UUFIdkUsWUFJQyxrQkFBTSxpQkFBaUIsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsQ0FBQyxTQUM1RjtRQUxtQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFLNUMsQ0FBQzs7Ozs7SUFHRCxrRUFBa0I7Ozs7SUFBbEIsVUFBbUIsTUFBb0I7UUFDdEMsaUJBQU0sa0JBQWtCLFlBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUdELHNEQUFNOzs7O0lBQU4sVUFBTyxNQUFjO1FBQ3BCLGlCQUFNLE1BQU0sWUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O2dCQWxCRCxVQUFVOzs7O2dCQVBGLFdBQVc7Z0JBSFgsaUJBQWlCO2dCQU1qQiwrQkFBK0I7Z0JBQy9CLGlDQUFpQzs7SUFjekM7UUFEQyxRQUFROzs7O21GQUdSO0lBR0Q7UUFEQyxRQUFROzs7O3VFQUdSO0lBQ0YsNENBQUM7Q0FBQSxBQW5CRCxDQUMyRCx5QkFBeUIsR0FrQm5GO1NBbEJZLHFDQUFxQzs7Ozs7O0lBRXJDLDREQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9zZWFyY2gvc3RydWN0dXJlLnNlYXJjaC5kaXNwYXRjaGVyJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvc2VhcmNoL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL3JlYWQvc3RydWN0dXJlL3NlYXJjaGluZy9oaWdobGlnaHQvc3RydWN0dXJlLnNlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9yZWFkL3N0cnVjdHVyZS9zZWFyY2hpbmcvcGxhY2Vob2xkZXIvc3RydWN0dXJlLnNlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9jYWxTdHJ1Y3R1cmVTZWFyY2hDb21tYW5kRGlzcGF0Y2hlciBleHRlbmRzIFN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLFxuXHRcdFx0XHRjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmU6IFN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmUsXG5cdFx0XHRcdHN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZTogU3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlKSB7XG5cdFx0c3VwZXIoY29tbWFuZERpc3BhdGNoZXIsIHN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmUsIHN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZzogU2VhcmNoQ29uZmlnKTogdm9pZCB7XG5cdFx0c3VwZXIuc2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZywgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRAT3ZlcnJpZGVcblx0c2VhcmNoKHBocmFzZTogc3RyaW5nKTogdm9pZCB7XG5cdFx0c3VwZXIuc2VhcmNoKHBocmFzZSwgdGhpcy5zdHJ1Y3R1cmVJZCk7XG5cdH1cbn1cbiJdfQ==