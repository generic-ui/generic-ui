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
export class LocalStructureSearchDispatcher extends StructureSearchDispatcher {
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
LocalStructureSearchDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LocalStructureSearchDispatcher.ctorParameters = () => [
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
], LocalStructureSearchDispatcher.prototype, "setSearchingConfig", null);
tslib_1.__decorate([
    Override,
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], LocalStructureSearchDispatcher.prototype, "search", null);
if (false) {
    /**
     * @type {?}
     * @private
     */
    LocalStructureSearchDispatcher.prototype.structureId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXNlYXJjaC5kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL3VpL2xvY2FsL3NlYXJjaC9sb2NhbC1zdHJ1Y3R1cmUtc2VhcmNoLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHNFQUFzRSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sdUZBQXVGLENBQUM7QUFDeEksT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sMkZBQTJGLENBQUM7QUFJOUksTUFBTSxPQUFPLDhCQUErQixTQUFRLHlCQUF5Qjs7Ozs7OztJQUU1RSxZQUFvQixXQUF3QixFQUN6QyxpQkFBb0MsRUFDcEMsK0JBQWdFLEVBQ2hFLGlDQUFvRTtRQUN0RSxLQUFLLENBQUMsaUJBQWlCLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUoxRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUs1QyxDQUFDOzs7OztJQUdELGtCQUFrQixDQUFDLE1BQW9CO1FBQ3RDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBR0QsTUFBTSxDQUFDLE1BQWM7UUFDcEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQWxCRCxVQUFVOzs7O1lBUEYsV0FBVztZQUhYLGlCQUFpQjtZQU1qQiwrQkFBK0I7WUFDL0IsaUNBQWlDOztBQWN6QztJQURDLFFBQVE7Ozs7d0VBR1I7QUFHRDtJQURDLFFBQVE7Ozs7NERBR1I7Ozs7OztJQWZXLHFEQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL3NlYXJjaC9zdHJ1Y3R1cmUuc2VhcmNoLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvc2VhcmNoL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgT3ZlcnJpZGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9zdHJ1Y3R1cmUvcmVhZC9zZWFyY2hpbmcvaGlnaGxpZ2h0L3N0cnVjdHVyZS5zZWFyY2gtaGlnaGxpZ2h0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluL3N0cnVjdHVyZS9yZWFkL3NlYXJjaGluZy9wbGFjZWhvbGRlci9zdHJ1Y3R1cmUuc2VhcmNoLXBsYWNlaG9sZGVyLmFyY2hpdmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0cnVjdHVyZVNlYXJjaERpc3BhdGNoZXIgZXh0ZW5kcyBTdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0Y29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRzdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlOiBTdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlLFxuXHRcdFx0XHRzdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmU6IFN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSkge1xuXHRcdHN1cGVyKGNvbW1hbmREaXNwYXRjaGVyLCBzdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlLCBzdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZyk6IHZvaWQge1xuXHRcdHN1cGVyLnNldFNlYXJjaGluZ0NvbmZpZyhjb25maWcsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG5cblx0QE92ZXJyaWRlXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZyk6IHZvaWQge1xuXHRcdHN1cGVyLnNlYXJjaChwaHJhc2UsIHRoaXMuc3RydWN0dXJlSWQpO1xuXHR9XG59XG4iXX0=