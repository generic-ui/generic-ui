/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ReadModelRoot } from '@generic-ui/hermes';
import { SchemaCssClass } from './schema-css-class';
var SchemaReadModelRoot = /** @class */ (function (_super) {
    tslib_1.__extends(SchemaReadModelRoot, _super);
    function SchemaReadModelRoot(schemaReadModelRootId, schemaTheme, verticalGridEnabled, horizontalGridEnabled, rowColoring) {
        var _this = _super.call(this, schemaReadModelRootId) || this;
        _this.schemaTheme = schemaTheme;
        _this.verticalGridEnabled = verticalGridEnabled;
        _this.horizontalGridEnabled = horizontalGridEnabled;
        _this.rowColoring = rowColoring;
        return _this;
    }
    /**
     * @return {?}
     */
    SchemaReadModelRoot.prototype.getTheme = /**
     * @return {?}
     */
    function () {
        return this.schemaTheme;
    };
    /**
     * @return {?}
     */
    SchemaReadModelRoot.prototype.getCssClasses = /**
     * @return {?}
     */
    function () {
        return new SchemaCssClass(this.verticalGridEnabled, this.horizontalGridEnabled, this.getTheme(), this.rowColoring);
    };
    return SchemaReadModelRoot;
}(ReadModelRoot));
export { SchemaReadModelRoot };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SchemaReadModelRoot.prototype.schemaTheme;
    /**
     * @type {?}
     * @private
     */
    SchemaReadModelRoot.prototype.verticalGridEnabled;
    /**
     * @type {?}
     * @private
     */
    SchemaReadModelRoot.prototype.horizontalGridEnabled;
    /**
     * @type {?}
     * @private
     */
    SchemaReadModelRoot.prototype.rowColoring;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnJlYWQtbW9kZWwtcm9vdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJbkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBSXBEO0lBQXlDLCtDQUFvQztJQUU1RSw2QkFBWSxxQkFBNEMsRUFDcEMsV0FBd0IsRUFDeEIsbUJBQTRCLEVBQzVCLHFCQUE4QixFQUM5QixXQUE4QjtRQUpsRCxZQUtDLGtCQUFNLHFCQUFxQixDQUFDLFNBQzVCO1FBTG1CLGlCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBUztRQUM1QiwyQkFBcUIsR0FBckIscUJBQXFCLENBQVM7UUFDOUIsaUJBQVcsR0FBWCxXQUFXLENBQW1COztJQUVsRCxDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCwyQ0FBYTs7O0lBQWI7UUFDQyxPQUFPLElBQUksY0FBYyxDQUN4QixJQUFJLENBQUMsbUJBQW1CLEVBQ3hCLElBQUksQ0FBQyxxQkFBcUIsRUFDMUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUNmLElBQUksQ0FBQyxXQUFXLENBQ2hCLENBQUM7SUFDSCxDQUFDO0lBRUYsMEJBQUM7QUFBRCxDQUFDLEFBdkJELENBQXlDLGFBQWEsR0F1QnJEOzs7Ozs7O0lBcEJHLDBDQUF5Qzs7Ozs7SUFDekMsa0RBQTZDOzs7OztJQUM3QyxvREFBK0M7Ozs7O0lBQy9DLDBDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWRNb2RlbFJvb3QgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBTY2hlbWFSZWFkTW9kZWxSb290SWQgfSBmcm9tICcuL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QtaWQnO1xuaW1wb3J0IHsgU2NoZW1hVGhlbWUgfSBmcm9tICcuLi9kb21haW4vc2NoZW1hLXRoZW1lJztcbmltcG9ydCB7IFNjaGVtYUNzc0NsYXNzIH0gZnJvbSAnLi9zY2hlbWEtY3NzLWNsYXNzJztcbmltcG9ydCB7IFNjaGVtYVJvd0NvbG9yaW5nIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS1yb3ctY29sb3JpbmcnO1xuXG5cbmV4cG9ydCBjbGFzcyBTY2hlbWFSZWFkTW9kZWxSb290IGV4dGVuZHMgUmVhZE1vZGVsUm9vdDxTY2hlbWFSZWFkTW9kZWxSb290SWQ+IHtcblxuXHRjb25zdHJ1Y3RvcihzY2hlbWFSZWFkTW9kZWxSb290SWQ6IFNjaGVtYVJlYWRNb2RlbFJvb3RJZCxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzY2hlbWFUaGVtZTogU2NoZW1hVGhlbWUsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgdmVydGljYWxHcmlkRW5hYmxlZDogYm9vbGVhbixcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBob3Jpem9udGFsR3JpZEVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgcm93Q29sb3Jpbmc6IFNjaGVtYVJvd0NvbG9yaW5nKSB7XG5cdFx0c3VwZXIoc2NoZW1hUmVhZE1vZGVsUm9vdElkKTtcblx0fVxuXG5cdGdldFRoZW1lKCk6IFNjaGVtYVRoZW1lIHtcblx0XHRyZXR1cm4gdGhpcy5zY2hlbWFUaGVtZTtcblx0fVxuXG5cdGdldENzc0NsYXNzZXMoKTogU2NoZW1hQ3NzQ2xhc3Mge1xuXHRcdHJldHVybiBuZXcgU2NoZW1hQ3NzQ2xhc3MoXG5cdFx0XHR0aGlzLnZlcnRpY2FsR3JpZEVuYWJsZWQsXG5cdFx0XHR0aGlzLmhvcml6b250YWxHcmlkRW5hYmxlZCxcblx0XHRcdHRoaXMuZ2V0VGhlbWUoKSxcblx0XHRcdHRoaXMucm93Q29sb3Jpbmdcblx0XHQpO1xuXHR9XG5cbn1cbiJdfQ==