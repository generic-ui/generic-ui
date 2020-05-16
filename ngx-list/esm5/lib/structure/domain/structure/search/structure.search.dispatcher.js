/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { structureGlobalId } from '../../../domain-api/structure.global-id';
import { StructureSetConfigSearchingCommand } from './config/structure.set-config-searching.command';
import { StructureSetSearchPhraseCommand } from './set-phrase/structure.set-search-phrase.command';
import { StructureSearchHighlightArchive } from '../../../domain-api/search/highlight/structure.search-highlight.archive';
import { StructureSearchPlaceholderArchive } from '../../../domain-api/search/placeholder/structure.search-placeholder.archive';
var StructureSearchDispatcher = /** @class */ (function () {
    function StructureSearchDispatcher(commandDispatcher, structureSearchHighlightArchive, structureSearchPlaceholderArchive) {
        this.commandDispatcher = commandDispatcher;
        this.structureSearchHighlightArchive = structureSearchHighlightArchive;
        this.structureSearchPlaceholderArchive = structureSearchPlaceholderArchive;
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    StructureSearchDispatcher.prototype.setSearchingConfig = /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        if (config.highlighting !== undefined && config.highlighting !== null) {
            this.structureSearchHighlightArchive.next(config.highlighting);
        }
        if (config.placeholder !== undefined && config.placeholder !== null) {
            this.structureSearchPlaceholderArchive.next(config.placeholder);
        }
        if (config.phrase !== undefined && config.phrase !== null) {
            this.search(config.phrase, structureId);
        }
        this.commandDispatcher.dispatch(new StructureSetConfigSearchingCommand(structureId, config));
    };
    /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    StructureSearchDispatcher.prototype.search = /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    function (phrase, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new StructureSetSearchPhraseCommand(structureId, phrase));
    };
    StructureSearchDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    StructureSearchDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher },
        { type: StructureSearchHighlightArchive },
        { type: StructureSearchPlaceholderArchive }
    ]; };
    return StructureSearchDispatcher;
}());
export { StructureSearchDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSearchDispatcher.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    StructureSearchDispatcher.prototype.structureSearchHighlightArchive;
    /**
     * @type {?}
     * @private
     */
    StructureSearchDispatcher.prototype.structureSearchPlaceholderArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNlYXJjaC5kaXNwYXRjaGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWxpc3QvIiwic291cmNlcyI6WyJsaWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvc2VhcmNoL3N0cnVjdHVyZS5zZWFyY2guZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUl2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNyRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUMxSCxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUdoSTtJQUdDLG1DQUFvQixpQkFBb0MsRUFDN0MsK0JBQWdFLEVBQ2hFLGlDQUFvRTtRQUYzRCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBaUM7UUFDaEUsc0NBQWlDLEdBQWpDLGlDQUFpQyxDQUFtQztJQUMvRSxDQUFDOzs7Ozs7SUFFRCxzREFBa0I7Ozs7O0lBQWxCLFVBQW1CLE1BQW9CLEVBQUUsV0FBNEM7UUFBNUMsNEJBQUEsRUFBQSwrQkFBNEM7UUFFcEYsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUN0RSxJQUFJLENBQUMsK0JBQStCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvRDtRQUVELElBQUksTUFBTSxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFdBQVcsS0FBSyxJQUFJLEVBQUU7WUFDcEUsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDaEU7UUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQzFELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxrQ0FBa0MsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM5RixDQUFDOzs7Ozs7SUFFRCwwQ0FBTTs7Ozs7SUFBTixVQUFPLE1BQWMsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUNsRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksK0JBQStCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0YsQ0FBQzs7Z0JBM0JELFVBQVU7Ozs7Z0JBWEYsaUJBQWlCO2dCQU9qQiwrQkFBK0I7Z0JBQy9CLGlDQUFpQzs7SUFnQzFDLGdDQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0E1QlkseUJBQXlCOzs7Ozs7SUFFekIsc0RBQTRDOzs7OztJQUNyRCxvRUFBd0U7Ozs7O0lBQ3hFLHNFQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3NlYXJjaC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IHN0cnVjdHVyZUdsb2JhbElkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFN0cnVjdHVyZVNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQgfSBmcm9tICcuL2NvbmZpZy9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kIH0gZnJvbSAnLi9zZXQtcGhyYXNlL3N0cnVjdHVyZS5zZXQtc2VhcmNoLXBocmFzZS5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3NlYXJjaC9oaWdobGlnaHQvc3RydWN0dXJlLnNlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3NlYXJjaC9wbGFjZWhvbGRlci9zdHJ1Y3R1cmUuc2VhcmNoLXBsYWNlaG9sZGVyLmFyY2hpdmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdHJ1Y3R1cmVTZWFyY2hEaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSBzdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlOiBTdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZTogU3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlKSB7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cblx0XHRpZiAoY29uZmlnLmhpZ2hsaWdodGluZyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5oaWdobGlnaHRpbmcgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZS5uZXh0KGNvbmZpZy5oaWdobGlnaHRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcucGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCAmJiBjb25maWcucGxhY2Vob2xkZXIgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlLm5leHQoY29uZmlnLnBsYWNlaG9sZGVyKTtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLnBocmFzZSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5waHJhc2UgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuc2VhcmNoKGNvbmZpZy5waHJhc2UsIHN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kKHN0cnVjdHVyZUlkLCBjb25maWcpKTtcblx0fVxuXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTdHJ1Y3R1cmVTZXRTZWFyY2hQaHJhc2VDb21tYW5kKHN0cnVjdHVyZUlkLCBwaHJhc2UpKTtcblx0fVxuXG59XG4iXX0=