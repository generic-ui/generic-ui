/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Command } from '@generic-ui/hermes';
var SetSchemaHorizontalGridCommand = /** @class */ (function (_super) {
    tslib_1.__extends(SetSchemaHorizontalGridCommand, _super);
    function SetSchemaHorizontalGridCommand(schemaId, enabled) {
        var _this = _super.call(this, schemaId, 'SetSchemaHorizontalGridCommand') || this;
        _this.enabled = enabled;
        return _this;
    }
    /**
     * @return {?}
     */
    SetSchemaHorizontalGridCommand.prototype.isEnabled = /**
     * @return {?}
     */
    function () {
        return this.enabled;
    };
    return SetSchemaHorizontalGridCommand;
}(Command));
export { SetSchemaHorizontalGridCommand };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SetSchemaHorizontalGridCommand.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LXNjaGVtYS1ob3Jpem9udGFsLWdyaWQuY29tbWFuZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1saXN0LyIsInNvdXJjZXMiOlsic2NoZW1hL2RvbWFpbi9ncmlkL2hvcml6b250YWwvc2V0LXNjaGVtYS1ob3Jpem9udGFsLWdyaWQuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk3QztJQUFvRCwwREFBTztJQUUxRCx3Q0FBWSxRQUFrQixFQUNWLE9BQWdCO1FBRHBDLFlBRUMsa0JBQU0sUUFBUSxFQUFFLGdDQUFnQyxDQUFDLFNBQ2pEO1FBRm1CLGFBQU8sR0FBUCxPQUFPLENBQVM7O0lBRXBDLENBQUM7Ozs7SUFFRCxrREFBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVGLHFDQUFDO0FBQUQsQ0FBQyxBQVhELENBQW9ELE9BQU8sR0FXMUQ7Ozs7Ozs7SUFSRyxpREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tYW5kIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcbmltcG9ydCB7IFNjaGVtYUlkIH0gZnJvbSAnLi4vLi4vc2NoZW1hLmlkJztcblxuXG5leHBvcnQgY2xhc3MgU2V0U2NoZW1hSG9yaXpvbnRhbEdyaWRDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hSWQ6IFNjaGVtYUlkLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IGVuYWJsZWQ6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihzY2hlbWFJZCwgJ1NldFNjaGVtYUhvcml6b250YWxHcmlkQ29tbWFuZCcpO1xuXHR9XG5cblx0aXNFbmFibGVkKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmVuYWJsZWQ7XG5cdH1cblxufVxuIl19