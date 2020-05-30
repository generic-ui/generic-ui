/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { ListViewMode } from '../../../domain/mode/list-view-mode';
import { ListViewCommandDispatcher } from '../../../domain-api/list-view.command-dispatcher';
import { ListViewReadModelRootId } from '../../../domain-api/read/list-view.read-model-root-id';
import { Gate } from '../../../../../common/cdk/gate';
var ListViewModeGate = /** @class */ (function (_super) {
    tslib_1.__extends(ListViewModeGate, _super);
    function ListViewModeGate(listViewReadModelRootId, listViewCommandDispatcher) {
        var _this = _super.call(this) || this;
        _this.listViewReadModelRootId = listViewReadModelRootId;
        _this.listViewCommandDispatcher = listViewCommandDispatcher;
        return _this;
    }
    /**
     * @param {?} simpleChanges
     * @return {?}
     */
    ListViewModeGate.prototype.ngOnChanges = /**
     * @param {?} simpleChanges
     * @return {?}
     */
    function (simpleChanges) {
        if (this.isDefined('mode', simpleChanges)) {
            this.listViewCommandDispatcher.setMode(this.mode, this.listViewReadModelRootId);
        }
        if (this.isDefined('modeSelector', simpleChanges)) {
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
        { type: ListViewCommandDispatcher }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LW1vZGUuZ2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2xpc3QvZmVhdHVyZS9nYXRld2F5L21vZGUvbGlzdC12aWV3LW1vZGUuZ2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDbkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDN0YsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFFaEcsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR3REO0lBR3NDLDRDQUFJO0lBUXpDLDBCQUE0Qix1QkFBZ0QsRUFDeEQseUJBQW9EO1FBRHhFLFlBRUMsaUJBQU8sU0FDUDtRQUgyQiw2QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ3hELCtCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7O0lBRXhFLENBQUM7Ozs7O0lBRUQsc0NBQVc7Ozs7SUFBWCxVQUFZLGFBQTRCO1FBRXZDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1NBQ2hGO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUMsRUFBRTtZQUNsRCxJQUFJLENBQUMseUJBQXlCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDL0Y7SUFDRixDQUFDOztnQkF6QkQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxxQkFBcUI7aUJBQy9COzs7O2dCQVBRLHVCQUF1QjtnQkFEdkIseUJBQXlCOzs7dUJBV2hDLEtBQUs7K0JBR0wsS0FBSzs7SUFtQlAsdUJBQUM7Q0FBQSxBQTNCRCxDQUdzQyxJQUFJLEdBd0J6QztTQXhCWSxnQkFBZ0I7OztJQUU1QixnQ0FDbUI7O0lBRW5CLHdDQUNzQjs7SUFFVixtREFBZ0U7Ozs7O0lBQ3pFLHFEQUFxRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMaXN0Vmlld01vZGUgfSBmcm9tICcuLi8uLi8uLi9kb21haW4vbW9kZS9saXN0LXZpZXctbW9kZSc7XG5pbXBvcnQgeyBMaXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9saXN0LXZpZXcuY29tbWFuZC1kaXNwYXRjaGVyJztcbmltcG9ydCB7IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9yZWFkL2xpc3Qtdmlldy5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuXG5pbXBvcnQgeyBHYXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29tbW9uL2Nkay9nYXRlJztcblxuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdndWktbGlzdC12aWV3W21vZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld01vZGVHYXRlIGV4dGVuZHMgR2F0ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KClcblx0bW9kZTogTGlzdFZpZXdNb2RlO1xuXG5cdEBJbnB1dCgpXG5cdG1vZGVTZWxlY3RvcjogYm9vbGVhbjtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgbGlzdFZpZXdSZWFkTW9kZWxSb290SWQ6IExpc3RWaWV3UmVhZE1vZGVsUm9vdElkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGxpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXI6IExpc3RWaWV3Q29tbWFuZERpc3BhdGNoZXIpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoc2ltcGxlQ2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdtb2RlJywgc2ltcGxlQ2hhbmdlcykpIHtcblx0XHRcdHRoaXMubGlzdFZpZXdDb21tYW5kRGlzcGF0Y2hlci5zZXRNb2RlKHRoaXMubW9kZSwgdGhpcy5saXN0Vmlld1JlYWRNb2RlbFJvb3RJZCk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuaXNEZWZpbmVkKCdtb2RlU2VsZWN0b3InLCBzaW1wbGVDaGFuZ2VzKSkge1xuXHRcdFx0dGhpcy5saXN0Vmlld0NvbW1hbmREaXNwYXRjaGVyLnRvZ2dsZVNlbGVjdG9yKHRoaXMubW9kZVNlbGVjdG9yLCB0aGlzLmxpc3RWaWV3UmVhZE1vZGVsUm9vdElkKTtcblx0XHR9XG5cdH1cblxufVxuIl19