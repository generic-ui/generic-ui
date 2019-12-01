/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { GuiDataType } from '../../../../grid/app/grid.api';
import { DataType } from '../../../../../lib/structure/domain/structure/command/field/data-type/data-type';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb2x1bW4tdHlwZS5jb252ZXJ0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9uZ3gtZ3JpZC8iLCJzb3VyY2VzIjpbImd1aS9ncmlkL3VpL2dyaWQvY29sdW1uL2dyaWQuY29sdW1uLXR5cGUuY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlGQUFpRixDQUFDO0FBRTNHLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBRW5DLFdBQVcsQ0FBQyxJQUEwQjtRQUVyQyxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQzthQUFNO1lBQ04sT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDO0lBQ0YsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLFFBQXFCO1FBRTVDLFFBQVEsUUFBUSxFQUFFO1lBRWpCLEtBQUssV0FBVyxDQUFDLE1BQU07Z0JBQ3RCLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLFdBQVcsQ0FBQyxNQUFNO2dCQUN0QixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEIsS0FBSyxXQUFXLENBQUMsT0FBTztnQkFDdkIsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBRXpCLEtBQUssV0FBVyxDQUFDLElBQUk7Z0JBQ3BCLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLFdBQVcsQ0FBQyxPQUFPO2dCQUN2QixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFFekIsS0FBSyxXQUFXLENBQUMsTUFBTTtnQkFDdEIsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCO2dCQUNDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztTQUN4QjtJQUNGLENBQUM7Ozs7OztJQUVPLGlCQUFpQixDQUFDLElBQVk7O2NBQy9CLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7UUFFNUMsUUFBUSxXQUFXLEVBQUU7WUFFcEIsS0FBSyxRQUFRO2dCQUNaLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUV4QixLQUFLLFFBQVE7Z0JBQ1osT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBRXhCLEtBQUssU0FBUztnQkFDYixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7WUFFekIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztZQUV0QixLQUFLLFNBQVM7Z0JBQ2IsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDO1lBRXpCLEtBQUssUUFBUTtnQkFDWixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUM7WUFFeEI7Z0JBQ0MsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQztDQUVEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3VpRGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9ncmlkL2FwcC9ncmlkLmFwaSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xpYi9zdHJ1Y3R1cmUvZG9tYWluL3N0cnVjdHVyZS9jb21tYW5kL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuXG5leHBvcnQgY2xhc3MgR3JpZENvbHVtblR5cGVDb252ZXJ0ZXIge1xuXG5cdGNvbnZlcnRUeXBlKHR5cGU6IHN0cmluZyB8IEd1aURhdGFUeXBlKTogRGF0YVR5cGUge1xuXG5cdFx0aWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIHRoaXMuY29udmVydFR5cGVTdHJpbmcodHlwZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLmNvbnZlcnRUeXBlRW51bSh0eXBlKTtcblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGNvbnZlcnRUeXBlRW51bShlbnVtVHlwZTogR3VpRGF0YVR5cGUpOiBEYXRhVHlwZSB7XG5cblx0XHRzd2l0Y2ggKGVudW1UeXBlKSB7XG5cblx0XHRcdGNhc2UgR3VpRGF0YVR5cGUuU1RSSU5HOlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuU1RSSU5HO1xuXG5cdFx0XHRjYXNlIEd1aURhdGFUeXBlLk5VTUJFUjpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLk5VTUJFUjtcblxuXHRcdFx0Y2FzZSBHdWlEYXRhVHlwZS5CT09MRUFOOlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuQk9PTEVBTjtcblxuXHRcdFx0Y2FzZSBHdWlEYXRhVHlwZS5EQVRFOlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuREFURTtcblxuXHRcdFx0Y2FzZSBHdWlEYXRhVHlwZS5VTktOT1dOOlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuVU5LTk9XTjtcblxuXHRcdFx0Y2FzZSBHdWlEYXRhVHlwZS5DVVNUT006XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5DVVNUT007XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5TVFJJTkc7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBjb252ZXJ0VHlwZVN0cmluZyh0eXBlOiBzdHJpbmcpOiBEYXRhVHlwZSB7XG5cdFx0Y29uc3QgbG93ZXJlZFR5cGUgPSB0eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG5cblx0XHRzd2l0Y2ggKGxvd2VyZWRUeXBlKSB7XG5cblx0XHRcdGNhc2UgJ3N0cmluZyc6XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5TVFJJTkc7XG5cblx0XHRcdGNhc2UgJ251bWJlcic6XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5OVU1CRVI7XG5cblx0XHRcdGNhc2UgJ2Jvb2xlYW4nOlxuXHRcdFx0XHRyZXR1cm4gRGF0YVR5cGUuQk9PTEVBTjtcblxuXHRcdFx0Y2FzZSAnZGF0ZSc6XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5EQVRFO1xuXG5cdFx0XHRjYXNlICd1bmtub3duJzpcblx0XHRcdFx0cmV0dXJuIERhdGFUeXBlLlVOS05PV047XG5cblx0XHRcdGNhc2UgJ2N1c3RvbSc6XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5DVVNUT007XG5cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBEYXRhVHlwZS5TVFJJTkc7XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==