/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DataType } from '../field/data-type/data-type';
export class StructureSorter {
    /**
     * @param {?} id
     * @param {?} field
     * @param {?=} direction
     */
    constructor(id, field, direction = true) {
        this.rank = 1;
        this.sorterId = id;
        this.field = field;
        this.direction = direction;
    }
    /**
     * @return {?}
     */
    getId() {
        return this.sorterId;
    }
    /**
     * @return {?}
     */
    getRank() {
        return this.rank;
    }
    /**
     * @return {?}
     */
    getField() {
        return this.field;
    }
    /**
     * @return {?}
     */
    hasDirection() {
        return this.direction;
    }
    /**
     * @return {?}
     */
    changeDirection() {
        this.direction = !this.direction;
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    setDirection(direction) {
        this.direction = direction;
    }
    /**
     * @param {?} entities
     * @return {?}
     */
    sort(entities) {
        if (entities.length === 0) {
            return entities;
        }
        return entities.sort((/**
         * @param {?} entityOne
         * @param {?} entityTwo
         * @return {?}
         */
        (entityOne, entityTwo) => {
            /** @type {?} */
            let valueOne = this.direction ? this.field.getSortValue(entityOne) : this.field.getSortValue(entityTwo);
            /** @type {?} */
            let valueTwo = this.direction ? this.field.getSortValue(entityTwo) : this.field.getSortValue(entityOne);
            if (this.field.getDataType() === DataType.NUMBER) {
                return this.sortNumber(valueOne, valueTwo);
            }
            else if (this.field.getDataType() === DataType.BOOLEAN) {
                return this.sortBoolean(valueOne, valueTwo);
            }
            else if (this.field.getDataType() === DataType.STRING) {
                return this.sortString(valueOne, valueTwo);
            }
            else if (this.field.getDataType() === DataType.DATE) {
                return this.sortDate(valueOne, valueTwo);
            }
            else {
                return this.sortUnknown(valueOne, valueTwo);
            }
        }));
    }
    /**
     * @private
     * @param {?} strOne
     * @param {?} strTwo
     * @return {?}
     */
    sortString(strOne, strTwo) {
        /** @type {?} */
        const sureStrOne = '' + strOne;
        /** @type {?} */
        const sureStrTwo = '' + strTwo;
        return sureStrOne.localeCompare(sureStrTwo);
    }
    /**
     * @private
     * @param {?} numOne
     * @param {?} numTwo
     * @return {?}
     */
    sortNumber(numOne, numTwo) {
        /** @type {?} */
        const sureNumOne = +numOne;
        /** @type {?} */
        const sureNumTwo = +numTwo;
        return sureNumOne - sureNumTwo;
    }
    /**
     * @private
     * @param {?} booleanOne
     * @param {?} booleanTwo
     * @return {?}
     */
    sortBoolean(booleanOne, booleanTwo) {
        /** @type {?} */
        const sureBoolOne = !!booleanOne;
        /** @type {?} */
        const sureBoolTwo = !!booleanTwo;
        return (sureBoolOne === sureBoolTwo) ? 0 : sureBoolTwo ? -1 : 1;
    }
    /**
     * @private
     * @param {?} dateOne
     * @param {?} dateTwo
     * @return {?}
     */
    sortDate(dateOne, dateTwo) {
        return (/** @type {?} */ (dateOne)) - ((/** @type {?} */ (dateTwo)));
    }
    /**
     * @private
     * @param {?} a
     * @param {?} b
     * @return {?}
     */
    sortUnknown(a, b) {
        return 0;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.sorterId;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.columnId;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.field;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.rank;
    /**
     * @type {?}
     * @private
     */
    StructureSorter.prototype.direction;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RydWN0dXJlLnNvcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BnZW5lcmljLXVpL25neC1ncmlkLyIsInNvdXJjZXMiOlsibGliL3N0cnVjdHVyZS9kb21haW4vc3RydWN0dXJlL2NvbW1hbmQvc29ydC9zdHJ1Y3R1cmUuc29ydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFeEQsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQVkzQixZQUFZLEVBQVksRUFDckIsS0FBWSxFQUNaLFlBQXFCLElBQUk7UUFOcEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQU94QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUM1QixDQUFDOzs7O0lBRUQsS0FBSztRQUNKLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsT0FBTztRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQixDQUFDOzs7O0lBRUQsUUFBUTtRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsWUFBWTtRQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsZUFBZTtRQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLFNBQWtCO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLFFBQWlDO1FBRXJDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxRQUFRLENBQUM7U0FDaEI7UUFFRCxPQUFPLFFBQVEsQ0FBQyxJQUFJOzs7OztRQUFDLENBQUMsU0FBMkIsRUFBRSxTQUEyQixFQUFFLEVBQUU7O2dCQUU3RSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQzs7Z0JBQ3RHLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBRXBHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNqRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzNDO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsT0FBTyxFQUFFO2dCQUN6RCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzVDO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsTUFBTSxFQUFFO2dCQUN4RCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQzNDO2lCQUFNLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO2dCQUN0RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNOLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDNUM7UUFDRixDQUFDLEVBQUMsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFTyxVQUFVLENBQUMsTUFBYyxFQUFFLE1BQWM7O2NBRTFDLFVBQVUsR0FBRyxFQUFFLEdBQUcsTUFBTTs7Y0FDN0IsVUFBVSxHQUFHLEVBQUUsR0FBRyxNQUFNO1FBRXpCLE9BQU8sVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7Ozs7O0lBRU8sVUFBVSxDQUFDLE1BQWMsRUFBRSxNQUFjOztjQUUxQyxVQUFVLEdBQUcsQ0FBQyxNQUFNOztjQUN6QixVQUFVLEdBQUcsQ0FBQyxNQUFNO1FBRXJCLE9BQU8sVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDOzs7Ozs7O0lBRU8sV0FBVyxDQUFDLFVBQW1CLEVBQUUsVUFBbUI7O2NBRXJELFdBQVcsR0FBRyxDQUFDLENBQUMsVUFBVTs7Y0FDL0IsV0FBVyxHQUFHLENBQUMsQ0FBQyxVQUFVO1FBRTNCLE9BQU8sQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7Ozs7SUFFTyxRQUFRLENBQUMsT0FBYSxFQUFFLE9BQWE7UUFFNUMsT0FBTyxtQkFBQSxPQUFPLEVBQU8sR0FBRyxDQUFDLG1CQUFBLE9BQU8sRUFBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Ozs7OztJQUVPLFdBQVcsQ0FBQyxDQUFNLEVBQUUsQ0FBTTtRQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7Q0FFRDs7Ozs7O0lBcEdBLG1DQUFvQzs7Ozs7SUFFcEMsbUNBQXlCOzs7OztJQUV6QixnQ0FBcUI7Ozs7O0lBRXJCLCtCQUF5Qjs7Ozs7SUFFekIsb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU29ydGVySWQgfSBmcm9tICcuL3NvcnRlci5pZCc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9maWVsZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2NvbW1hbmQvb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBEYXRhVHlwZSB9IGZyb20gJy4uL2ZpZWxkL2RhdGEtdHlwZS9kYXRhLXR5cGUnO1xuXG5leHBvcnQgY2xhc3MgU3RydWN0dXJlU29ydGVyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHNvcnRlcklkOiBTb3J0ZXJJZDtcblxuXHRwcml2YXRlIGNvbHVtbklkOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBmaWVsZDogRmllbGQ7XG5cblx0cHJpdmF0ZSByYW5rOiBudW1iZXIgPSAxO1xuXG5cdHByaXZhdGUgZGlyZWN0aW9uOiBib29sZWFuO1xuXG5cdGNvbnN0cnVjdG9yKGlkOiBTb3J0ZXJJZCxcblx0XHRcdFx0ZmllbGQ6IEZpZWxkLFxuXHRcdFx0XHRkaXJlY3Rpb246IGJvb2xlYW4gPSB0cnVlKSB7XG5cdFx0dGhpcy5zb3J0ZXJJZCA9IGlkO1xuXHRcdHRoaXMuZmllbGQgPSBmaWVsZDtcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblx0fVxuXG5cdGdldElkKCk6IFNvcnRlcklkIHtcblx0XHRyZXR1cm4gdGhpcy5zb3J0ZXJJZDtcblx0fVxuXG5cdGdldFJhbmsoKTogbnVtYmVyIHtcblx0XHRyZXR1cm4gdGhpcy5yYW5rO1xuXHR9XG5cblx0Z2V0RmllbGQoKTogRmllbGQge1xuXHRcdHJldHVybiB0aGlzLmZpZWxkO1xuXHR9XG5cblx0aGFzRGlyZWN0aW9uKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmRpcmVjdGlvbjtcblx0fVxuXG5cdGNoYW5nZURpcmVjdGlvbigpOiB2b2lkIHtcblx0XHR0aGlzLmRpcmVjdGlvbiA9ICF0aGlzLmRpcmVjdGlvbjtcblx0fVxuXG5cdHNldERpcmVjdGlvbihkaXJlY3Rpb246IGJvb2xlYW4pOiB2b2lkIHtcblx0XHR0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblx0fVxuXG5cdHNvcnQoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0aWYgKGVudGl0aWVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuIGVudGl0aWVzO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbnRpdGllcy5zb3J0KChlbnRpdHlPbmU6IE9yaWdpbkl0ZW1FbnRpdHksIGVudGl0eVR3bzogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXG5cdFx0XHRsZXQgdmFsdWVPbmUgPSB0aGlzLmRpcmVjdGlvbiA/IHRoaXMuZmllbGQuZ2V0U29ydFZhbHVlKGVudGl0eU9uZSkgOiB0aGlzLmZpZWxkLmdldFNvcnRWYWx1ZShlbnRpdHlUd28pLFxuXHRcdFx0XHR2YWx1ZVR3byA9IHRoaXMuZGlyZWN0aW9uID8gdGhpcy5maWVsZC5nZXRTb3J0VmFsdWUoZW50aXR5VHdvKSA6IHRoaXMuZmllbGQuZ2V0U29ydFZhbHVlKGVudGl0eU9uZSk7XG5cblx0XHRcdGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLk5VTUJFUikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zb3J0TnVtYmVyKHZhbHVlT25lLCB2YWx1ZVR3byk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuQk9PTEVBTikge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zb3J0Qm9vbGVhbih2YWx1ZU9uZSwgdmFsdWVUd28pO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLmZpZWxkLmdldERhdGFUeXBlKCkgPT09IERhdGFUeXBlLlNUUklORykge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zb3J0U3RyaW5nKHZhbHVlT25lLCB2YWx1ZVR3byk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuZmllbGQuZ2V0RGF0YVR5cGUoKSA9PT0gRGF0YVR5cGUuREFURSkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zb3J0RGF0ZSh2YWx1ZU9uZSwgdmFsdWVUd28pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuc29ydFVua25vd24odmFsdWVPbmUsIHZhbHVlVHdvKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHByaXZhdGUgc29ydFN0cmluZyhzdHJPbmU6IHN0cmluZywgc3RyVHdvOiBzdHJpbmcpOiBudW1iZXIge1xuXG5cdFx0Y29uc3Qgc3VyZVN0ck9uZSA9ICcnICsgc3RyT25lLFxuXHRcdFx0c3VyZVN0clR3byA9ICcnICsgc3RyVHdvO1xuXG5cdFx0cmV0dXJuIHN1cmVTdHJPbmUubG9jYWxlQ29tcGFyZShzdXJlU3RyVHdvKTtcblx0fVxuXG5cdHByaXZhdGUgc29ydE51bWJlcihudW1PbmU6IG51bWJlciwgbnVtVHdvOiBudW1iZXIpOiBudW1iZXIge1xuXG5cdFx0Y29uc3Qgc3VyZU51bU9uZSA9ICtudW1PbmUsXG5cdFx0XHRzdXJlTnVtVHdvID0gK251bVR3bztcblxuXHRcdHJldHVybiBzdXJlTnVtT25lIC0gc3VyZU51bVR3bztcblx0fVxuXG5cdHByaXZhdGUgc29ydEJvb2xlYW4oYm9vbGVhbk9uZTogYm9vbGVhbiwgYm9vbGVhblR3bzogYm9vbGVhbik6IG51bWJlciB7XG5cblx0XHRjb25zdCBzdXJlQm9vbE9uZSA9ICEhYm9vbGVhbk9uZSxcblx0XHRcdHN1cmVCb29sVHdvID0gISFib29sZWFuVHdvO1xuXG5cdFx0cmV0dXJuIChzdXJlQm9vbE9uZSA9PT0gc3VyZUJvb2xUd28pID8gMCA6IHN1cmVCb29sVHdvID8gLTEgOiAxO1xuXHR9XG5cblx0cHJpdmF0ZSBzb3J0RGF0ZShkYXRlT25lOiBEYXRlLCBkYXRlVHdvOiBEYXRlKTogbnVtYmVyIHtcblxuXHRcdHJldHVybiBkYXRlT25lIGFzIGFueSAtIChkYXRlVHdvIGFzIGFueSk7XG5cdH1cblxuXHRwcml2YXRlIHNvcnRVbmtub3duKGE6IGFueSwgYjogYW55KTogbnVtYmVyIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG59XG4iXX0=