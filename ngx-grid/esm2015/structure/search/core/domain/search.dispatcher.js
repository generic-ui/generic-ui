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
export class SearchDispatcher {
    /**
     * @param {?} commandDispatcher
     * @param {?} searchHighlightArchive
     * @param {?} searchPlaceholderArchive
     */
    constructor(commandDispatcher, searchHighlightArchive, searchPlaceholderArchive) {
        this.commandDispatcher = commandDispatcher;
        this.searchHighlightArchive = searchHighlightArchive;
        this.searchPlaceholderArchive = searchPlaceholderArchive;
    }
    /**
     * @param {?} config
     * @param {?} structureId
     * @return {?}
     */
    setSearchingConfig(config, structureId) {
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
    }
    /**
     * @param {?} phrase
     * @param {?} structureId
     * @return {?}
     */
    search(phrase, structureId) {
        this.commandDispatcher.dispatch(new SetSearchPhraseCommand(structureId, phrase, false));
    }
    /**
     * @private
     * @param {?} phrase
     * @param {?} structureId
     * @return {?}
     */
    searchOnInit(phrase, structureId) {
        this.commandDispatcher.dispatch(new SetSearchPhraseCommand(structureId, phrase, true));
    }
}
SearchDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchDispatcher.ctorParameters = () => [
    { type: CommandDispatcher },
    { type: SearchHighlightArchive },
    { type: SearchPlaceholderArchive }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9kb21haW4vc2VhcmNoLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJdkQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDbEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdkYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFJcEYsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBRTVCLFlBQTZCLGlCQUFvQyxFQUM3QyxzQkFBOEMsRUFDOUMsd0JBQWtEO1FBRnpDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDN0MsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5Qyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO0lBQ3RFLENBQUM7Ozs7OztJQUVELGtCQUFrQixDQUFDLE1BQW9CLEVBQUUsV0FBd0I7UUFFaEUsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUN0RSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbkU7UUFFRCxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQ3BFLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNwRTtRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxNQUFjLEVBQUUsV0FBd0I7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7Ozs7O0lBRU8sWUFBWSxDQUFDLE1BQWMsRUFBRSxXQUF3QjtRQUM1RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksc0JBQXNCLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7OztZQS9CRCxVQUFVOzs7O1lBVkYsaUJBQWlCO1lBTWpCLHNCQUFzQjtZQUN0Qix3QkFBd0I7Ozs7Ozs7SUFNcEIsNkNBQXFEOzs7OztJQUM5RCxrREFBK0Q7Ozs7O0lBQy9ELG9EQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi9hcGkvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kIH0gZnJvbSAnLi9jb25maWcvc2V0LWNvbmZpZy1zZWFyY2hpbmcuY29tbWFuZCc7XG5pbXBvcnQgeyBTZXRTZWFyY2hQaHJhc2VDb21tYW5kIH0gZnJvbSAnLi9waHJhc2Uvc2V0LXBocmFzZS9zZXQtc2VhcmNoLXBocmFzZS5jb21tYW5kJztcbmltcG9ydCB7IFNlYXJjaEhpZ2hsaWdodEFyY2hpdmUgfSBmcm9tICcuL2hpZ2hsaWdodC9zZWFyY2gtaGlnaGxpZ2h0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlIH0gZnJvbSAnLi9wbGFjZWhvbGRlci9zZWFyY2gtcGxhY2Vob2xkZXIuYXJjaGl2ZSc7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNlYXJjaERpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaEhpZ2hsaWdodEFyY2hpdmU6IFNlYXJjaEhpZ2hsaWdodEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlOiBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUpIHtcblx0fVxuXG5cdHNldFNlYXJjaGluZ0NvbmZpZyhjb25maWc6IFNlYXJjaENvbmZpZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cblx0XHRpZiAoY29uZmlnLmhpZ2hsaWdodGluZyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5oaWdobGlnaHRpbmcgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuc2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZS5uZXh0KHN0cnVjdHVyZUlkLCBjb25maWcuaGlnaGxpZ2h0aW5nKTtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLnBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnBsYWNlaG9sZGVyICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZS5uZXh0KHN0cnVjdHVyZUlkLCBjb25maWcucGxhY2Vob2xkZXIpO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcucGhyYXNlICE9PSB1bmRlZmluZWQgJiYgY29uZmlnLnBocmFzZSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5zZWFyY2hPbkluaXQoY29uZmlnLnBocmFzZSwgc3RydWN0dXJlSWQpO1xuXHRcdH1cblxuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQoc3RydWN0dXJlSWQsIGNvbmZpZykpO1xuXHR9XG5cblx0c2VhcmNoKHBocmFzZTogc3RyaW5nLCBzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTZWFyY2hQaHJhc2VDb21tYW5kKHN0cnVjdHVyZUlkLCBwaHJhc2UsIGZhbHNlKSk7XG5cdH1cblxuXHRwcml2YXRlIHNlYXJjaE9uSW5pdChwaHJhc2U6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0U2VhcmNoUGhyYXNlQ29tbWFuZChzdHJ1Y3R1cmVJZCwgcGhyYXNlLCB0cnVlKSk7XG5cdH1cblxufVxuIl19