/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReadModelRoot } from '@generic-ui/hermes';
import { SchemaCssClass } from './schema-css-class';
export class SchemaReadModelRoot extends ReadModelRoot {
    /**
     * @param {?} schemaReadModelRootId
     * @param {?} schemaTheme
     * @param {?} verticalGridEnabled
     * @param {?} horizontalGridEnabled
     * @param {?} rowColoring
     */
    constructor(schemaReadModelRootId, schemaTheme, verticalGridEnabled, horizontalGridEnabled, rowColoring) {
        super(schemaReadModelRootId);
        this.schemaTheme = schemaTheme;
        this.verticalGridEnabled = verticalGridEnabled;
        this.horizontalGridEnabled = horizontalGridEnabled;
        this.rowColoring = rowColoring;
    }
    /**
     * @return {?}
     */
    getTheme() {
        return this.schemaTheme;
    }
    /**
     * @return {?}
     */
    getCssClasses() {
        return new SchemaCssClass(this.verticalGridEnabled, this.horizontalGridEnabled, this.getTheme(), this.rowColoring);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZW1hLnJlYWQtbW9kZWwtcm9vdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3NjaGVtYS9yZWFkL3NjaGVtYS5yZWFkLW1vZGVsLXJvb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUluRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFJcEQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGFBQW9DOzs7Ozs7OztJQUU1RSxZQUFZLHFCQUE0QyxFQUNwQyxXQUF3QixFQUN4QixtQkFBNEIsRUFDNUIscUJBQThCLEVBQzlCLFdBQThCO1FBQ2pELEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBSlYsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFTO1FBQzVCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBUztRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7SUFFbEQsQ0FBQzs7OztJQUVELFFBQVE7UUFDUCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQzs7OztJQUVELGFBQWE7UUFDWixPQUFPLElBQUksY0FBYyxDQUN4QixJQUFJLENBQUMsbUJBQW1CLEVBQ3hCLElBQUksQ0FBQyxxQkFBcUIsRUFDMUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUNmLElBQUksQ0FBQyxXQUFXLENBQ2hCLENBQUM7SUFDSCxDQUFDO0NBRUQ7Ozs7OztJQXBCRywwQ0FBeUM7Ozs7O0lBQ3pDLGtEQUE2Qzs7Ozs7SUFDN0Msb0RBQStDOzs7OztJQUMvQywwQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkTW9kZWxSb290IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgU2NoZW1hUmVhZE1vZGVsUm9vdElkIH0gZnJvbSAnLi9zY2hlbWEucmVhZC1tb2RlbC1yb290LWlkJztcbmltcG9ydCB7IFNjaGVtYVRoZW1lIH0gZnJvbSAnLi4vZG9tYWluL3NjaGVtYS10aGVtZSc7XG5pbXBvcnQgeyBTY2hlbWFDc3NDbGFzcyB9IGZyb20gJy4vc2NoZW1hLWNzcy1jbGFzcyc7XG5pbXBvcnQgeyBTY2hlbWFSb3dDb2xvcmluZyB9IGZyb20gJy4uL2RvbWFpbi9zY2hlbWEtcm93LWNvbG9yaW5nJztcblxuXG5leHBvcnQgY2xhc3MgU2NoZW1hUmVhZE1vZGVsUm9vdCBleHRlbmRzIFJlYWRNb2RlbFJvb3Q8U2NoZW1hUmVhZE1vZGVsUm9vdElkPiB7XG5cblx0Y29uc3RydWN0b3Ioc2NoZW1hUmVhZE1vZGVsUm9vdElkOiBTY2hlbWFSZWFkTW9kZWxSb290SWQsXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgc2NoZW1hVGhlbWU6IFNjaGVtYVRoZW1lLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHZlcnRpY2FsR3JpZEVuYWJsZWQ6IGJvb2xlYW4sXG5cdFx0XHRcdHByaXZhdGUgcmVhZG9ubHkgaG9yaXpvbnRhbEdyaWRFbmFibGVkOiBib29sZWFuLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHJvd0NvbG9yaW5nOiBTY2hlbWFSb3dDb2xvcmluZykge1xuXHRcdHN1cGVyKHNjaGVtYVJlYWRNb2RlbFJvb3RJZCk7XG5cdH1cblxuXHRnZXRUaGVtZSgpOiBTY2hlbWFUaGVtZSB7XG5cdFx0cmV0dXJuIHRoaXMuc2NoZW1hVGhlbWU7XG5cdH1cblxuXHRnZXRDc3NDbGFzc2VzKCk6IFNjaGVtYUNzc0NsYXNzIHtcblx0XHRyZXR1cm4gbmV3IFNjaGVtYUNzc0NsYXNzKFxuXHRcdFx0dGhpcy52ZXJ0aWNhbEdyaWRFbmFibGVkLFxuXHRcdFx0dGhpcy5ob3Jpem9udGFsR3JpZEVuYWJsZWQsXG5cdFx0XHR0aGlzLmdldFRoZW1lKCksXG5cdFx0XHR0aGlzLnJvd0NvbG9yaW5nXG5cdFx0KTtcblx0fVxuXG59XG4iXX0=