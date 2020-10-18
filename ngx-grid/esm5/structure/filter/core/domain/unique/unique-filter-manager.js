/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KeyMap } from '@generic-ui/hermes';
import { UniqueValueCollection } from './unique-value-collection';
var UniqueFilterManager = /** @class */ (function () {
    function UniqueFilterManager() {
        this.uniqueValueMap = new KeyMap();
    }
    /**
     * @param {?} entities
     * @param {?} field
     * @return {?}
     */
    UniqueFilterManager.prototype.calculate = /**
     * @param {?} entities
     * @param {?} field
     * @return {?}
     */
    function (entities, field) {
        var _this = this;
        /** @type {?} */
        var fieldId = field.getId();
        /** @type {?} */
        var optUVM = this.uniqueValueMap.get(fieldId);
        optUVM.ifEmpty((/**
         * @return {?}
         */
        function () {
            var e_1, _a;
            /** @type {?} */
            var set = new Set();
            try {
                for (var entities_1 = tslib_1.__values(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                    var entity = entities_1_1.value;
                    set.add(field.getValue(entity));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // sort
            /** @type {?} */
            var sortedValues = Array.from(set.values()).sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                return ((/** @type {?} */ (field))).getField().sort(a, b);
            }));
            /** @type {?} */
            var uvc = new UniqueValueCollection(sortedValues, field);
            _this.uniqueValueMap.set(field.getId(), uvc);
        }));
    };
    /**
     * @param {?} entities
     * @param {?} fields
     * @return {?}
     */
    UniqueFilterManager.prototype.calculateAll = /**
     * @param {?} entities
     * @param {?} fields
     * @return {?}
     */
    function (entities, fields) {
        var e_2, _a;
        try {
            for (var fields_1 = tslib_1.__values(fields), fields_1_1 = fields_1.next(); !fields_1_1.done; fields_1_1 = fields_1.next()) {
                var field = fields_1_1.value;
                this.calculate(entities, field);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @param {?} entities
     * @param {?} fields
     * @return {?}
     */
    UniqueFilterManager.prototype.filterAll = /**
     * @param {?} entities
     * @param {?} fields
     * @return {?}
     */
    function (entities, fields) {
        var e_3, _a;
        /** @type {?} */
        var values = entities;
        try {
            for (var fields_2 = tslib_1.__values(fields), fields_2_1 = fields_2.next(); !fields_2_1.done; fields_2_1 = fields_2.next()) {
                var field = fields_2_1.value;
                values = this.filter(values, field);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (fields_2_1 && !fields_2_1.done && (_a = fields_2.return)) _a.call(fields_2);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return values;
    };
    /**
     * @param {?} entities
     * @param {?} field
     * @return {?}
     */
    UniqueFilterManager.prototype.filter = /**
     * @param {?} entities
     * @param {?} field
     * @return {?}
     */
    function (entities, field) {
        /** @type {?} */
        var values = [];
        this.uniqueValueMap
            .get(field.getId())
            .ifPresent((/**
         * @param {?} uvc
         * @return {?}
         */
        function (uvc) {
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
                function (itemEntity) {
                    var e_4, _a;
                    try {
                        for (var _b = tslib_1.__values(uvc.getNotSelected()), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var notSelectedValue = _c.value;
                            if (((/** @type {?} */ (field.getField()))).equals(itemEntity, ((/** @type {?} */ (notSelectedValue))).getValue())) {
                                return false;
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    return true;
                }));
            }
        }));
        return values;
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    UniqueFilterManager.prototype.selectAll = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        this.uniqueValueMap
            .get(fieldId)
            .ifPresent((/**
         * @param {?} uvc
         * @return {?}
         */
        function (uvc) {
            uvc.selectAll();
        }));
    };
    /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @return {?}
     */
    UniqueFilterManager.prototype.select = /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @return {?}
     */
    function (fieldId, uniqueValueId) {
        this.uniqueValueMap
            .get(fieldId)
            .ifPresent((/**
         * @param {?} uvc
         * @return {?}
         */
        function (uvc) {
            uvc.select(uniqueValueId);
        }));
    };
    /**
     * @param {?} fieldId
     * @return {?}
     */
    UniqueFilterManager.prototype.unselectAll = /**
     * @param {?} fieldId
     * @return {?}
     */
    function (fieldId) {
        this.uniqueValueMap
            .get(fieldId)
            .ifPresent((/**
         * @param {?} uvc
         * @return {?}
         */
        function (uvc) {
            uvc.unselectAll();
        }));
    };
    /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @return {?}
     */
    UniqueFilterManager.prototype.unselect = /**
     * @param {?} fieldId
     * @param {?} uniqueValueId
     * @return {?}
     */
    function (fieldId, uniqueValueId) {
        this.uniqueValueMap
            .get(fieldId)
            .ifPresent((/**
         * @param {?} uvc
         * @return {?}
         */
        function (uvc) {
            uvc.unselect(uniqueValueId);
        }));
    };
    /**
     * @param {?} fields
     * @return {?}
     */
    UniqueFilterManager.prototype.getAll = /**
     * @param {?} fields
     * @return {?}
     */
    function (fields) {
        var e_5, _a;
        /** @type {?} */
        var map = new Map();
        var _loop_1 = function (field) {
            this_1.getValues(field)
                .ifPresent((/**
             * @param {?} v
             * @return {?}
             */
            function (v) {
                map.set(field.getId().toString(), v);
            }));
        };
        var this_1 = this;
        try {
            for (var fields_3 = tslib_1.__values(fields), fields_3_1 = fields_3.next(); !fields_3_1.done; fields_3_1 = fields_3.next()) {
                var field = fields_3_1.value;
                _loop_1(field);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (fields_3_1 && !fields_3_1.done && (_a = fields_3.return)) _a.call(fields_3);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return map;
    };
    /**
     * @param {?} field
     * @return {?}
     */
    UniqueFilterManager.prototype.getValues = /**
     * @param {?} field
     * @return {?}
     */
    function (field) {
        return this.uniqueValueMap
            .get(field.getId())
            .map((/**
         * @param {?} uvc
         * @return {?}
         */
        function (uvc) {
            return uvc.getAll();
        }));
    };
    return UniqueFilterManager;
}());
export { UniqueFilterManager };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UniqueFilterManager.prototype.uniqueValueMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS91bmlxdWUtZmlsdGVyLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFLdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLbEU7SUFBQTtRQUVrQixtQkFBYyxHQUFHLElBQUksTUFBTSxFQUFrQyxDQUFDO0lBMEloRixDQUFDOzs7Ozs7SUF4SUEsdUNBQVM7Ozs7O0lBQVQsVUFBVSxRQUFpQyxFQUFFLEtBQVk7UUFBekQsaUJBd0JDOztZQXRCTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRTs7WUFFdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUUvQyxNQUFNLENBQUMsT0FBTzs7O1FBQUM7OztnQkFFUixHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUU7O2dCQUVyQixLQUFtQixJQUFBLGFBQUEsaUJBQUEsUUFBUSxDQUFBLGtDQUFBLHdEQUFFO29CQUF4QixJQUFJLE1BQU0scUJBQUE7b0JBQ2QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7aUJBQ2hDOzs7Ozs7Ozs7OztnQkFHSyxZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJOzs7OztZQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU07Z0JBQ2pFLE9BQU8sQ0FBQyxtQkFBQSxLQUFLLEVBQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFD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ZXNDb250ZW50IjpbImltcG9ydCB7IEtleU1hcCwgT3B0aW9uYWwgfSBmcm9tICdAZ2VuZXJpYy11aS9oZXJtZXMnO1xuXG5pbXBvcnQgeyBGaWVsZElkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQuaWQnO1xuaW1wb3J0IHsgT3JpZ2luSXRlbUVudGl0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3NvdXJjZS9jb3JlL2RvbWFpbi9vcmlnaW4vb3JpZ2luLWl0ZW0tZW50aXR5JztcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSAnLi4vLi4vLi4vLi4vZmllbGQvY29yZS9kb21haW4vZmllbGQvZmllbGQnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVDb2xsZWN0aW9uIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUtY29sbGVjdGlvbic7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZSB9IGZyb20gJy4vdW5pcXVlLXZhbHVlJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlSWQgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZS1pZCc7XG5cblxuZXhwb3J0IGNsYXNzIFVuaXF1ZUZpbHRlck1hbmFnZXIge1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgdW5pcXVlVmFsdWVNYXAgPSBuZXcgS2V5TWFwPEZpZWxkSWQsIFVuaXF1ZVZhbHVlQ29sbGVjdGlvbj4oKTtcblxuXHRjYWxjdWxhdGUoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+LCBmaWVsZDogRmllbGQpOiB2b2lkIHtcblxuXHRcdGNvbnN0IGZpZWxkSWQgPSBmaWVsZC5nZXRJZCgpO1xuXG5cdFx0Y29uc3Qgb3B0VVZNID0gdGhpcy51bmlxdWVWYWx1ZU1hcC5nZXQoZmllbGRJZCk7XG5cblx0XHRvcHRVVk0uaWZFbXB0eSgoKSA9PiB7XG5cblx0XHRcdGNvbnN0IHNldCA9IG5ldyBTZXQoKTtcblxuXHRcdFx0Zm9yIChsZXQgZW50aXR5IG9mIGVudGl0aWVzKSB7XG5cdFx0XHRcdHNldC5hZGQoZmllbGQuZ2V0VmFsdWUoZW50aXR5KSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHNvcnRcblx0XHRcdGNvbnN0IHNvcnRlZFZhbHVlcyA9IEFycmF5LmZyb20oc2V0LnZhbHVlcygpKS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKGZpZWxkIGFzIGFueSkuZ2V0RmllbGQoKS5zb3J0KGEsIGIpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IHV2YyA9IG5ldyBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24oc29ydGVkVmFsdWVzLCBmaWVsZCk7XG5cblx0XHRcdHRoaXMudW5pcXVlVmFsdWVNYXAuc2V0KGZpZWxkLmdldElkKCksIHV2Yyk7XG5cdFx0fSk7XG5cblx0fVxuXG5cdGNhbGN1bGF0ZUFsbChlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4sIGZpZWxkczogQXJyYXk8RmllbGQ+KTogdm9pZCB7XG5cdFx0Zm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG5cdFx0XHR0aGlzLmNhbGN1bGF0ZShlbnRpdGllcywgZmllbGQpO1xuXHRcdH1cblx0fVxuXG5cdGZpbHRlckFsbChlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4sIGZpZWxkczogQXJyYXk8RmllbGQ+KTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0bGV0IHZhbHVlczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBlbnRpdGllcztcblxuXHRcdGZvciAobGV0IGZpZWxkIG9mIGZpZWxkcykge1xuXG5cdFx0XHR2YWx1ZXMgPSB0aGlzLmZpbHRlcih2YWx1ZXMsIGZpZWxkKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdmFsdWVzO1xuXHR9XG5cblx0ZmlsdGVyKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiwgZmllbGQ6IEZpZWxkKTogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4ge1xuXG5cdFx0bGV0IHZhbHVlczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4gPSBbXTtcblxuXHRcdHRoaXMudW5pcXVlVmFsdWVNYXBcblx0XHRcdC5nZXQoZmllbGQuZ2V0SWQoKSlcblx0XHRcdC5pZlByZXNlbnQoKHV2YzogVW5pcXVlVmFsdWVDb2xsZWN0aW9uKSA9PiB7XG5cblx0XHRcdFx0aWYgKHV2Yy5pc0FsbFNlbGVjdGVkKCkpIHtcblx0XHRcdFx0XHR2YWx1ZXMgPSBlbnRpdGllcztcblx0XHRcdFx0fSBlbHNlIGlmICh1dmMuaXNBbGxEaXNhYmxlZCgpKSB7XG5cdFx0XHRcdFx0dmFsdWVzID0gW107XG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHR2YWx1ZXMgPSBlbnRpdGllcy5maWx0ZXIoKGl0ZW1FbnRpdHk6IE9yaWdpbkl0ZW1FbnRpdHkpID0+IHtcblxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgbm90U2VsZWN0ZWRWYWx1ZSBvZiB1dmMuZ2V0Tm90U2VsZWN0ZWQoKSkge1xuXG5cdFx0XHRcdFx0XHRcdGlmICgoZmllbGQuZ2V0RmllbGQoKSBhcyBhbnkpLmVxdWFscyhpdGVtRW50aXR5LCAobm90U2VsZWN0ZWRWYWx1ZSBhcyBhbnkpLmdldFZhbHVlKCkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHZhbHVlcztcblx0fVxuXG5cdHNlbGVjdEFsbChmaWVsZElkOiBGaWVsZElkKTogdm9pZCB7XG5cblx0XHR0aGlzLnVuaXF1ZVZhbHVlTWFwXG5cdFx0XHQuZ2V0KGZpZWxkSWQpXG5cdFx0XHQuaWZQcmVzZW50KCh1dmM6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbikgPT4ge1xuXHRcdFx0XHR1dmMuc2VsZWN0QWxsKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHNlbGVjdChmaWVsZElkOiBGaWVsZElkLCB1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkKTogdm9pZCB7XG5cblx0XHR0aGlzLnVuaXF1ZVZhbHVlTWFwXG5cdFx0XHQuZ2V0KGZpZWxkSWQpXG5cdFx0XHQuaWZQcmVzZW50KCh1dmM6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbikgPT4ge1xuXHRcdFx0XHR1dmMuc2VsZWN0KHVuaXF1ZVZhbHVlSWQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbChmaWVsZElkOiBGaWVsZElkKTogdm9pZCB7XG5cblx0XHR0aGlzLnVuaXF1ZVZhbHVlTWFwXG5cdFx0XHQuZ2V0KGZpZWxkSWQpXG5cdFx0XHQuaWZQcmVzZW50KCh1dmM6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbikgPT4ge1xuXHRcdFx0XHR1dmMudW5zZWxlY3RBbGwoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dW5zZWxlY3QoZmllbGRJZDogRmllbGRJZCwgdW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy51bmlxdWVWYWx1ZU1hcFxuXHRcdFx0LmdldChmaWVsZElkKVxuXHRcdFx0LmlmUHJlc2VudCgodXZjOiBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24pID0+IHtcblx0XHRcdFx0dXZjLnVuc2VsZWN0KHVuaXF1ZVZhbHVlSWQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRnZXRBbGwoZmllbGRzOiBBcnJheTxGaWVsZD4pOiBNYXA8c3RyaW5nLCBBcnJheTxVbmlxdWVWYWx1ZT4+IHtcblxuXHRcdGxldCBtYXAgPSBuZXcgTWFwKCk7XG5cblx0XHRmb3IgKGxldCBmaWVsZCBvZiBmaWVsZHMpIHtcblxuXHRcdFx0dGhpcy5nZXRWYWx1ZXMoZmllbGQpXG5cdFx0XHRcdC5pZlByZXNlbnQoKHYpID0+IHtcblx0XHRcdFx0XHRtYXAuc2V0KGZpZWxkLmdldElkKCkudG9TdHJpbmcoKSwgdik7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBtYXA7XG5cdH1cblxuXHRnZXRWYWx1ZXMoZmllbGQ6IEZpZWxkKTogT3B0aW9uYWw8QXJyYXk8VW5pcXVlVmFsdWU+PiB7XG5cblx0XHRyZXR1cm4gdGhpcy51bmlxdWVWYWx1ZU1hcFxuXHRcdFx0XHQgICAuZ2V0KGZpZWxkLmdldElkKCkpXG5cdFx0XHRcdCAgIC5tYXAoKHV2YzogVW5pcXVlVmFsdWVDb2xsZWN0aW9uKSA9PiB7XG5cdFx0XHRcdFx0ICAgcmV0dXJuIHV2Yy5nZXRBbGwoKTtcblx0XHRcdFx0ICAgfSk7XG5cdH1cblxufVxuIl19