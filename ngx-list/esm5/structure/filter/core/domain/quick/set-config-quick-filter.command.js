/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureCommand } from '../../../../core/domain/structure.command';
var SetConfigQuickFilterCommand = /** @class */ (function (_super) {
    tslib_1.__extends(SetConfigQuickFilterCommand, _super);
    function SetConfigQuickFilterCommand(structureId, quickFiltersConfig) {
        var _this = _super.call(this, structureId, 'SetConfigQuickFilterCommand') || this;
        _this.quickFiltersConfig = quickFiltersConfig;
        return _this;
    }
    /**
     * @return {?}
     */
    SetConfigQuickFilterCommand.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.quickFiltersConfig;
    };
    return SetConfigQuickFilterCommand;
}(StructureCommand));
export { SetConfigQuickFilterCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetConfigQuickFilterCommand.prototype.quickFiltersConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LWNvbmZpZy1xdWljay1maWx0ZXIuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic3RydWN0dXJlL2ZpbHRlci9jb3JlL2RvbWFpbi9xdWljay9zZXQtY29uZmlnLXF1aWNrLWZpbHRlci5jb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFHN0U7SUFBaUQsdURBQWdCO0lBRWhFLHFDQUFZLFdBQXdCLEVBQ2hCLGtCQUFzQztRQUQxRCxZQUVDLGtCQUFNLFdBQVcsRUFBRSw2QkFBNkIsQ0FBQyxTQUNqRDtRQUZtQix3QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9COztJQUUxRCxDQUFDOzs7O0lBRUQsK0NBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQztJQUVGLGtDQUFDO0FBQUQsQ0FBQyxBQVhELENBQWlELGdCQUFnQixHQVdoRTs7Ozs7OztJQVJHLHlEQUF1RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uL2FwaS9xdWljay1maWx0ZXJzLmNvbmZpZyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9hcGkvc3RydWN0dXJlLmlkJztcbmltcG9ydCB7IFN0cnVjdHVyZUNvbW1hbmQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL2RvbWFpbi9zdHJ1Y3R1cmUuY29tbWFuZCc7XG5cblxuZXhwb3J0IGNsYXNzIFNldENvbmZpZ1F1aWNrRmlsdGVyQ29tbWFuZCBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBxdWlja0ZpbHRlcnNDb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZykge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRDb25maWcoKTogUXVpY2tGaWx0ZXJzQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5xdWlja0ZpbHRlcnNDb25maWc7XG5cdH1cblxufVxuIl19