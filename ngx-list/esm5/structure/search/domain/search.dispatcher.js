/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { structureGlobalId } from '../../../lib/structure/domain-api/structure.global-id';
import { SetConfigSearchingCommand } from './config/set-config-searching.command';
import { SetSearchPhraseCommand } from './set-phrase/set-search-phrase.command';
import { SearchHighlightArchive } from '../domain-api/highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from '../domain-api/placeholder/search-placeholder.archive';
var SearchDispatcher = /** @class */ (function () {
    function SearchDispatcher(commandDispatcher, structureSearchHighlightArchive, structureSearchPlaceholderArchive) {
        this.commandDispatcher = commandDispatcher;
        this.structureSearchHighlightArchive = structureSearchHighlightArchive;
        this.structureSearchPlaceholderArchive = structureSearchPlaceholderArchive;
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    SearchDispatcher.prototype.setSearchingConfig = /**
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
            this.searchOnInit(config.phrase, structureId);
        }
        this.commandDispatcher.dispatch(new SetConfigSearchingCommand(structureId, config));
    };
    /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    SearchDispatcher.prototype.search = /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    function (phrase, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new SetSearchPhraseCommand(structureId, phrase, false));
    };
    /**
     * @private
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    SearchDispatcher.prototype.searchOnInit = /**
     * @private
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    function (phrase, structureId) {
        if (structureId === void 0) { structureId = structureGlobalId; }
        this.commandDispatcher.dispatch(new SetSearchPhraseCommand(structureId, phrase, true));
    };
    SearchDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SearchDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher },
        { type: SearchHighlightArchive },
        { type: SearchPlaceholderArchive }
    ]; };
    return SearchDispatcher;
}());
export { SearchDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchDispatcher.prototype.commandDispatcher;
    /**
     * @type {?}
     * @private
     */
    SearchDispatcher.prototype.structureSearchHighlightArchive;
    /**
     * @type {?}
     * @private
     */
    SearchDispatcher.prototype.structureSearchPlaceholderArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZG9tYWluL3NlYXJjaC5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBR2hHO0lBR0MsMEJBQTZCLGlCQUFvQyxFQUM3QywrQkFBdUQsRUFDdkQsaUNBQTJEO1FBRmxELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0Msb0NBQStCLEdBQS9CLCtCQUErQixDQUF3QjtRQUN2RCxzQ0FBaUMsR0FBakMsaUNBQWlDLENBQTBCO0lBQy9FLENBQUM7Ozs7OztJQUVELDZDQUFrQjs7Ozs7SUFBbEIsVUFBbUIsTUFBb0IsRUFBRSxXQUE0QztRQUE1Qyw0QkFBQSxFQUFBLCtCQUE0QztRQUVwRixJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ3RFLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUNwRSxJQUFJLENBQUMsaUNBQWlDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNoRTtRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Ozs7OztJQUVELGlDQUFNOzs7OztJQUFOLFVBQU8sTUFBYyxFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ2xFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7OztJQUVPLHVDQUFZOzs7Ozs7SUFBcEIsVUFBcUIsTUFBYyxFQUFFLFdBQTRDO1FBQTVDLDRCQUFBLEVBQUEsK0JBQTRDO1FBQ2hGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7Z0JBL0JELFVBQVU7Ozs7Z0JBWEYsaUJBQWlCO2dCQU9qQixzQkFBc0I7Z0JBQ3RCLHdCQUF3Qjs7SUFvQ2pDLHVCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0FoQ1ksZ0JBQWdCOzs7Ozs7SUFFaEIsNkNBQXFEOzs7OztJQUM5RCwyREFBd0U7Ozs7O0lBQ3hFLDZEQUE0RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi9kb21haW4tYXBpL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgc3RydWN0dXJlR2xvYmFsSWQgfSBmcm9tICcuLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi1hcGkvc3RydWN0dXJlLmdsb2JhbC1pZCc7XG5pbXBvcnQgeyBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kIH0gZnJvbSAnLi9jb25maWcvc2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTZWFyY2hQaHJhc2VDb21tYW5kIH0gZnJvbSAnLi9zZXQtcGhyYXNlL3NldC1zZWFyY2gtcGhyYXNlLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi1hcGkvaGlnaGxpZ2h0L3NlYXJjaC1oaWdobGlnaHQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUgfSBmcm9tICcuLi9kb21haW4tYXBpL3BsYWNlaG9sZGVyL3NlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZTogU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmU6IFNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSkge1xuXHR9XG5cblx0c2V0U2VhcmNoaW5nQ29uZmlnKGNvbmZpZzogU2VhcmNoQ29uZmlnLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQgPSBzdHJ1Y3R1cmVHbG9iYWxJZCk6IHZvaWQge1xuXG5cdFx0aWYgKGNvbmZpZy5oaWdobGlnaHRpbmcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuaGlnaGxpZ2h0aW5nICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaEhpZ2hsaWdodEFyY2hpdmUubmV4dChjb25maWcuaGlnaGxpZ2h0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLnBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnBsYWNlaG9sZGVyICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZS5uZXh0KGNvbmZpZy5wbGFjZWhvbGRlcik7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZy5waHJhc2UgIT09IHVuZGVmaW5lZCAmJiBjb25maWcucGhyYXNlICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnNlYXJjaE9uSW5pdChjb25maWcucGhyYXNlLCBzdHJ1Y3R1cmVJZCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZChzdHJ1Y3R1cmVJZCwgY29uZmlnKSk7XG5cdH1cblxuXHRzZWFyY2gocGhyYXNlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2VhcmNoUGhyYXNlQ29tbWFuZChzdHJ1Y3R1cmVJZCwgcGhyYXNlLCBmYWxzZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWFyY2hPbkluaXQocGhyYXNlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2VhcmNoUGhyYXNlQ29tbWFuZChzdHJ1Y3R1cmVJZCwgcGhyYXNlLCB0cnVlKSk7XG5cdH1cblxufVxuIl19