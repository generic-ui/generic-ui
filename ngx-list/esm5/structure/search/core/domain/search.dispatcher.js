/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { SetConfigSearchingCommand } from './config/set-config-searching.command';
import { SetSearchPhraseCommand } from './phrase/set-phrase/set-search-phrase.command';
import { SearchHighlightArchive } from './highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from './placeholder/search-placeholder.archive';
var SearchDispatcher = /** @class */ (function () {
    function SearchDispatcher(commandDispatcher, searchHighlightArchive, searchPlaceholderArchive) {
        this.commandDispatcher = commandDispatcher;
        this.searchHighlightArchive = searchHighlightArchive;
        this.searchPlaceholderArchive = searchPlaceholderArchive;
    }
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    SearchDispatcher.prototype.setSearchingConfig = /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    function (config, structureId) {
        if (config.highlighting !== undefined && config.highlighting !== null) {
            this.searchHighlightArchive.next(structureId, config.highlighting);
        }
        if (config.placeholder !== undefined && config.placeholder !== null) {
            this.searchPlaceholderArchive.next(structureId, config.placeholder);
        }
        if (config.phrase !== undefined && config.phrase !== null) {
            this.searchOnInit(config.phrase, structureId);
        }
        this.commandDispatcher.dispatch(new SetConfigSearchingCommand(structureId, config));
    };
    /**
     * @param {?} phrase
     * @param {?} structureId
     * @return {?}
     */
    SearchDispatcher.prototype.search = /**
     * @param {?} phrase
     * @param {?} structureId
     * @return {?}
     */
    function (phrase, structureId) {
        this.commandDispatcher.dispatch(new SetSearchPhraseCommand(structureId, phrase, false));
    };
    /**
     * @private
     * @param {?} phrase
     * @param {?} structureId
     * @return {?}
     */
    SearchDispatcher.prototype.searchOnInit = /**
     * @private
     * @param {?} phrase
     * @param {?} structureId
     * @return {?}
     */
    function (phrase, structureId) {
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
    SearchDispatcher.prototype.searchHighlightArchive;
    /**
     * @type {?}
     * @private
     */
    SearchDispatcher.prototype.searchPlaceholderArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9kb21haW4vc2VhcmNoLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJdkQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFHcEY7SUFHQywwQkFBNkIsaUJBQW9DLEVBQzdDLHNCQUE4QyxFQUM5Qyx3QkFBa0Q7UUFGekMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM3QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFDdEUsQ0FBQzs7Ozs7O0lBRUQsNkNBQWtCOzs7OztJQUFsQixVQUFtQixNQUFvQixFQUFFLFdBQXdCO1FBRWhFLElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7WUFDdEUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25FO1FBRUQsSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUNwRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDcEU7UUFFRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztTQUM5QztRQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDOzs7Ozs7SUFFRCxpQ0FBTTs7Ozs7SUFBTixVQUFPLE1BQWMsRUFBRSxXQUF3QjtRQUM5QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7Ozs7SUFFTyx1Q0FBWTs7Ozs7O0lBQXBCLFVBQXFCLE1BQWMsRUFBRSxXQUF3QjtRQUM1RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7O2dCQS9CRCxVQUFVOzs7O2dCQVZGLGlCQUFpQjtnQkFNakIsc0JBQXNCO2dCQUN0Qix3QkFBd0I7O0lBb0NqQyx1QkFBQztDQUFBLEFBakNELElBaUNDO1NBaENZLGdCQUFnQjs7Ozs7O0lBRWhCLDZDQUFxRDs7Ozs7SUFDOUQsa0RBQStEOzs7OztJQUMvRCxvREFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vYXBpL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU2V0Q29uZmlnU2VhcmNoaW5nQ29tbWFuZCB9IGZyb20gJy4vY29uZmlnL3NldC1jb25maWctc2VhcmNoaW5nLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0U2VhcmNoUGhyYXNlQ29tbWFuZCB9IGZyb20gJy4vcGhyYXNlL3NldC1waHJhc2Uvc2V0LXNlYXJjaC1waHJhc2UuY29tbWFuZCc7XG5pbXBvcnQgeyBTZWFyY2hIaWdobGlnaHRBcmNoaXZlIH0gZnJvbSAnLi9oaWdobGlnaHQvc2VhcmNoLWhpZ2hsaWdodC5hcmNoaXZlJztcbmltcG9ydCB7IFNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSB9IGZyb20gJy4vcGxhY2Vob2xkZXIvc2VhcmNoLXBsYWNlaG9sZGVyLmFyY2hpdmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hEaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hIaWdobGlnaHRBcmNoaXZlOiBTZWFyY2hIaWdobGlnaHRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZTogU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlKSB7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXG5cdFx0aWYgKGNvbmZpZy5oaWdobGlnaHRpbmcgIT09IHVuZGVmaW5lZCAmJiBjb25maWcuaGlnaGxpZ2h0aW5nICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnNlYXJjaEhpZ2hsaWdodEFyY2hpdmUubmV4dChzdHJ1Y3R1cmVJZCwgY29uZmlnLmhpZ2hsaWdodGluZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGNvbmZpZy5wbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5wbGFjZWhvbGRlciAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5zZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUubmV4dChzdHJ1Y3R1cmVJZCwgY29uZmlnLnBsYWNlaG9sZGVyKTtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLnBocmFzZSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5waHJhc2UgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuc2VhcmNoT25Jbml0KGNvbmZpZy5waHJhc2UsIHN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kKHN0cnVjdHVyZUlkLCBjb25maWcpKTtcblx0fVxuXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2VhcmNoUGhyYXNlQ29tbWFuZChzdHJ1Y3R1cmVJZCwgcGhyYXNlLCBmYWxzZSkpO1xuXHR9XG5cblx0cHJpdmF0ZSBzZWFyY2hPbkluaXQocGhyYXNlOiBzdHJpbmcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldFNlYXJjaFBocmFzZUNvbW1hbmQoc3RydWN0dXJlSWQsIHBocmFzZSwgdHJ1ZSkpO1xuXHR9XG5cbn1cbiJdfQ==