/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { ListViewMode } from '../../../core/domain/mode/list-view-mode';
import { ListViewCommandInvoker } from '../../../core/api/list-view.command-invoker';
import { ListViewReadModelRootId } from '../../../core/api/list-view.read-model-root-id';
import { Gate } from '../../../../../common/cdk/component/gate';
export class ListViewModeGate extends Gate {
    /**
     * @param {?} listViewReadModelRootId
     * @param {?} listViewCommandDispatcher
     */
    constructor(listViewReadModelRootId, listViewCommandDispatcher) {
        super();
        this.listViewReadModelRootId = listViewReadModelRootId;
        this.listViewCommandDispatcher = listViewCommandDispatcher;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isDefined('mode', changes)) {
            this.listViewCommandDispatcher.setMode(this.mode, this.listViewReadModelRootId);
        }
        if (this.isDefined('modeSelector', changes)) {
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
    /** @type {?} */
    ListViewModeGate.prototype.listViewReadModelRootId;
    /**
     * @type {?}
     * @private
     */
    ListViewModeGate.prototype.listViewCommandDispatcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9nYXRlL21vZGUvbGlzdC12aWV3LW1vZGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFNUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3JGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBRXpGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQU9oRSxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsSUFBSTs7Ozs7SUFRekMsWUFBNEIsdUJBQWdELEVBQ3hELHlCQUFpRDtRQUNwRSxLQUFLLEVBQUUsQ0FBQztRQUZtQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ3hELDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBd0I7SUFFckUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBb0M7UUFFL0MsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDaEY7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUMvRjtJQUNGLENBQUM7OztZQXpCRCxTQUFTLFNBQUM7Z0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjthQUMvQjs7OztZQVJRLHVCQUF1QjtZQUR2QixzQkFBc0I7OzttQkFZN0IsS0FBSzsyQkFHTCxLQUFLOzs7O0lBSE4sZ0NBQ21COztJQUVuQix3Q0FDc0I7O0lBRVYsbURBQWdFOzs7OztJQUN6RSxxREFBa0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGlzdFZpZXdNb2RlIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbW1hbmRJbnZva2VyIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9hcGkvbGlzdC12aWV3LmNvbW1hbmQtaW52b2tlcic7XG5pbXBvcnQgeyBMaXN0Vmlld1JlYWRNb2RlbFJvb3RJZCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W21vZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld01vZGVHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0bW9kZTogTGlzdFZpZXdNb2RlO1xuXG5cdEBJbnB1dCgpXG5cdG1vZGVTZWxlY3RvcjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXI6IExpc3RWaWV3Q29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPExpc3RWaWV3TW9kZUdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ21vZGUnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5saXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyLnNldE1vZGUodGhpcy5tb2RlLCB0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ21vZGVTZWxlY3RvcicsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLmxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIudG9nZ2xlU2VsZWN0b3IodGhpcy5tb2RlU2VsZWN0b3IsIHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=