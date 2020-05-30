/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiDataType } from '../../../domain-api/grid.api';
import { DataType } from '../../../../../structure/field/domain/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tdHlwZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL2ZlYXR1cmUvZ3JpZC9jb2x1bW4vZ3JpZC5jb2x1bW4tdHlwZS5jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFFckY7SUFBQTtJQWtFQSxDQUFDOzs7OztJQWhFQSw2Q0FBVzs7OztJQUFYLFVBQVksSUFBMEI7UUFFckMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEM7YUFBTTtZQUNOLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNsQztJQUNGLENBQUM7Ozs7OztJQUVPLGlEQUFlOzs7OztJQUF2QixVQUF3QixRQUFxQjtRQUU1QyxRQUFRLFFBQVEsRUFBRTtZQUVqQixLQUFLLFdBQVcsQ0FBQyxNQUFNO2dCQUN0QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEIsS0FBSyxXQUFXLENBQUMsTUFBTTtnQkFDdEIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCLEtBQUssV0FBVyxDQUFDLE9BQU87Z0JBQ3ZCLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUV6QixLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNwQixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFFdEIsS0FBSyxXQUFXLENBQUMsT0FBTztnQkFDdkIsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBRXpCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3RCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QjtnQkFDQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7U0FDeEI7SUFDRixDQUFDOzs7Ozs7SUFFTyxtREFBaUI7Ozs7O0lBQXpCLFVBQTBCLElBQVk7O1lBQy9CLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFFNUMsUUFBUSxXQUFXLEVBQUU7WUFFcEIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCLEtBQUssU0FBUztnQkFDYixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFFekIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBRXpCLEtBQUssUUFBUTtnQkFDWixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEI7Z0JBQ0MsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQztJQUVGLDhCQUFDO0FBQUQsQ0FBQyxBQWxFRCxJQWtFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEd1aURhdGFUeXBlIH0gZnJvbSAnLi4vLi4vLi4vZG9tYWluLWFwaS9ncmlkLmFwaSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL3N0cnVjdHVyZS9maWVsZC9kb21haW4vZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uVHlwZUNvbnZlcnRlciB7XG5cblx0Y29udmVydFR5cGUodHlwZTogc3RyaW5nIHwgR3VpRGF0YVR5cGUpOiBEYXRhVHlwZSB7XG5cblx0XHRpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0VHlwZVN0cmluZyh0eXBlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFR5cGVFbnVtKHR5cGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFR5cGVFbnVtKGVudW1UeXBlOiBHdWlEYXRhVHlwZSk6IERhdGFUeXBlIHtcblxuXHRcdHN3aXRjaCAoZW51bVR5cGUpIHtcblxuXHRcdFx0Y2FzZSBHdWlEYXRhVHlwZS5TVFJJTkc6XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5TVFJJTkc7XG5cblx0XHRcdGNhc2UgR3VpRGF0YVR5cGUuTlVNQkVSOlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuTlVNQkVSO1xuXG5cdFx0XHRjYXNlIEd1aURhdGFUeXBlLkJPT0xFQU46XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5CT09MRUFOO1xuXG5cdFx0XHRjYXNlIEd1aURhdGFUeXBlLkRBVEU6XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5EQVRFO1xuXG5cdFx0XHRjYXNlIEd1aURhdGFUeXBlLlVOS05PV046XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5VTktOT1dOO1xuXG5cdFx0XHRjYXNlIEd1aURhdGFUeXBlLkNVU1RPTTpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLkNVU1RPTTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLlNUUklORztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRUeXBlU3RyaW5nKHR5cGU6IHN0cmluZyk6IERhdGFUeXBlIHtcblx0XHRjb25zdCBsb3dlcmVkVHlwZSA9IHR5cGUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFR5cGUpIHtcblxuXHRcdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLlNUUklORztcblxuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLk5VTUJFUjtcblxuXHRcdFx0Y2FzZSAnYm9vbGVhbic6XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5CT09MRUFOO1xuXG5cdFx0XHRjYXNlICdkYXRlJzpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLkRBVEU7XG5cblx0XHRcdGNhc2UgJ3Vua25vd24nOlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuVU5LTk9XTjtcblxuXHRcdFx0Y2FzZSAnY3VzdG9tJzpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLkNVU1RPTTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLlNUUklORztcblx0XHR9XG5cdH1cblxufVxuIl19