/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Command } from '@generic-ui/hermes';
var StructureSetConfigQuickFilterCommand = /** @class */ (function (_super) {
    tslib_1.__extends(StructureSetConfigQuickFilterCommand, _super);
    function StructureSetConfigQuickFilterCommand(structureId, quickFiltersConfig) {
        var _this = _super.call(this, structureId, 'StructureSetConfigQuickFilterCommand') || this;
        _this.structureId = structureId;
        _this.quickFiltersConfig = quickFiltersConfig;
        return _this;
    }
    /**
     * @return {?}
     */
    StructureSetConfigQuickFilterCommand.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.quickFiltersConfig;
    };
    return StructureSetConfigQuickFilterCommand;
}(Command));
export { StructureSetConfigQuickFilterCommand };
if (false) {
    /** @type {?} */
    StructureSetConfigQuickFilterCommand.prototype.structureId;
    /**
     * @type {?}
     * @private
     */
    StructureSetConfigQuickFilterCommand.prototype.quickFiltersConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNldC1jb25maWctcXVpY2stZmlsdGVyLmNvbW1hbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpbHRlci9xdWljay9zdHJ1Y3R1cmUuc2V0LWNvbmZpZy1xdWljay1maWx0ZXIuY29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQU03QztJQUEwRCxnRUFBTztJQUVoRSw4Q0FBNEIsV0FBd0IsRUFDaEMsa0JBQXNDO1FBRDFELFlBRUMsa0JBQU0sV0FBVyxFQUFFLHNDQUFzQyxDQUFDLFNBQzFEO1FBSDJCLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2hDLHdCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7O0lBRTFELENBQUM7Ozs7SUFFRCx3REFBUzs7O0lBQVQ7UUFDQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUNoQyxDQUFDO0lBRUYsMkNBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBMEQsT0FBTyxHQVdoRTs7OztJQVRZLDJEQUF3Qzs7Ozs7SUFDakQsa0VBQXVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbWFuZCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IFN0cnVjdHVyZUlkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc3RydWN0dXJlLWlkJztcbmltcG9ydCB7IFF1aWNrRmlsdGVyc0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3VpLWFwaS9zdHJ1Y3R1cmUvZmlsdGVyL3F1aWNrLWZpbHRlcnMuY29uZmlnJztcblxuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kIGV4dGVuZHMgQ29tbWFuZCB7XG5cblx0Y29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHN0cnVjdHVyZUlkOiBTdHJ1Y3R1cmVJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBxdWlja0ZpbHRlcnNDb25maWc6IFF1aWNrRmlsdGVyc0NvbmZpZykge1xuXHRcdHN1cGVyKHN0cnVjdHVyZUlkLCAnU3RydWN0dXJlU2V0Q29uZmlnUXVpY2tGaWx0ZXJDb21tYW5kJyk7XG5cdH1cblxuXHRnZXRDb25maWcoKTogUXVpY2tGaWx0ZXJzQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5xdWlja0ZpbHRlcnNDb25maWc7XG5cdH1cblxufVxuIl19