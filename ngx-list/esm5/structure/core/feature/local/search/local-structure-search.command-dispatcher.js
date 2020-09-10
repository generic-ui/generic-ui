/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { SearchDispatcher } from '../../../../search/domain/search.dispatcher';
import { StructureId } from '../../../domain/structure.id';
import { Override } from '../../../../../common/cdk/decorators';
import { SearchHighlightArchive } from '../../../../search/domain-api/highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from '../../../../search/domain-api/placeholder/search-placeholder.archive';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXNlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9jb3JlL2ZlYXR1cmUvbG9jYWwvc2VhcmNoL2xvY2FsLXN0cnVjdHVyZS1zZWFyY2guY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzFHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBR2hIO0lBQzJELGlFQUFnQjtJQUUxRSwrQ0FBb0IsV0FBd0IsRUFDekMsaUJBQW9DLEVBQ3BDLCtCQUF1RCxFQUN2RCxpQ0FBMkQ7UUFIOUQsWUFJQyxrQkFBTSxpQkFBaUIsRUFBRSwrQkFBK0IsRUFBRSxpQ0FBaUMsQ0FBQyxTQUM1RjtRQUxtQixpQkFBVyxHQUFYLFdBQVcsQ0FBYTs7SUFLNUMsQ0FBQzs7Ozs7SUFHRCxrRUFBa0I7Ozs7SUFBbEIsVUFBbUIsTUFBb0I7UUFDdEMsaUJBQU0sa0JBQWtCLFlBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUdELHNEQUFNOzs7O0lBQU4sVUFBTyxNQUFjO1FBQ3BCLGlCQUFNLE1BQU0sWUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7O2dCQWxCRCxVQUFVOzs7O2dCQVBGLFdBQVc7Z0JBSFgsaUJBQWlCO2dCQU1qQixzQkFBc0I7Z0JBQ3RCLHdCQUF3Qjs7SUFjaEM7UUFEQyxRQUFROzs7O21GQUdSO0lBR0Q7UUFEQyxRQUFROzs7O3VFQUdSO0lBQ0YsNENBQUM7Q0FBQSxBQW5CRCxDQUMyRCxnQkFBZ0IsR0FrQjFFO1NBbEJZLHFDQUFxQzs7Ozs7O0lBRXJDLDREQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2RvbWFpbi9zZWFyY2guZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2RvbWFpbi1hcGkvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTZWFyY2hIaWdobGlnaHRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VhcmNoL2RvbWFpbi1hcGkvaGlnaGxpZ2h0L3NlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi9zZWFyY2gvZG9tYWluLWFwaS9wbGFjZWhvbGRlci9zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvY2FsU3RydWN0dXJlU2VhcmNoQ29tbWFuZERpc3BhdGNoZXIgZXh0ZW5kcyBTZWFyY2hEaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Y29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlOiBTZWFyY2hIaWdobGlnaHRBcmNoaXZlLFxuXHRcdFx0XHRzdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmU6IFNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNvbW1hbmREaXNwYXRjaGVyLCBzdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlLCBzdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFNlYXJjaGluZ0NvbmZpZyhjb25maWcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdHN1cGVyLnNlYXJjaChwaHJhc2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=