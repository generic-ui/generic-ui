/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, Input } from '@angular/core';
import { ListViewMode } from '../../../core/domain/mode/list-view-mode';
import { ListViewCommandInvoker } from '../../../core/api/list-view.command-invoker';
import { ListViewReadModelRootId } from '../../../core/api/read/list-view.read-model-root-id';
import { Gate } from '../../../../../common/cdk/gate';
export class ListViewModeGate extends Gate {
    /**
     * @param {?} changeDetectorRef
     * @param {?} listViewReadModelRootId
     * @param {?} listViewCommandDispatcher
     */
    constructor(changeDetectorRef, listViewReadModelRootId, listViewCommandDispatcher) {
        super(changeDetectorRef);
        this.changeDetectorRef = changeDetectorRef;
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.listViewCommandDispatcher = listViewCommandDispatcher;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ngOnChanges(simpleChanges) {
        if (this.isDefined('mode', simpleChanges)) {
            this.listViewCommandDispatcher.setMode(this.mode, this.listViewReadModelRootId);
        }
        if (this.isDefined('modeSelector', simpleChanges)) {
            this.listViewCommandDispatcher.toggleSelector(this.modeSelector, this.listViewReadModelRootId);
        }
    }
}
ListViewModeGate.decorators = [
    { type: Directive, args: [{
                selector: 'gui-list-view[mode]'
            },] }
];
/** @nocollapse */
ListViewModeGate.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ListViewReadModelRootId },
    { type: ListViewCommandInvoker }
];
ListViewModeGate.propDecorators = {
    mode: [{ type: Input }],
    modeSelector: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListViewModeGate.prototype.mode;
    /** @type {?} */
    ListViewModeGate.prototype.modeSelector;
    /**
     * @type {?}
     * @private
     */
    ListViewModeGate.prototype.changeDetectorRef;
    /** @type {?} */
    ListViewModeGate.prototype.listViewReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    ListViewModeGate.prototype.listViewCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9nYXRld2F5L21vZGUvbGlzdC12aWV3LW1vZGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTlGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUU5RixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFNdEQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLElBQUk7Ozs7OztJQVF6QyxZQUE2QixpQkFBb0MsRUFDOUMsdUJBQWdELEVBQy9DLHlCQUFpRDtRQUNwRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUhHLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDOUMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUMvQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQXdCO0lBRXJFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLGFBQTRCO1FBRXZDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ2hGO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsRUFBRTtZQUNsRCxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDL0Y7SUFDRixDQUFDOzs7WUExQkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7YUFDL0I7Ozs7WUFYUSxpQkFBaUI7WUFJakIsdUJBQXVCO1lBRHZCLHNCQUFzQjs7O21CQVc3QixLQUFLOzJCQUdMLEtBQUs7Ozs7SUFITixnQ0FDbUI7O0lBRW5CLHdDQUNzQjs7Ozs7SUFFViw2Q0FBcUQ7O0lBQzlELG1EQUFnRTs7Ozs7SUFDaEUscURBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3Q29tbWFuZEludm9rZXIgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9saXN0LXZpZXcuY29tbWFuZC1pbnZva2VyJztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvcmVhZC9saXN0LXZpZXcucmVhZC1tb2RlbC1yb290LWlkJztcblxuaW1wb3J0IHsgR2F0ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2NvbW1vbi9jZGsvZ2F0ZSc7XG5cblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnZ3VpLWxpc3Qtdmlld1ttb2RlXSdcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdNb2RlR2F0ZSBleHRlbmRzIEdhdGUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgpXG5cdG1vZGU6IExpc3RWaWV3TW9kZTtcblxuXHRASW5wdXQoKVxuXHRtb2RlU2VsZWN0b3I6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG5cdFx0XHRcdHB1YmxpYyByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlcjogTGlzdFZpZXdDb21tYW5kSW52b2tlcikge1xuXHRcdHN1cGVyKGNoYW5nZURldGVjdG9yUmVmKTtcblx0fVxuXG5cdG5nT25DaGFuZ2VzKHNpbXBsZUNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnbW9kZScsIHNpbXBsZUNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLmxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIuc2V0TW9kZSh0aGlzLm1vZGUsIHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmlzRGVmaW5lZCgnbW9kZVNlbGVjdG9yJywgc2ltcGxlQ2hhbmdlcykpIHtcblx0XHRcdHRoaXMubGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlci50b2dnbGVTZWxlY3Rvcih0aGlzLm1vZGVTZWxlY3RvciwgdGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZCk7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==