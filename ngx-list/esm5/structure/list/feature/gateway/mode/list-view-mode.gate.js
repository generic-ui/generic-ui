/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { ListViewMode } from '../../../core/domain/mode/list-view-mode';
import { ListViewCommandInvoker } from '../../../core/api/list-view.command-invoker';
import { ListViewReadModelRootId } from '../../../core/api/read/list-view.read-model-root-id';
import { Gate } from '../../../../../common/cdk/component/gate';
var ListViewModeGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewModeGate, _super);
    function ListViewModeGate(listViewReadModelRootId, listViewCommandDispatcher) {
        var _this = _super.call(this) || this;
        _this.listViewReadModelRootId = listViewReadModelRootId;
        _this.listViewCommandDispatcher = listViewCommandDispatcher;
        return _this;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ListViewModeGate.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.isDefined('mode', changes)) {
            this.listViewCommandDispatcher.setMode(this.mode, this.listViewReadModelRootId);
        }
        if (this.isDefined('modeSelector', changes)) {
            this.listViewCommandDispatcher.toggleSelector(this.modeSelector, this.listViewReadModelRootId);
        }
    };
    ListViewModeGate.decorators = [
        { type: Directive, args: [{
                    selector: 'gui-list-view[mode]'
                },] }
    ];
    /** @nocollapse */
    ListViewModeGate.ctorParameters = function () { return [
        { type: ListViewReadModelRootId },
        { type: ListViewCommandInvoker }
    ]; };
    ListViewModeGate.propDecorators = {
        mode: [{ type: Input }],
        modeSelector: [{ type: Input }]
    };
    return ListViewModeGate;
}(Gate));
export { ListViewModeGate };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9nYXRld2F5L21vZGUvbGlzdC12aWV3LW1vZGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBRTVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUU5RixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFJaEU7SUFHc0MsNENBQUk7SUFRekMsMEJBQTRCLHVCQUFnRCxFQUN4RCx5QkFBaUQ7UUFEckUsWUFFQyxpQkFBTyxTQUNQO1FBSDJCLDZCQUF1QixHQUF2Qix1QkFBdUIsQ0FBeUI7UUFDeEQsK0JBQXlCLEdBQXpCLHlCQUF5QixDQUF3Qjs7SUFFckUsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksT0FBb0M7UUFFL0MsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDaEY7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUMvRjtJQUNGLENBQUM7O2dCQXpCRCxTQUFTLFNBQUM7b0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtpQkFDL0I7Ozs7Z0JBUlEsdUJBQXVCO2dCQUR2QixzQkFBc0I7Ozt1QkFZN0IsS0FBSzsrQkFHTCxLQUFLOztJQW1CUCx1QkFBQztDQUFBLEFBM0JELENBR3NDLElBQUksR0F3QnpDO1NBeEJZLGdCQUFnQjs7O0lBRTVCLGdDQUNtQjs7SUFFbkIsd0NBQ3NCOztJQUVWLG1EQUFnRTs7Ozs7SUFDekUscURBQWtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExpc3RWaWV3TW9kZSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvZG9tYWluL21vZGUvbGlzdC12aWV3LW1vZGUnO1xuaW1wb3J0IHsgTGlzdFZpZXdDb21tYW5kSW52b2tlciB9IGZyb20gJy4uLy4uLy4uL2NvcmUvYXBpL2xpc3Qtdmlldy5jb21tYW5kLWludm9rZXInO1xuaW1wb3J0IHsgTGlzdFZpZXdSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuLi8uLi8uLi9jb3JlL2FwaS9yZWFkL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9jb21wb25lbnQvZ2F0ZSc7XG5pbXBvcnQgeyBOZ0NoYW5nZXMgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb21tb24vY2RrL2NvbXBvbmVudC9uZy1jaGFuZ2VzJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W21vZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld01vZGVHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0bW9kZTogTGlzdFZpZXdNb2RlO1xuXG5cdEBJbnB1dCgpXG5cdG1vZGVTZWxlY3RvcjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXI6IExpc3RWaWV3Q29tbWFuZEludm9rZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogTmdDaGFuZ2VzPExpc3RWaWV3TW9kZUdhdGU+KSB7XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ21vZGUnLCBjaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5saXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyLnNldE1vZGUodGhpcy5tb2RlLCB0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5pc0RlZmluZWQoJ21vZGVTZWxlY3RvcicsIGNoYW5nZXMpKSB7XG5cdFx0XHR0aGlzLmxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIudG9nZ2xlU2VsZWN0b3IodGhpcy5tb2RlU2VsZWN0b3IsIHRoaXMubGlzdFZpZXdSZWFkTW9kZWxSb290SWQpO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=