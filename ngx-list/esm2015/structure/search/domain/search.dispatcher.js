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
export class SearchDispatcher {
    /**
     * @param {?} commandDispatcher
     * @param {?} structureSearchHighlightArchive
     * @param {?} structureSearchPlaceholderArchive
     */
    constructor(commandDispatcher, structureSearchHighlightArchive, structureSearchPlaceholderArchive) {
        this.commandDispatcher = commandDispatcher;
        this.structureSearchHighlightArchive = structureSearchHighlightArchive;
        this.structureSearchPlaceholderArchive = structureSearchPlaceholderArchive;
    }
    /**
     * @param {?} config
     * @param {?=} structureId
     * @return {?}
     */
    setSearchingConfig(config, structureId = structureGlobalId) {
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
    }
    /**
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    search(phrase, structureId = structureGlobalId) {
        this.commandDispatcher.dispatch(new SetSearchPhraseCommand(structureId, phrase, false));
    }
    /**
     * @private
     * @param {?} phrase
     * @param {?=} structureId
     * @return {?}
     */
    searchOnInit(phrase, structureId = structureGlobalId) {
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
    SearchDispatcher.prototype.structureSearchHighlightArchive;
    /**
     * @type {?}
     * @private
     */
    SearchDispatcher.prototype.structureSearchPlaceholderArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvZG9tYWluL3NlYXJjaC5kaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXZELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBSWhHLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQUU1QixZQUE2QixpQkFBb0MsRUFDN0MsK0JBQXVELEVBQ3ZELGlDQUEyRDtRQUZsRCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQzdDLG9DQUErQixHQUEvQiwrQkFBK0IsQ0FBd0I7UUFDdkQsc0NBQWlDLEdBQWpDLGlDQUFpQyxDQUEwQjtJQUMvRSxDQUFDOzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxNQUFvQixFQUFFLGNBQTJCLGlCQUFpQjtRQUVwRixJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQ3RFLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9EO1FBRUQsSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLFNBQVMsSUFBSSxNQUFNLENBQUMsV0FBVyxLQUFLLElBQUksRUFBRTtZQUNwRSxJQUFJLENBQUMsaUNBQWlDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNoRTtRQUVELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDMUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLHlCQUF5QixDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7Ozs7OztJQUVELE1BQU0sQ0FBQyxNQUFjLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ2xFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7Ozs7OztJQUVPLFlBQVksQ0FBQyxNQUFjLEVBQUUsY0FBMkIsaUJBQWlCO1FBQ2hGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7O1lBL0JELFVBQVU7Ozs7WUFYRixpQkFBaUI7WUFPakIsc0JBQXNCO1lBQ3RCLHdCQUF3Qjs7Ozs7OztJQU1wQiw2Q0FBcUQ7Ozs7O0lBQzlELDJEQUF3RTs7Ozs7SUFDeEUsNkRBQTRFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb21tYW5kRGlzcGF0Y2hlciB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uL2RvbWFpbi1hcGkvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBzdHJ1Y3R1cmVHbG9iYWxJZCB9IGZyb20gJy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluLWFwaS9zdHJ1Y3R1cmUuZ2xvYmFsLWlkJztcbmltcG9ydCB7IFNldENvbmZpZ1NlYXJjaGluZ0NvbW1hbmQgfSBmcm9tICcuL2NvbmZpZy9zZXQtY29uZmlnLXNlYXJjaGluZy5jb21tYW5kJztcbmltcG9ydCB7IFNldFNlYXJjaFBocmFzZUNvbW1hbmQgfSBmcm9tICcuL3NldC1waHJhc2Uvc2V0LXNlYXJjaC1waHJhc2UuY29tbWFuZCc7XG5pbXBvcnQgeyBTZWFyY2hIaWdobGlnaHRBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluLWFwaS9oaWdobGlnaHQvc2VhcmNoLWhpZ2hsaWdodC5hcmNoaXZlJztcbmltcG9ydCB7IFNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZSB9IGZyb20gJy4uL2RvbWFpbi1hcGkvcGxhY2Vob2xkZXIvc2VhcmNoLXBsYWNlaG9sZGVyLmFyY2hpdmUnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTZWFyY2hEaXNwYXRjaGVyIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGNvbW1hbmREaXNwYXRjaGVyOiBDb21tYW5kRGlzcGF0Y2hlcixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzdHJ1Y3R1cmVTZWFyY2hIaWdobGlnaHRBcmNoaXZlOiBTZWFyY2hIaWdobGlnaHRBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHN0cnVjdHVyZVNlYXJjaFBsYWNlaG9sZGVyQXJjaGl2ZTogU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlKSB7XG5cdH1cblxuXHRzZXRTZWFyY2hpbmdDb25maWcoY29uZmlnOiBTZWFyY2hDb25maWcsIHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCA9IHN0cnVjdHVyZUdsb2JhbElkKTogdm9pZCB7XG5cblx0XHRpZiAoY29uZmlnLmhpZ2hsaWdodGluZyAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5oaWdobGlnaHRpbmcgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoSGlnaGxpZ2h0QXJjaGl2ZS5uZXh0KGNvbmZpZy5oaWdobGlnaHRpbmcpO1xuXHRcdH1cblxuXHRcdGlmIChjb25maWcucGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZCAmJiBjb25maWcucGxhY2Vob2xkZXIgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuc3RydWN0dXJlU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlLm5leHQoY29uZmlnLnBsYWNlaG9sZGVyKTtcblx0XHR9XG5cblx0XHRpZiAoY29uZmlnLnBocmFzZSAhPT0gdW5kZWZpbmVkICYmIGNvbmZpZy5waHJhc2UgIT09IG51bGwpIHtcblx0XHRcdHRoaXMuc2VhcmNoT25Jbml0KGNvbmZpZy5waHJhc2UsIHN0cnVjdHVyZUlkKTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRDb25maWdTZWFyY2hpbmdDb21tYW5kKHN0cnVjdHVyZUlkLCBjb25maWcpKTtcblx0fVxuXG5cdHNlYXJjaChwaHJhc2U6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTZWFyY2hQaHJhc2VDb21tYW5kKHN0cnVjdHVyZUlkLCBwaHJhc2UsIGZhbHNlKSk7XG5cdH1cblxuXHRwcml2YXRlIHNlYXJjaE9uSW5pdChwaHJhc2U6IHN0cmluZywgc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkID0gc3RydWN0dXJlR2xvYmFsSWQpOiB2b2lkIHtcblx0XHR0aGlzLmNvbW1hbmREaXNwYXRjaGVyLmRpc3BhdGNoKG5ldyBTZXRTZWFyY2hQaHJhc2VDb21tYW5kKHN0cnVjdHVyZUlkLCBwaHJhc2UsIHRydWUpKTtcblx0fVxuXG59XG4iXX0=