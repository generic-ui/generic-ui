/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiDataType } from '../../../ui-api/grid.api';
import { DataType } from '../../../../../lib/structure/domain/structure/field/data-type/data-type';
export class GridColumnTypeConverter {
    /**
     * @param {?} type
     * @return {?}
     */
    convertType(type) {
        if (typeof type === 'string') {
            return this.convertTypeString(type);
        }
        else {
            return this.convertTypeEnum(type);
        }
    }
    /**
     * @private
     * @param {?} enumType
     * @return {?}
     */
    convertTypeEnum(enumType) {
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
    }
    /**
     * @private
     * @param {?} type
     * @return {?}
     */
    convertTypeString(type) {
        /** @type {?} */
        const loweredType = type.toLocaleLowerCase();
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
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tdHlwZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpL2dyaWQvY29sdW1uL2dyaWQuY29sdW1uLXR5cGUuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlFQUF5RSxDQUFDO0FBRW5HLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBRW5DLFdBQVcsQ0FBQyxJQUEwQjtRQUVyQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLFFBQXFCO1FBRTVDLFFBQVEsUUFBUSxFQUFFO1lBRWpCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3RCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLFdBQVcsQ0FBQyxNQUFNO2dCQUN0QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEIsS0FBSyxXQUFXLENBQUMsT0FBTztnQkFDdkIsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBRXpCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLFdBQVcsQ0FBQyxPQUFPO2dCQUN2QixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFFekIsS0FBSyxXQUFXLENBQUMsTUFBTTtnQkFDdEIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCO2dCQUNDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUN4QjtJQUNGLENBQUM7Ozs7OztJQUVPLGlCQUFpQixDQUFDLElBQVk7O2NBQy9CLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFFNUMsUUFBUSxXQUFXLEVBQUU7WUFFcEIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCLEtBQUssU0FBUztnQkFDYixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFFekIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBRXpCLEtBQUssUUFBUTtnQkFDWixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEI7Z0JBQ0MsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi91aS1hcGkvZ3JpZC5hcGknO1xuaW1wb3J0IHsgRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9saWIvc3RydWN0dXJlL2RvbWFpbi9zdHJ1Y3R1cmUvZmllbGQvZGF0YS10eXBlL2RhdGEtdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uVHlwZUNvbnZlcnRlciB7XG5cblx0Y29udmVydFR5cGUodHlwZTogc3RyaW5nIHwgR3VpRGF0YVR5cGUpOiBEYXRhVHlwZSB7XG5cblx0XHRpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5jb252ZXJ0VHlwZVN0cmluZyh0eXBlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFR5cGVFbnVtKHR5cGUpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgY29udmVydFR5cGVFbnVtKGVudW1UeXBlOiBHdWlEYXRhVHlwZSk6IERhdGFUeXBlIHtcblxuXHRcdHN3aXRjaCAoZW51bVR5cGUpIHtcblxuXHRcdFx0Y2FzZSBHdWlEYXRhVHlwZS5TVFJJTkc6XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5TVFJJTkc7XG5cblx0XHRcdGNhc2UgR3VpRGF0YVR5cGUuTlVNQkVSOlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuTlVNQkVSO1xuXG5cdFx0XHRjYXNlIEd1aURhdGFUeXBlLkJPT0xFQU46XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5CT09MRUFOO1xuXG5cdFx0XHRjYXNlIEd1aURhdGFUeXBlLkRBVEU6XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5EQVRFO1xuXG5cdFx0XHRjYXNlIEd1aURhdGFUeXBlLlVOS05PV046XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5VTktOT1dOO1xuXG5cdFx0XHRjYXNlIEd1aURhdGFUeXBlLkNVU1RPTTpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLkNVU1RPTTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLlNUUklORztcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRUeXBlU3RyaW5nKHR5cGU6IHN0cmluZyk6IERhdGFUeXBlIHtcblx0XHRjb25zdCBsb3dlcmVkVHlwZSA9IHR5cGUudG9Mb2NhbGVMb3dlckNhc2UoKTtcblxuXHRcdHN3aXRjaCAobG93ZXJlZFR5cGUpIHtcblxuXHRcdFx0Y2FzZSAnc3RyaW5nJzpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLlNUUklORztcblxuXHRcdFx0Y2FzZSAnbnVtYmVyJzpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLk5VTUJFUjtcblxuXHRcdFx0Y2FzZSAnYm9vbGVhbic6XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5CT09MRUFOO1xuXG5cdFx0XHRjYXNlICdkYXRlJzpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLkRBVEU7XG5cblx0XHRcdGNhc2UgJ3Vua25vd24nOlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuVU5LTk9XTjtcblxuXHRcdFx0Y2FzZSAnY3VzdG9tJzpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLkNVU1RPTTtcblxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLlNUUklORztcblx0XHR9XG5cdH1cblxufVxuIl19