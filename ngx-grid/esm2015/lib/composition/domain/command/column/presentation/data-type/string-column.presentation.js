var StringColumnPresentation_1;
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ValueObject } from '@generic-ui/hermes';
import { ColumnPresentation } from '../column.presentation';
import { ColumnAlign } from '../../../../column-align';
import { CellView } from '../../../../cell-view';
let StringColumnPresentation = StringColumnPresentation_1 = class StringColumnPresentation extends ColumnPresentation {
    /**
     * @private
     */
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    static getInstance() {
        if (!StringColumnPresentation_1.instance) {
            StringColumnPresentation_1.instance = new StringColumnPresentation_1();
        }
        return StringColumnPresentation_1.instance;
    }
    /**
     * @return {?}
     */
    getPossibleViews() {
        return [
            CellView.TEXT,
            CellView.ITALIC,
            CellView.BOLD,
            CellView.IMAGE,
            CellView.LINK,
            CellView.CHIP
        ];
    }
    /**
     * @return {?}
     */
    getDefaultView() {
        return CellView.TEXT;
    }
    /**
     * @return {?}
     */
    getDefaultAlign() {
        return ColumnAlign.LEFT;
    }
};
StringColumnPresentation.instance = null;
StringColumnPresentation = StringColumnPresentation_1 = tslib_1.__decorate([
    ValueObject,
    tslib_1.__metadata("design:paramtypes", [])
], StringColumnPresentation);
export { StringColumnPresentation };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StringColumnPresentation.instance;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWNvbHVtbi5wcmVzZW50YXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9jb21wb3NpdGlvbi9kb21haW4vY29tbWFuZC9jb2x1bW4vcHJlc2VudGF0aW9uL2RhdGEtdHlwZS9zdHJpbmctY29sdW1uLnByZXNlbnRhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztJQUlwQyx3QkFBd0Isc0NBQXhCLHdCQUF5QixTQUFRLGtCQUFrQjs7OztJQVcvRDtRQUNDLEtBQUssRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7OztJQVhELE1BQU0sQ0FBQyxXQUFXO1FBQ2pCLElBQUksQ0FBQywwQkFBd0IsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsMEJBQXdCLENBQUMsUUFBUSxHQUFHLElBQUksMEJBQXdCLEVBQUUsQ0FBQztTQUNuRTtRQUNELE9BQU8sMEJBQXdCLENBQUMsUUFBUSxDQUFDO0lBQzFDLENBQUM7Ozs7SUFRRCxnQkFBZ0I7UUFDZixPQUFPO1lBQ04sUUFBUSxDQUFDLElBQUk7WUFDYixRQUFRLENBQUMsTUFBTTtZQUNmLFFBQVEsQ0FBQyxJQUFJO1lBQ2IsUUFBUSxDQUFDLEtBQUs7WUFDZCxRQUFRLENBQUMsSUFBSTtZQUNiLFFBQVEsQ0FBQyxJQUFJO1NBQ2IsQ0FBQztJQUNILENBQUM7Ozs7SUFFRCxjQUFjO1FBQ2IsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2QsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7Q0FDRCxDQUFBO0FBeEJlLGlDQUFRLEdBQTZCLElBQUksQ0FBQztBQVQ3Qyx3QkFBd0I7SUFEcEMsV0FBVzs7R0FDQyx3QkFBd0IsQ0FpQ3BDO1NBakNZLHdCQUF3Qjs7Ozs7O0lBU3BDLGtDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbHVlT2JqZWN0IH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgQ29sdW1uUHJlc2VudGF0aW9uIH0gZnJvbSAnLi4vY29sdW1uLnByZXNlbnRhdGlvbic7XG5pbXBvcnQgeyBDb2x1bW5BbGlnbiB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbHVtbi1hbGlnbic7XG5pbXBvcnQgeyBDZWxsVmlldyB9IGZyb20gJy4uLy4uLy4uLy4uL2NlbGwtdmlldyc7XG5cblxuQFZhbHVlT2JqZWN0XG5leHBvcnQgY2xhc3MgU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uIGV4dGVuZHMgQ29sdW1uUHJlc2VudGF0aW9uIHtcblxuXHRzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uIHtcblx0XHRpZiAoIVN0cmluZ0NvbHVtblByZXNlbnRhdGlvbi5pbnN0YW5jZSkge1xuXHRcdFx0U3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlID0gbmV3IFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbigpO1xuXHRcdH1cblx0XHRyZXR1cm4gU3RyaW5nQ29sdW1uUHJlc2VudGF0aW9uLmluc3RhbmNlO1xuXHR9XG5cblx0cHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFN0cmluZ0NvbHVtblByZXNlbnRhdGlvbiA9IG51bGw7XG5cblx0cHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG5cblx0Z2V0UG9zc2libGVWaWV3cygpOiBBcnJheTxDZWxsVmlldz4ge1xuXHRcdHJldHVybiBbXG5cdFx0XHRDZWxsVmlldy5URVhULFxuXHRcdFx0Q2VsbFZpZXcuSVRBTElDLFxuXHRcdFx0Q2VsbFZpZXcuQk9MRCxcblx0XHRcdENlbGxWaWV3LklNQUdFLFxuXHRcdFx0Q2VsbFZpZXcuTElOSyxcblx0XHRcdENlbGxWaWV3LkNISVBcblx0XHRdO1xuXHR9XG5cblx0Z2V0RGVmYXVsdFZpZXcoKTogQ2VsbFZpZXcge1xuXHRcdHJldHVybiBDZWxsVmlldy5URVhUO1xuXHR9XG5cblx0Z2V0RGVmYXVsdEFsaWduKCk6IENvbHVtbkFsaWduIHtcblx0XHRyZXR1cm4gQ29sdW1uQWxpZ24uTEVGVDtcblx0fVxufVxuIl19