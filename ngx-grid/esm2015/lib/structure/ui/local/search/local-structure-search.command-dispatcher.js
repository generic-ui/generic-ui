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
export class LocalStructureSearchCommandDispatcher extends StructureSearchDispatcher {
    /**
     * @param {?} structureId
     * @param {?} commandDispatcher
     * @param {?} structureSearchHighlightArchive
     * @param {?} structureSearchPlaceholderArchive
     */
    constructor(structureId, commandDispatcher, structureSearchHighlightArchive, structureSearchPlaceholderArchive) {
        super(commandDispatcher, structureSearchHighlightArchive, structureSearchPlaceholderArchive);
        this.structureId = structureId;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    setSearchingConfig(config) {
        super.setSearchingConfig(config, this.structureId);
    }
    /**
     * @param {?} phrase
     * @return {?}
     */
    search(phrase) {
        super.search(phrase, this.structureId);
    }
}
LocalStructureSearchCommandDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureSearchCommandDispatcher.ctorParameters = () => [
    { type: StructureId },
    { type: CommandDispatcher },
    { type: StructureSearchHighlightArchive },
    { type: StructureSearchPlaceholderArchive }
];
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureSearchCommandDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXNlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvdWkvbG9jYWwvc2VhcmNoL2xvY2FsLXN0cnVjdHVyZS1zZWFyY2guY29tbWFuZC1kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGdGQUFnRixDQUFDO0FBQ2pJLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLG9GQUFvRixDQUFDO0FBSXZJLE1BQU0sT0FBTyxxQ0FBc0MsU0FBUSx5QkFBeUI7Ozs7Ozs7SUFFbkYsWUFBb0IsV0FBd0IsRUFDekMsaUJBQW9DLEVBQ3BDLCtCQUFnRSxFQUNoRSxpQ0FBb0U7UUFDdEUsS0FBSyxDQUFDLGlCQUFpQixFQUFFLCtCQUErQixFQUFFLGlDQUFpQyxDQUFDLENBQUM7UUFKMUUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFLNUMsQ0FBQzs7Ozs7SUFHRCxrQkFBa0IsQ0FBQyxNQUFvQjtRQUN0QyxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUdELE1BQU0sQ0FBQyxNQUFjO1FBQ3BCLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7WUFsQkQsVUFBVTs7OztZQVBGLFdBQVc7WUFIWCxpQkFBaUI7WUFNakIsK0JBQStCO1lBQy9CLGlDQUFpQzs7QUFjekM7SUFEQyxRQUFROzs7OytFQUdSO0FBR0Q7SUFEQyxRQUFROzs7O21FQUdSOzs7Ozs7SUFmVyw0REFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoRGlzcGF0Y2hlciB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvc2VhcmNoL3N0cnVjdHVyZS5zZWFyY2guZGlzcGF0Y2hlcic7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vdWktYXBpL3N0cnVjdHVyZS9zZWFyY2gvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBPdmVycmlkZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vcmVhZC9zdHJ1Y3R1cmUvc2VhcmNoaW5nL2hpZ2hsaWdodC9zdHJ1Y3R1cmUuc2VhcmNoLWhpZ2hsaWdodC5hcmNoaXZlJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL3JlYWQvc3RydWN0dXJlL3NlYXJjaGluZy9wbGFjZWhvbGRlci9zdHJ1Y3R1cmUuc2VhcmNoLXBsYWNlaG9sZGVyLmFyY2hpdmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0cnVjdHVyZVNlYXJjaENvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgU3RydWN0dXJlU2VhcmNoRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0c3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZTogU3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSxcblx0XHRcdFx0c3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlOiBTdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUpIHtcblx0XHRzdXBlcihjb21tYW5kRGlzcGF0Y2hlciwgc3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSwgc3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRTZWFyY2hpbmdDb25maWcoY29uZmlnLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWFyY2gocGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRzdXBlci5zZWFyY2gocGhyYXNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxufVxuIl19