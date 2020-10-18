/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { SourceSetLoadingCommand } from './loading/source-set-loading.command';
import { SetOriginCommand } from './origin/set-origin/set-origin.command';
import { StructureEditSourceItemCommand } from './origin/edit/structure.edit-source-item.command';
var SourceDispatcher = /** @class */ (function () {
    function SourceDispatcher(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    SourceDispatcher.prototype.setLoading = /**
     * @param {?} structureId
     * @param {?} enabled
     * @return {?}
     */
    function (structureId, enabled) {
        this.commandDispatcher.dispatch(new SourceSetLoadingCommand(structureId, enabled));
    };
    /**
     * @param {?} structureId
     * @param {?} items
     * @return {?}
     */
    SourceDispatcher.prototype.setOrigin = /**
     * @param {?} structureId
     * @param {?} items
     * @return {?}
     */
    function (structureId, items) {
        this.commandDispatcher.dispatch(new SetOriginCommand(structureId, items));
    };
    /**
     * @param {?} structureId
     * @param {?} params
     * @return {?}
     */
    SourceDispatcher.prototype.editItem = /**
     * @param {?} structureId
     * @param {?} params
     * @return {?}
     */
    function (structureId, params) {
        this.commandDispatcher.dispatch(new StructureEditSourceItemCommand(structureId, params));
    };
    SourceDispatcher.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SourceDispatcher.ctorParameters = function () { return [
        { type: CommandDispatcher }
    ]; };
    return SourceDispatcher;
}());
export { SourceDispatcher };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vc291cmNlLmRpc3BhdGNoZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFMUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFHbEc7SUFHQywwQkFBb0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDeEQsQ0FBQzs7Ozs7O0lBRUQscUNBQVU7Ozs7O0lBQVYsVUFBVyxXQUF3QixFQUFFLE9BQWdCO1FBQ3BELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSx1QkFBdUIsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUNwRixDQUFDOzs7Ozs7SUFFRCxvQ0FBUzs7Ozs7SUFBVCxVQUFVLFdBQXdCLEVBQUUsS0FBaUI7UUFDcEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7OztJQUVELG1DQUFROzs7OztJQUFSLFVBQVMsV0FBd0IsRUFBRSxNQUFxQztRQUN2RSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksOEJBQThCLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQzs7Z0JBaEJELFVBQVU7Ozs7Z0JBVEYsaUJBQWlCOztJQTJCMUIsdUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSxnQkFBZ0I7Ozs7OztJQUVoQiw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU3RydWN0dXJlSWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9zdHJ1Y3R1cmUuaWQnO1xuaW1wb3J0IHsgU291cmNlU2V0TG9hZGluZ0NvbW1hbmQgfSBmcm9tICcuL2xvYWRpbmcvc291cmNlLXNldC1sb2FkaW5nLmNvbW1hbmQnO1xuaW1wb3J0IHsgU2V0T3JpZ2luQ29tbWFuZCB9IGZyb20gJy4vb3JpZ2luL3NldC1vcmlnaW4vc2V0LW9yaWdpbi5jb21tYW5kJztcbmltcG9ydCB7IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtUGFyYW1zIH0gZnJvbSAnLi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5wYXJhbXMnO1xuaW1wb3J0IHsgU3RydWN0dXJlRWRpdFNvdXJjZUl0ZW1Db21tYW5kIH0gZnJvbSAnLi9vcmlnaW4vZWRpdC9zdHJ1Y3R1cmUuZWRpdC1zb3VyY2UtaXRlbS5jb21tYW5kJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU291cmNlRGlzcGF0Y2hlciB7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjb21tYW5kRGlzcGF0Y2hlcjogQ29tbWFuZERpc3BhdGNoZXIpIHtcblx0fVxuXG5cdHNldExvYWRpbmcoc3RydWN0dXJlSWQ6IFN0cnVjdHVyZUlkLCBlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU291cmNlU2V0TG9hZGluZ0NvbW1hbmQoc3RydWN0dXJlSWQsIGVuYWJsZWQpKTtcblx0fVxuXG5cdHNldE9yaWdpbihzdHJ1Y3R1cmVJZDogU3RydWN0dXJlSWQsIGl0ZW1zOiBBcnJheTxhbnk+KTogdm9pZCB7XG5cdFx0dGhpcy5jb21tYW5kRGlzcGF0Y2hlci5kaXNwYXRjaChuZXcgU2V0T3JpZ2luQ29tbWFuZChzdHJ1Y3R1cmVJZCwgaXRlbXMpKTtcblx0fVxuXG5cdGVkaXRJdGVtKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCwgcGFyYW1zOiBTdHJ1Y3R1cmVFZGl0U291cmNlSXRlbVBhcmFtcyk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFN0cnVjdHVyZUVkaXRTb3VyY2VJdGVtQ29tbWFuZChzdHJ1Y3R1cmVJZCwgcGFyYW1zKSk7XG5cdH1cblxufVxuIl19