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
export class LocalStructureSearchCommandDispatcher extends SearchDispatcher {
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
    { type: SearchHighlightArchive },
    { type: SearchPlaceholderArchive }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwtc3RydWN0dXJlLXNlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZmVhdHVyZS9sb2NhbC9zZWFyY2gvbG9jYWwtc3RydWN0dXJlLXNlYXJjaC5jb21tYW5kLWRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQzVGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDdkgsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sbUZBQW1GLENBQUM7QUFJN0gsTUFBTSxPQUFPLHFDQUFzQyxTQUFRLGdCQUFnQjs7Ozs7OztJQUUxRSxZQUFvQixXQUF3QixFQUN6QyxpQkFBb0MsRUFDcEMsK0JBQXVELEVBQ3ZELGlDQUEyRDtRQUM3RCxLQUFLLENBQUMsaUJBQWlCLEVBQUUsK0JBQStCLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztRQUoxRSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUs1QyxDQUFDOzs7OztJQUdELGtCQUFrQixDQUFDLE1BQW9CO1FBQ3RDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7O0lBR0QsTUFBTSxDQUFDLE1BQWM7UUFDcEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQWxCRCxVQUFVOzs7O1lBUEYsV0FBVztZQUhYLGlCQUFpQjtZQU1qQixzQkFBc0I7WUFDdEIsd0JBQXdCOztBQWNoQztJQURDLFFBQVE7Ozs7K0VBR1I7QUFHRDtJQURDLFFBQVE7Ozs7bUVBR1I7Ozs7OztJQWZXLDREQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hEaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3RydWN0dXJlL3NlYXJjaC9kb21haW4vc2VhcmNoLmRpc3BhdGNoZXInO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9zZWFyY2gvZG9tYWluLWFwaS9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IE92ZXJyaWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFNlYXJjaEhpZ2hsaWdodEFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2RvbWFpbi1hcGkvaGlnaGxpZ2h0L3NlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHJ1Y3R1cmUvc2VhcmNoL2RvbWFpbi1hcGkvcGxhY2Vob2xkZXIvc2VhcmNoLXBsYWNlaG9sZGVyLmFyY2hpdmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0cnVjdHVyZVNlYXJjaENvbW1hbmREaXNwYXRjaGVyIGV4dGVuZHMgU2VhcmNoRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsXG5cdFx0XHRcdGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0c3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZTogU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSxcblx0XHRcdFx0c3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlOiBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUpIHtcblx0XHRzdXBlcihjb21tYW5kRGlzcGF0Y2hlciwgc3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSwgc3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcpOiB2b2lkIHtcblx0XHRzdXBlci5zZXRTZWFyY2hpbmdDb25maWcoY29uZmlnLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdEBPdmVycmlkZVxuXHRzZWFyY2gocGhyYXNlOiBzdHJpbmcpOiB2b2lkIHtcblx0XHRzdXBlci5zZWFyY2gocGhyYXNlLCB0aGlzLnN0cnVjdHVyZUlkKTtcblx0fVxufVxuIl19