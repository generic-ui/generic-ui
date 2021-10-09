/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { StructureCommand } from '../../../../core/domain/structure.command';
var SourceSetLoadingCommand = /** @class */ (function (_super) {
    tslib_1.__extends(SourceSetLoadingCommand, _super);
    function SourceSetLoadingCommand(structureId, enabled) {
        var _this = _super.call(this, structureId, 'SourceSetLoadingCommand') || this;
        _this.enabled = enabled;
        return _this;
    }
    /**
     * @return {?}
     */
    SourceSetLoadingCommand.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    return SourceSetLoadingCommand;
}(StructureCommand));
export { SourceSetLoadingCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SourceSetLoadingCommand.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLXNldC1sb2FkaW5nLmNvbW1hbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtbGlzdC8iLCJzb3VyY2VzIjpbInN0cnVjdHVyZS9zb3VyY2UvY29yZS9kb21haW4vbG9hZGluZy9zb3VyY2Utc2V0LWxvYWRpbmcuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBRzdFO0lBQTZDLG1EQUFnQjtJQUU1RCxpQ0FBWSxXQUF3QixFQUNoQixPQUFnQjtRQURwQyxZQUVDLGtCQUFNLFdBQVcsRUFBRSx5QkFBeUIsQ0FBQyxTQUM3QztRQUZtQixhQUFPLEdBQVAsT0FBTyxDQUFTOztJQUVwQyxDQUFDOzs7O0lBRUQsMkNBQVM7OztJQUFUO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFRiw4QkFBQztBQUFELENBQUMsQUFYRCxDQUE2QyxnQkFBZ0IsR0FXNUQ7Ozs7Ozs7SUFSRywwQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJ1Y3R1cmVJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvYXBpL3N0cnVjdHVyZS5pZCc7XG5pbXBvcnQgeyBTdHJ1Y3R1cmVDb21tYW5kIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9kb21haW4vc3RydWN0dXJlLmNvbW1hbmQnO1xuXG5cbmV4cG9ydCBjbGFzcyBTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZCBleHRlbmRzIFN0cnVjdHVyZUNvbW1hbmQge1xuXG5cdGNvbnN0cnVjdG9yKHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBlbmFibGVkOiBib29sZWFuKSB7XG5cdFx0c3VwZXIoc3RydWN0dXJlSWQsICdTb3VyY2VTZXRMb2FkaW5nQ29tbWFuZCcpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxufVxuIl19