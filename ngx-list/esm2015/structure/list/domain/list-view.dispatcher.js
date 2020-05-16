/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CommandDispatcher } from '@generic-ui/hermes';
import { CreateListViewCommand } from './create/create-list-view.command';
import { SetListViewModeCommand } from './mode/set-list-view-mode.command';
import { ToggleListViewSelectorCommand } from './mode/selector/toggle-list-view-selector.command';
export class ListViewDispatcher {
    /**
     * @param {?} commandDispatcher
     */
    constructor(commandDispatcher) {
        this.commandDispatcher = commandDispatcher;
    }
    /**
     * @param {?} listViewId
     * @return {?}
     */
    create(listViewId) {
        this.commandDispatcher.dispatch(new CreateListViewCommand(listViewId));
    }
    /**
     * @param {?} mode
     * @param {?} listViewId
     * @return {?}
     */
    setMode(mode, listViewId) {
        this.commandDispatcher.dispatch(new SetListViewModeCommand(listViewId, mode));
    }
    /**
     * @param {?} enabled
     * @param {?} listViewId
     * @return {?}
     */
    toggleSelector(enabled, listViewId) {
        this.commandDispatcher.dispatch(new ToggleListViewSelectorCommand(listViewId, enabled));
    }
}
ListViewDispatcher.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ListViewDispatcher.ctorParameters = () => [
    { type: CommandDispatcher }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ListViewDispatcher.prototype.commandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmRpc3BhdGNoZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9saXN0L2RvbWFpbi9saXN0LXZpZXcuZGlzcGF0Y2hlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd2RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUUxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUlsRyxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBRTlCLFlBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO0lBQ3hELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFVBQXNCO1FBQzVCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxJQUFrQixFQUFFLFVBQXNCO1FBQ2pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsT0FBZ0IsRUFBRSxVQUFzQjtRQUN0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksNkJBQTZCLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQzs7O1lBaEJELFVBQVU7Ozs7WUFURixpQkFBaUI7Ozs7Ozs7SUFZYiwrQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgTGlzdFZpZXdJZCB9IGZyb20gJy4vbGlzdC12aWV3LmlkJztcbmltcG9ydCB7IENyZWF0ZUxpc3RWaWV3Q29tbWFuZCB9IGZyb20gJy4vY3JlYXRlL2NyZWF0ZS1saXN0LXZpZXcuY29tbWFuZCc7XG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgU2V0TGlzdFZpZXdNb2RlQ29tbWFuZCB9IGZyb20gJy4vbW9kZS9zZXQtbGlzdC12aWV3LW1vZGUuY29tbWFuZCc7XG5pbXBvcnQgeyBUb2dnbGVMaXN0Vmlld1NlbGVjdG9yQ29tbWFuZCB9IGZyb20gJy4vbW9kZS9zZWxlY3Rvci90b2dnbGUtbGlzdC12aWV3LXNlbGVjdG9yLmNvbW1hbmQnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0Rpc3BhdGNoZXIge1xuXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY29tbWFuZERpc3BhdGNoZXI6IENvbW1hbmREaXNwYXRjaGVyKSB7XG5cdH1cblxuXHRjcmVhdGUobGlzdFZpZXdJZDogTGlzdFZpZXdJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IENyZWF0ZUxpc3RWaWV3Q29tbWFuZChsaXN0Vmlld0lkKSk7XG5cdH1cblxuXHRzZXRNb2RlKG1vZGU6IExpc3RWaWV3TW9kZSwgbGlzdFZpZXdJZDogTGlzdFZpZXdJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFNldExpc3RWaWV3TW9kZUNvbW1hbmQobGlzdFZpZXdJZCwgbW9kZSkpO1xuXHR9XG5cblx0dG9nZ2xlU2VsZWN0b3IoZW5hYmxlZDogYm9vbGVhbiwgbGlzdFZpZXdJZDogTGlzdFZpZXdJZCk6IHZvaWQge1xuXHRcdHRoaXMuY29tbWFuZERpc3BhdGNoZXIuZGlzcGF0Y2gobmV3IFRvZ2dsZUxpc3RWaWV3U2VsZWN0b3JDb21tYW5kKGxpc3RWaWV3SWQsIGVuYWJsZWQpKTtcblx0fVxuXG59XG4iXX0=