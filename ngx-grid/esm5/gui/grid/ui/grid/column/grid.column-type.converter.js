/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiDataType } from '../../../ui-api/grid.api';
import { DataType } from '../../../../../lib/structure/domain/structure/field/data-type/data-type';
var GridColumnTypeConverter = /** @class */ (function () {
    function GridColumnTypeConverter() {
    }
    /**
     * @param {?} type
     * @return {?}
     */
    GridColumnTypeConverter.prototype.convertType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (typeof type === 'string') {
            return this.convertTypeString(type);
        }
        else {
            return this.convertTypeEnum(type);
        }
    };
    /**
     * @private
     * @param {?} enumType
     * @return {?}
     */
    GridColumnTypeConverter.prototype.convertTypeEnum = /**
     * @private
     * @param {?} enumType
     * @return {?}
     */
    function (enumType) {
        switch (enumType) {
            case GuiDataType.STRING:
                return DataType.STRING;
            case GuiDataType.NUMBER:
                return DataType.NUMBER;
            case GuiDataType.BOOLEAN:
                return DataType.BOOLEAN;
            case GuiDataType.DATE:
                return DataType.DATE;
            case GuiDataType.UNKNOWN:
                return DataType.UNKNOWN;
            case GuiDataType.CUSTOM:
                return DataType.CUSTOM;
            default:
                return DataType.STRING;
        }
    };
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    GridColumnTypeConverter.prototype.convertTypeString = /**
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        /** @type {?} */
        var loweredType = type.toLocaleLowerCase();
        switch (loweredType) {
            case 'string':
                return DataType.STRING;
            case 'number':
                return DataType.NUMBER;
            case 'boolean':
                return DataType.BOOLEAN;
            case 'date':
                return DataType.DATE;
            case 'unknown':
                return DataType.UNKNOWN;
            case 'custom':
                return DataType.CUSTOM;
            default:
                return DataType.STRING;
        }
    };
    return GridColumnTypeConverter;
}());
export { GridColumnTypeConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tdHlwZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpL2dyaWQvY29sdW1uL2dyaWQuY29sdW1uLXR5cGUuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBRW5HO0lBQUE7SUFrRUEsQ0FBQzs7Ozs7SUFoRUEsNkNBQVc7Ozs7SUFBWCxVQUFZLElBQTBCO1FBRXJDLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEM7SUFDRixDQUFDOzs7Ozs7SUFFTyxpREFBZTs7Ozs7SUFBdkIsVUFBd0IsUUFBcUI7UUFFNUMsUUFBUSxRQUFRLEVBQUU7WUFFakIsS0FBSyxXQUFXLENBQUMsTUFBTTtnQkFDdEIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3RCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLFdBQVcsQ0FBQyxPQUFPO2dCQUN2QixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFFekIsS0FBSyxXQUFXLENBQUMsSUFBSTtnQkFDcEIsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBRXRCLEtBQUssV0FBVyxDQUFDLE9BQU87Z0JBQ3ZCLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUV6QixLQUFLLFdBQVcsQ0FBQyxNQUFNO2dCQUN0QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEI7Z0JBQ0MsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sbURBQWlCOzs7OztJQUF6QixVQUEwQixJQUFZOztZQUMvQixXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1FBRTVDLFFBQVEsV0FBVyxFQUFFO1lBRXBCLEtBQUssUUFBUTtnQkFDWixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBRXpCLEtBQUssTUFBTTtnQkFDVixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxTQUFTO2dCQUNiLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUV6QixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCO2dCQUNDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUN4QjtJQUNGLENBQUM7SUFFRiw4QkFBQztBQUFELENBQUMsQUFsRUQsSUFrRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHdWlEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uL3VpLWFwaS9ncmlkLmFwaSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9maWVsZC9kYXRhLXR5cGUvZGF0YS10eXBlJztcblxuZXhwb3J0IGNsYXNzIEdyaWRDb2x1bW5UeXBlQ29udmVydGVyIHtcblxuXHRjb252ZXJ0VHlwZSh0eXBlOiBzdHJpbmcgfCBHdWlEYXRhVHlwZSk6IERhdGFUeXBlIHtcblxuXHRcdGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRUeXBlU3RyaW5nKHR5cGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0VHlwZUVudW0odHlwZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0VHlwZUVudW0oZW51bVR5cGU6IEd1aURhdGFUeXBlKTogRGF0YVR5cGUge1xuXG5cdFx0c3dpdGNoIChlbnVtVHlwZSkge1xuXG5cdFx0XHRjYXNlIEd1aURhdGFUeXBlLlNUUklORzpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLlNUUklORztcblxuXHRcdFx0Y2FzZSBHdWlEYXRhVHlwZS5OVU1CRVI6XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5OVU1CRVI7XG5cblx0XHRcdGNhc2UgR3VpRGF0YVR5cGUuQk9PTEVBTjpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLkJPT0xFQU47XG5cblx0XHRcdGNhc2UgR3VpRGF0YVR5cGUuREFURTpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLkRBVEU7XG5cblx0XHRcdGNhc2UgR3VpRGF0YVR5cGUuVU5LTk9XTjpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLlVOS05PV047XG5cblx0XHRcdGNhc2UgR3VpRGF0YVR5cGUuQ1VTVE9NOlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuQ1VTVE9NO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuU1RSSU5HO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFR5cGVTdHJpbmcodHlwZTogc3RyaW5nKTogRGF0YVR5cGUge1xuXHRcdGNvbnN0IGxvd2VyZWRUeXBlID0gdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG5cdFx0c3dpdGNoIChsb3dlcmVkVHlwZSkge1xuXG5cdFx0XHRjYXNlICdzdHJpbmcnOlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuU1RSSU5HO1xuXG5cdFx0XHRjYXNlICdudW1iZXInOlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuTlVNQkVSO1xuXG5cdFx0XHRjYXNlICdib29sZWFuJzpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLkJPT0xFQU47XG5cblx0XHRcdGNhc2UgJ2RhdGUnOlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuREFURTtcblxuXHRcdFx0Y2FzZSAndW5rbm93bic6XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5VTktOT1dOO1xuXG5cdFx0XHRjYXNlICdjdXN0b20nOlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuQ1VTVE9NO1xuXG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuU1RSSU5HO1xuXHRcdH1cblx0fVxuXG59XG4iXX0=