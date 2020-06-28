/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { KeyMap } from '@generic-ui/hermes';
import { UniqueValueCollection } from './unique-value-collection';
export class UniqueFilterManager {
    constructor() {
        this.uniqueValueMap = new KeyMap();
    }
    /**
     * @param {?} entities
     * @param {?} field
     * @return {?}
     */
    calculate(entities, field) {
        /** @type {?} */
        const fieldId = field.getId();
        /** @type {?} */
        const optUVM = this.uniqueValueMap.get(fieldId);
        optUVM.ifEmpty((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const set = new Set();
            for (let entity of entities) {
                set.add(field.getValue(entity));
            }
            // sort
            /** @type {?} */
            const sortedValues = Array.from(set.values()).sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                return ((/** @type {?} */ (field))).getField().sort(a, b);
            }));
            /** @type {?} */
            const uvc = new UniqueValueCollection(sortedValues, field);
            this.uniqueValueMap.set(field.getId(), uvc);
        }));
    }
    /**
     * @param {?} entities
     * @param {?} fields
     * @return {?}
     */
    calculateAll(entities, fields) {
        for (let field of fields) {
            this.calculate(entities, field);
        }
    }
    /**
     * @param {?} entities
     * @param {?} fields
     * @return {?}
     */
    filterAll(entities, fields) {
        /** @type {?} */
        let values = entities;
        for (let field of fields) {
            values = this.filter(values, field);
        }
        return values;
    }
    /**
     * @param {?} entities
     * @param {?} field
     * @return {?}
     */
    filter(entities, field) {
        /** @type {?} */
        let values = [];
        this.uniqueValueMap
            .get(field.getId())
            .ifPresent((/**
         * @param {?} uvc
         * @return {?}
         */
        (uvc) => {
            if (uvc.isAllSelected()) {
                values = entities;
            }
            else if (uvc.isAllDisabled()) {
                values = [];
            }
            else {
                values = entities.filter((/**
                 * @param {?} itemEntity
                 * @return {?}
                 */
                (itemEntity) => {
                    for (let notSelectedValue of uvc.getNotSelected()) {
                        if (((/** @type {?} */ (field.getField()))).equals(itemEntity, ((/** @type {?} */ (notSelectedValue))).getValue())) {
                            return false;
                        }
                    }
                    return true;
                }));
            }
        }));
        return values;
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    selectAll(fieldId) {
        this.uniqueValueMap
            .get(fieldId)
            .ifPresent((/**
         * @param {?} uvc
         * @return {?}
         */
        (uvc) => {
            uvc.selectAll();
        }));
    }
    /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @return {?}
     */
    select(fieldId, uniqueValueId) {
        this.uniqueValueMap
            .get(fieldId)
            .ifPresent((/**
         * @param {?} uvc
         * @return {?}
         */
        (uvc) => {
            uvc.select(uniqueValueId);
        }));
    }
    /**
     * @param {?} fieldId
     * @return {?}
     */
    unselectAll(fieldId) {
        this.uniqueValueMap
            .get(fieldId)
            .ifPresent((/**
         * @param {?} uvc
         * @return {?}
         */
        (uvc) => {
            uvc.unselectAll();
        }));
    }
    /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @return {?}
     */
    unselect(fieldId, uniqueValueId) {
        this.uniqueValueMap
            .get(fieldId)
            .ifPresent((/**
         * @param {?} uvc
         * @return {?}
         */
        (uvc) => {
            uvc.unselect(uniqueValueId);
        }));
    }
    /**
     * @param {?} fields
     * @return {?}
     */
    getAll(fields) {
        /** @type {?} */
        let map = new Map();
        for (let field of fields) {
            this.getValues(field)
                .ifPresent((/**
             * @param {?} v
             * @return {?}
             */
            (v) => {
                map.set(field.getId().toString(), v);
            }));
        }
        return map;
    }
    /**
     * @param {?} field
     * @return {?}
     */
    getValues(field) {
        return this.uniqueValueMap
            .get(field.getId())
            .map((/**
         * @param {?} uvc
         * @return {?}
         */
        (uvc) => {
            return uvc.getAll();
        }));
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    UniqueFilterManager.prototype.uniqueValueMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi91bmlxdWUvdW5pcXVlLWZpbHRlci1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFLdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLbEUsTUFBTSxPQUFPLG1CQUFtQjtJQUFoQztRQUVrQixtQkFBYyxHQUFHLElBQUksTUFBTSxFQUFrQyxDQUFDO0lBMEloRixDQUFDOzs7Ozs7SUF4SUEsU0FBUyxDQUFDLFFBQWlDLEVBQUUsS0FBWTs7Y0FFbEQsT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUU7O2NBRXZCLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFFL0MsTUFBTSxDQUFDLE9BQU87OztRQUFDLEdBQUcsRUFBRTs7a0JBRWIsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFO1lBRXJCLEtBQUssSUFBSSxNQUFNLElBQUksUUFBUSxFQUFFO2dCQUM1QixHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUNoQzs7O2tCQUdLLFlBQVksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLElBQUk7Ozs7O1lBQUMsQ0FBQyxDQUFNLEVBQUUsQ0FBTSxFQUFFLEVBQUU7Z0JBQ3JFLE9BQU8sQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0MsQ0FBQyxFQUFDOztrQkFFSSxHQUFHLEdBQUcs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LENBQUMsR0FBMEIsRUFBRSxFQUFFO1lBQ3pDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxNQUFvQjs7WUFFdEIsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFO1FBRW5CLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO1lBRXpCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO2lCQUNuQixTQUFTOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDaEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxFQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ1osQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBWTtRQUVyQixPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3BCLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDbEIsR0FBRzs7OztRQUFDLENBQUMsR0FBMEIsRUFBRSxFQUFFO1lBQ25DLE9BQU8sR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLENBQUMsRUFBQyxDQUFDO0lBQ1QsQ0FBQztDQUVEOzs7Ozs7SUExSUEsNkNBQStFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgS2V5TWFwLCBPcHRpb25hbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpZWxkSWQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZC5pZCc7XG5pbXBvcnQgeyBPcmlnaW5JdGVtRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vc291cmNlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vZmllbGQvZG9tYWluL2NvcmUvZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVDb2xsZWN0aW9uIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUtY29sbGVjdGlvbic7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZSB9IGZyb20gJy4vdW5pcXVlLXZhbHVlJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlSWQgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZS1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFVuaXF1ZUZpbHRlck1hbmFnZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdW5pcXVlVmFsdWVNYXAgPSBuZXcgS2V5TWFwPEZpZWxkSWQsIFVuaXF1ZVZhbHVlQ29sbGVjdGlvbj4oKTtcblxuXHRjYWxjdWxhdGUoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+LCBmaWVsZDogRmllbGQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQgPSBmaWVsZC5nZXRJZCgpO1xuXG5cdFx0Y29uc3Qgb3B0VVZNID0gdGhpcy51bmlxdWVWYWx1ZU1hcC5nZXQoZmllbGRJZCk7XG5cblx0XHRvcHRVVk0uaWZFbXB0eSgoKSA9PiB7XG5cblx0XHRcdGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcblxuXHRcdFx0Zm9yIChsZXQgZW50aXR5IG9mIGVudGl0aWVzKSB7XG5cdFx0XHRcdHNldC5hZGQoZmllbGQuZ2V0VmFsdWUoZW50aXR5KSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHNvcnRcblx0XHRcdGNvbnN0IHNvcnRlZFZhbHVlcyA9IEFycmF5LmZyb20oc2V0LnZhbHVlcygpKS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKGZpZWxkIGFzIGFueSkuZ2V0RmllbGQoKS5zb3J0KGEsIGIpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IHV2YyA9IG5ldyBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24oc29ydGVkVmFsdWVzLCBmaWVsZCk7XG5cblx0XHRcdHRoaXMudW5pcXVlVmFsdWVNYXAuc2V0KGZpZWxkLmdldElkKCksIHV2Yyk7XG5cdFx0fSk7XG5cblx0fVxuXG5cdGNhbGN1bGF0ZUFsbChlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4sIGZpZWxkczogQXJyYXk8RmllbGQ+KTogdm9pZCB7XG5cdFx0Zm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG5cdFx0XHR0aGlzLmNhbGN1bGF0ZShlbnRpdGllcywgZmllbGQpO1xuXHRcdH1cblx0fVxuXG5cdGZpbHRlckFsbChlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4sIGZpZWxkczogQXJyYXk8RmllbGQ+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0bGV0IHZhbHVlczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBlbnRpdGllcztcblxuXHRcdGZvciAobGV0IGZpZWxkIG9mIGZpZWxkcykge1xuXG5cdFx0XHR2YWx1ZXMgPSB0aGlzLmZpbHRlcih2YWx1ZXMsIGZpZWxkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWVzO1xuXHR9XG5cblx0ZmlsdGVyKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiwgZmllbGQ6IEZpZWxkKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0bGV0IHZhbHVlczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXTtcblxuXHRcdHRoaXMudW5pcXVlVmFsdWVNYXBcblx0XHRcdC5nZXQoZmllbGQuZ2V0SWQoKSlcblx0XHRcdC5pZlByZXNlbnQoKHV2YzogVW5pcXVlVmFsdWVDb2xsZWN0aW9uKSA9PiB7XG5cblx0XHRcdFx0aWYgKHV2Yy5pc0FsbFNlbGVjdGVkKCkpIHtcblx0XHRcdFx0XHR2YWx1ZXMgPSBlbnRpdGllcztcblx0XHRcdFx0fSBlbHNlIGlmICh1dmMuaXNBbGxEaXNhYmxlZCgpKSB7XG5cdFx0XHRcdFx0dmFsdWVzID0gW107XG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHR2YWx1ZXMgPSBlbnRpdGllcy5maWx0ZXIoKGl0ZW1FbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgbm90U2VsZWN0ZWRWYWx1ZSBvZiB1dmMuZ2V0Tm90U2VsZWN0ZWQoKSkge1xuXG5cdFx0XHRcdFx0XHRcdGlmICgoZmllbGQuZ2V0RmllbGQoKSBhcyBhbnkpLmVxdWFscyhpdGVtRW50aXR5LCAobm90U2VsZWN0ZWRWYWx1ZSBhcyBhbnkpLmdldFZhbHVlKCkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHZhbHVlcztcblx0fVxuXG5cdHNlbGVjdEFsbChmaWVsZElkOiBGaWVsZElkKTogdm9pZCB7XG5cblx0XHR0aGlzLnVuaXF1ZVZhbHVlTWFwXG5cdFx0XHQuZ2V0KGZpZWxkSWQpXG5cdFx0XHQuaWZQcmVzZW50KCh1dmM6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbikgPT4ge1xuXHRcdFx0XHR1dmMuc2VsZWN0QWxsKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHNlbGVjdChmaWVsZElkOiBGaWVsZElkLCB1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkKTogdm9pZCB7XG5cblx0XHR0aGlzLnVuaXF1ZVZhbHVlTWFwXG5cdFx0XHQuZ2V0KGZpZWxkSWQpXG5cdFx0XHQuaWZQcmVzZW50KCh1dmM6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbikgPT4ge1xuXHRcdFx0XHR1dmMuc2VsZWN0KHVuaXF1ZVZhbHVlSWQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbChmaWVsZElkOiBGaWVsZElkKTogdm9pZCB7XG5cblx0XHR0aGlzLnVuaXF1ZVZhbHVlTWFwXG5cdFx0XHQuZ2V0KGZpZWxkSWQpXG5cdFx0XHQuaWZQcmVzZW50KCh1dmM6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbikgPT4ge1xuXHRcdFx0XHR1dmMudW5zZWxlY3RBbGwoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dW5zZWxlY3QoZmllbGRJZDogRmllbGRJZCwgdW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy51bmlxdWVWYWx1ZU1hcFxuXHRcdFx0LmdldChmaWVsZElkKVxuXHRcdFx0LmlmUHJlc2VudCgodXZjOiBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24pID0+IHtcblx0XHRcdFx0dXZjLnVuc2VsZWN0KHVuaXF1ZVZhbHVlSWQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRnZXRBbGwoZmllbGRzOiBBcnJheTxGaWVsZD4pOiBNYXA8c3RyaW5nLCBBcnJheTxVbmlxdWVWYWx1ZT4+IHtcblxuXHRcdGxldCBtYXAgPSBuZXcgTWFwKCk7XG5cblx0XHRmb3IgKGxldCBmaWVsZCBvZiBmaWVsZHMpIHtcblxuXHRcdFx0dGhpcy5nZXRWYWx1ZXMoZmllbGQpXG5cdFx0XHRcdC5pZlByZXNlbnQoKHYpID0+IHtcblx0XHRcdFx0XHRtYXAuc2V0KGZpZWxkLmdldElkKCkudG9TdHJpbmcoKSwgdik7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXA7XG5cdH1cblxuXHRnZXRWYWx1ZXMoZmllbGQ6IEZpZWxkKTogT3B0aW9uYWw8QXJyYXk8VW5pcXVlVmFsdWU+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy51bmlxdWVWYWx1ZU1hcFxuXHRcdFx0XHQgICAuZ2V0KGZpZWxkLmdldElkKCkpXG5cdFx0XHRcdCAgIC5tYXAoKHV2YzogVW5pcXVlVmFsdWVDb2xsZWN0aW9uKSA9PiB7XG5cdFx0XHRcdFx0ICAgcmV0dXJuIHV2Yy5nZXRBbGwoKTtcblx0XHRcdFx0ICAgfSk7XG5cdH1cblxufVxuIl19