/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CompositionCommand } from '../../composition.command';
var CompositionChangeSortStatusCommand = /** @class */ (function (_super) {
    tslib_1.__extends(CompositionChangeSortStatusCommand, _super);
    function CompositionChangeSortStatusCommand(compositionId, sortParams) {
        var _this = _super.call(this, compositionId, 'CompositionChangeSortStatusCommand') || this;
        _this.compositionId = compositionId;
        _this.sortParams = sortParams;
        return _this;
    }
    /**
     * @return {?}
     */
    CompositionChangeSortStatusCommand.prototype.getCompositionId = /**
     * @return {?}
     */
    function () {
        return this.compositionId;
    };
    /**
     * @return {?}
     */
    CompositionChangeSortStatusCommand.prototype.getSortParams = /**
     * @return {?}
     */
    function () {
        return this.sortParams;
    };
    return CompositionChangeSortStatusCommand;
}(CompositionCommand));
export { CompositionChangeSortStatusCommand };
if (false) {
    /** @type {?} */
    CompositionChangeSortStatusCommand.prototype.compositionId;
    /**
     * @type {?}
     * @private
     */
    CompositionChangeSortStatusCommand.prototype.sortParams;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb24tY2hhbmdlLXNvcnQtc3RhdHVzLmNvbW1hbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbImNvbXBvc2l0aW9uL2NvcmUvZG9tYWluL2NvbHVtbi9zb3J0L2NvbXBvc2l0aW9uLWNoYW5nZS1zb3J0LXN0YXR1cy5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHL0Q7SUFBd0QsOERBQWtCO0lBRXpFLDRDQUFxQixhQUE0QixFQUM3QixVQUFtQztRQUR2RCxZQUVDLGtCQUFNLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxTQUMxRDtRQUhvQixtQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM3QixnQkFBVSxHQUFWLFVBQVUsQ0FBeUI7O0lBRXZELENBQUM7Ozs7SUFFRCw2REFBZ0I7OztJQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsMERBQWE7OztJQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7SUFFRix5Q0FBQztBQUFELENBQUMsQUFmRCxDQUF3RCxrQkFBa0IsR0FlekU7Ozs7SUFiWSwyREFBcUM7Ozs7O0lBQzlDLHdEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvc2l0aW9uSWQgfSBmcm9tICcuLi8uLi8uLi9hcGkvY29tcG9zaXRpb24uaWQnO1xuaW1wb3J0IHsgQ2hhbmdlU29ydFBhcmFtcyB9IGZyb20gJy4vY2hhbmdlLXNvcnQucGFyYW1zJztcbmltcG9ydCB7IENvbXBvc2l0aW9uQ29tbWFuZCB9IGZyb20gJy4uLy4uL2NvbXBvc2l0aW9uLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBDb21wb3NpdGlvbkNoYW5nZVNvcnRTdGF0dXNDb21tYW5kIGV4dGVuZHMgQ29tcG9zaXRpb25Db21tYW5kIHtcblxuXHRjb25zdHJ1Y3RvcihyZWFkb25seSBjb21wb3NpdGlvbklkOiBDb21wb3NpdGlvbklkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRQYXJhbXM6IEFycmF5PENoYW5nZVNvcnRQYXJhbXM+KSB7XG5cdFx0c3VwZXIoY29tcG9zaXRpb25JZCwgJ0NvbXBvc2l0aW9uQ2hhbmdlU29ydFN0YXR1c0NvbW1hbmQnKTtcblx0fVxuXG5cdGdldENvbXBvc2l0aW9uSWQoKTogQ29tcG9zaXRpb25JZCB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9zaXRpb25JZDtcblx0fVxuXG5cdGdldFNvcnRQYXJhbXMoKTogQXJyYXk8Q2hhbmdlU29ydFBhcmFtcz4ge1xuXHRcdHJldHVybiB0aGlzLnNvcnRQYXJhbXM7XG5cdH1cblxufVxuIl19