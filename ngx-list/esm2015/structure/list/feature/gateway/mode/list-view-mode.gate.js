/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input } from '@angular/core';
import { ListViewMode } from '../../../domain/mode/list-view-mode';
import { ListViewCommandDispatcher } from '../../../domain-api/list-view.command-dispatcher';
import { ListViewReadModelRootId } from '../../../domain-api/read/list-view.read-model-root-id';
import { Gate } from '../../../../../common/cdk/gate';
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
    { type: ListViewReadModelRootId },
    { type: ListViewCommandDispatcher }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9nYXRld2F5L21vZGUvbGlzdC12aWV3LW1vZGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUVoRyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFNdEQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLElBQUk7Ozs7O0lBUXpDLFlBQTRCLHVCQUFnRCxFQUN4RCx5QkFBb0Q7UUFDdkUsS0FBSyxFQUFFLENBQUM7UUFGbUIsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUN4RCw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO0lBRXhFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLGFBQTRCO1FBRXZDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ2hGO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsRUFBRTtZQUNsRCxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDL0Y7SUFDRixDQUFDOzs7WUF6QkQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxxQkFBcUI7YUFDL0I7Ozs7WUFQUSx1QkFBdUI7WUFEdkIseUJBQXlCOzs7bUJBV2hDLEtBQUs7MkJBR0wsS0FBSzs7OztJQUhOLGdDQUNtQjs7SUFFbkIsd0NBQ3NCOztJQUVWLG1EQUFnRTs7Ozs7SUFDekUscURBQXFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL2RvbWFpbi9tb2RlL2xpc3Qtdmlldy1tb2RlJztcbmltcG9ydCB7IExpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL2xpc3Qtdmlldy5jb21tYW5kLWRpc3BhdGNoZXInO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9kb21haW4tYXBpL3JlYWQvbGlzdC12aWV3LnJlYWQtbW9kZWwtcm9vdC1pZCc7XG5cbmltcG9ydCB7IEdhdGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2dhdGUnO1xuXG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ2d1aS1saXN0LXZpZXdbbW9kZV0nXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWaWV3TW9kZUdhdGUgZXh0ZW5kcyBHYXRlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuXHRASW5wdXQoKVxuXHRtb2RlOiBMaXN0Vmlld01vZGU7XG5cblx0QElucHV0KClcblx0bW9kZVNlbGVjdG9yOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBsaXN0Vmlld1JlYWRNb2RlbFJvb3RJZDogTGlzdFZpZXdSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgbGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlcjogTGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlcikge1xuXHRcdHN1cGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhzaW1wbGVDaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ21vZGUnLCBzaW1wbGVDaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5saXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyLnNldE1vZGUodGhpcy5tb2RlLCB0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ21vZGVTZWxlY3RvcicsIHNpbXBsZUNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLmxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIudG9nZ2xlU2VsZWN0b3IodGhpcy5tb2RlU2VsZWN0b3IsIHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=