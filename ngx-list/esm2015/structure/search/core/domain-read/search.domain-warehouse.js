/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SearchingEnabledArchive } from '../domain/enabled/searching-enabled.archive';
import { SearchPhraseArchive } from '../domain/phrase/search-phrase.archive';
import { Injectable } from '@angular/core';
import { SearchWarehouse } from '../api/search.warehouse';
import { SearchHighlightArchive } from '../domain/highlight/search-highlight.archive';
import { SearchPlaceholderArchive } from '../domain/placeholder/search-placeholder.archive';
export class SearchDomainWarehouse extends SearchWarehouse {
    /**
     * @param {?} searchingEnabledArchive
     * @param {?} searchPhraseArchive
     * @param {?} searchHighlightArchive
     * @param {?} searchPlaceholderArchive
     */
    constructor(searchingEnabledArchive, searchPhraseArchive, searchHighlightArchive, searchPlaceholderArchive) {
        super();
        this.searchingEnabledArchive = searchingEnabledArchive;
        this.searchPhraseArchive = searchPhraseArchive;
        this.searchHighlightArchive = searchHighlightArchive;
        this.searchPlaceholderArchive = searchPlaceholderArchive;
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onSearchEnabled(structureId) {
        return this.searchingEnabledArchive.on(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onPhrase(structureId) {
        return this.searchPhraseArchive.on(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onHighlight(structureId) {
        return this.searchHighlightArchive.on(structureId);
    }
    /**
     * @param {?} structureId
     * @return {?}
     */
    onPlaceholder(structureId) {
        return this.searchPlaceholderArchive.on(structureId);
    }
}
SearchDomainWarehouse.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SearchDomainWarehouse.ctorParameters = () => [
    { type: SearchingEnabledArchive },
    { type: SearchPhraseArchive },
    { type: SearchHighlightArchive },
    { type: SearchPlaceholderArchive }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SearchDomainWarehouse.prototype.searchingEnabledArchive;
    /**
     * @type {?}
     * @private
     */
    SearchDomainWarehouse.prototype.searchPhraseArchive;
    /**
     * @type {?}
     * @private
     */
    SearchDomainWarehouse.prototype.searchHighlightArchive;
    /**
     * @type {?}
     * @private
     */
    SearchDomainWarehouse.prototype.searchPlaceholderArchive;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmRvbWFpbi13YXJlaG91c2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zZWFyY2gvY29yZS9kb21haW4tcmVhZC9zZWFyY2guZG9tYWluLXdhcmVob3VzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDdEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFN0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDdEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFJNUYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLGVBQWU7Ozs7Ozs7SUFFekQsWUFBNkIsdUJBQWdELEVBQ3pELG1CQUF3QyxFQUN4QyxzQkFBOEMsRUFDOUMsd0JBQWtEO1FBQ3JFLEtBQUssRUFBRSxDQUFDO1FBSm9CLDRCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDekQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QywyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7SUFFdEUsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsV0FBd0I7UUFDdkMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLFdBQXdCO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxXQUF3QjtRQUNuQyxPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsV0FBd0I7UUFDckMsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3RELENBQUM7OztZQXhCRCxVQUFVOzs7O1lBVkYsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtZQUtuQixzQkFBc0I7WUFDdEIsd0JBQXdCOzs7Ozs7O0lBTXBCLHdEQUFpRTs7Ozs7SUFDMUUsb0RBQXlEOzs7OztJQUN6RCx1REFBK0Q7Ozs7O0lBQy9ELHlEQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlYXJjaGluZ0VuYWJsZWRBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluL2VuYWJsZWQvc2VhcmNoaW5nLWVuYWJsZWQuYXJjaGl2ZSc7XG5pbXBvcnQgeyBTZWFyY2hQaHJhc2VBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluL3BocmFzZS9zZWFyY2gtcGhyYXNlLmFyY2hpdmUnO1xuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoV2FyZWhvdXNlIH0gZnJvbSAnLi4vYXBpL3NlYXJjaC53YXJlaG91c2UnO1xuaW1wb3J0IHsgSGVybWVzT2JzZXJ2YWJsZSB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5pbXBvcnQgeyBTZWFyY2hIaWdobGlnaHRBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluL2hpZ2hsaWdodC9zZWFyY2gtaGlnaGxpZ2h0LmFyY2hpdmUnO1xuaW1wb3J0IHsgU2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlIH0gZnJvbSAnLi4vZG9tYWluL3BsYWNlaG9sZGVyL3NlYXJjaC1wbGFjZWhvbGRlci5hcmNoaXZlJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2VhcmNoRG9tYWluV2FyZWhvdXNlIGV4dGVuZHMgU2VhcmNoV2FyZWhvdXNlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHNlYXJjaGluZ0VuYWJsZWRBcmNoaXZlOiBTZWFyY2hpbmdFbmFibGVkQXJjaGl2ZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hQaHJhc2VBcmNoaXZlOiBTZWFyY2hQaHJhc2VBcmNoaXZlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNlYXJjaEhpZ2hsaWdodEFyY2hpdmU6IFNlYXJjaEhpZ2hsaWdodEFyY2hpdmUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2VhcmNoUGxhY2Vob2xkZXJBcmNoaXZlOiBTZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0b25TZWFyY2hFbmFibGVkKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiB0aGlzLnNlYXJjaGluZ0VuYWJsZWRBcmNoaXZlLm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uUGhyYXNlKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCk6IEhlcm1lc09ic2VydmFibGU8c3RyaW5nPiB7XG5cdFx0cmV0dXJuIHRoaXMuc2VhcmNoUGhyYXNlQXJjaGl2ZS5vbihzdHJ1Y3R1cmVJZCk7XG5cdH1cblxuXHRvbkhpZ2hsaWdodChzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQpOiBIZXJtZXNPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWFyY2hIaWdobGlnaHRBcmNoaXZlLm9uKHN0cnVjdHVyZUlkKTtcblx0fVxuXG5cdG9uUGxhY2Vob2xkZXIoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkKTogSGVybWVzT2JzZXJ2YWJsZTxzdHJpbmc+IHtcblx0XHRyZXR1cm4gdGhpcy5zZWFyY2hQbGFjZWhvbGRlckFyY2hpdmUub24oc3RydWN0dXJlSWQpO1xuXHR9XG5cbn1cbiJdfQ==