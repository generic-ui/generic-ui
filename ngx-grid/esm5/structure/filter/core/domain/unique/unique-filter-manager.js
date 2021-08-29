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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2NvcmUvZG9tYWluL3VuaXF1ZS91bmlxdWUtZmlsdGVyLW1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFLdEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLbEU7SUFBQTtRQUVrQixtQkFBYyxHQUFHLElBQUksTUFBTSxFQUFrQyxDQUFDO0lBMEloRixDQUFDOzs7Ozs7SUF4SUEsdUNBQVM7Ozs7O0lBQVQsVUFBVSxRQUFpQyxFQUFFLEtBQVk7UUFBekQsaUJBd0JDOztZQXRCTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRTs7WUFFdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUUvQyxNQUFNLENBQUMsT0FBTzs7O1FBQUM7OztnQkFFUixHQUFHLEdBQUcsSUFBSSxHQUFHLEVBQUU7O2dCQUVyQixLQUFxQixJQUFBLGFBQUEsaUJBQUEsUUFBUSxDQUFBLGtDQUFBLHdEQUFFO29CQUExQixJQUFNLE1BQU0scUJBQUE7b0JBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUNoQzs7Ozs7Ozs7Ozs7Z0JBR0ssWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSTs7Ozs7WUFBQyxVQUFDLENBQU0sRUFBRSxDQUFNO2dCQUNqRSxPQUFPLENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FB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Y2VzQ29udGVudCI6WyJpbXBvcnQgeyBLZXlNYXAsIE9wdGlvbmFsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi8uLi9zb3VyY2UvY29yZS9kb21haW4vb3JpZ2luL29yaWdpbi1pdGVtLWVudGl0eSc7XG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZpZWxkL2NvcmUvZG9tYWluL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbiB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLWNvbGxlY3Rpb24nO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWUgfSBmcm9tICcuL3VuaXF1ZS12YWx1ZSc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUlkIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUtaWQnO1xuXG5cbmV4cG9ydCBjbGFzcyBVbmlxdWVGaWx0ZXJNYW5hZ2VyIHtcblxuXHRwcml2YXRlIHJlYWRvbmx5IHVuaXF1ZVZhbHVlTWFwID0gbmV3IEtleU1hcDxGaWVsZElkLCBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24+KCk7XG5cblx0Y2FsY3VsYXRlKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiwgZmllbGQ6IEZpZWxkKTogdm9pZCB7XG5cblx0XHRjb25zdCBmaWVsZElkID0gZmllbGQuZ2V0SWQoKTtcblxuXHRcdGNvbnN0IG9wdFVWTSA9IHRoaXMudW5pcXVlVmFsdWVNYXAuZ2V0KGZpZWxkSWQpO1xuXG5cdFx0b3B0VVZNLmlmRW1wdHkoKCkgPT4ge1xuXG5cdFx0XHRjb25zdCBzZXQgPSBuZXcgU2V0KCk7XG5cblx0XHRcdGZvciAoY29uc3QgZW50aXR5IG9mIGVudGl0aWVzKSB7XG5cdFx0XHRcdHNldC5hZGQoZmllbGQuZ2V0VmFsdWUoZW50aXR5KSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHNvcnRcblx0XHRcdGNvbnN0IHNvcnRlZFZhbHVlcyA9IEFycmF5LmZyb20oc2V0LnZhbHVlcygpKS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gKGZpZWxkIGFzIGFueSkuZ2V0RmllbGQoKS5zb3J0KGEsIGIpO1xuXHRcdFx0fSk7XG5cblx0XHRcdGNvbnN0IHV2YyA9IG5ldyBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24oc29ydGVkVmFsdWVzLCBmaWVsZCk7XG5cblx0XHRcdHRoaXMudW5pcXVlVmFsdWVNYXAuc2V0KGZpZWxkLmdldElkKCksIHV2Yyk7XG5cdFx0fSk7XG5cblx0fVxuXG5cdGNhbGN1bGF0ZUFsbChlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4sIGZpZWxkczogQXJyYXk8RmllbGQ+KTogdm9pZCB7XG5cdFx0Zm9yIChjb25zdCBmaWVsZCBvZiBmaWVsZHMpIHtcblx0XHRcdHRoaXMuY2FsY3VsYXRlKGVudGl0aWVzLCBmaWVsZCk7XG5cdFx0fVxuXHR9XG5cblx0ZmlsdGVyQWxsKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiwgZmllbGRzOiBBcnJheTxGaWVsZD4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cblx0XHRsZXQgdmFsdWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IGVudGl0aWVzO1xuXG5cdFx0Zm9yIChjb25zdCBmaWVsZCBvZiBmaWVsZHMpIHtcblxuXHRcdFx0dmFsdWVzID0gdGhpcy5maWx0ZXIodmFsdWVzLCBmaWVsZCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlcztcblx0fVxuXG5cdGZpbHRlcihlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4sIGZpZWxkOiBGaWVsZCk6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+IHtcblxuXHRcdGxldCB2YWx1ZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+ID0gW107XG5cblx0XHR0aGlzLnVuaXF1ZVZhbHVlTWFwXG5cdFx0XHQuZ2V0KGZpZWxkLmdldElkKCkpXG5cdFx0XHQuaWZQcmVzZW50KCh1dmM6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbikgPT4ge1xuXG5cdFx0XHRcdGlmICh1dmMuaXNBbGxTZWxlY3RlZCgpKSB7XG5cdFx0XHRcdFx0dmFsdWVzID0gZW50aXRpZXM7XG5cdFx0XHRcdH0gZWxzZSBpZiAodXZjLmlzQWxsRGlzYWJsZWQoKSkge1xuXHRcdFx0XHRcdHZhbHVlcyA9IFtdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0dmFsdWVzID0gZW50aXRpZXMuZmlsdGVyKChpdGVtRW50aXR5OiBPcmlnaW5JdGVtRW50aXR5KSA9PiB7XG5cblx0XHRcdFx0XHRcdGZvciAoY29uc3Qgbm90U2VsZWN0ZWRWYWx1ZSBvZiB1dmMuZ2V0Tm90U2VsZWN0ZWQoKSkge1xuXG5cdFx0XHRcdFx0XHRcdGlmICgoZmllbGQuZ2V0RmllbGQoKSBhcyBhbnkpLmVxdWFscyhpdGVtRW50aXR5LCAobm90U2VsZWN0ZWRWYWx1ZSBhcyBhbnkpLmdldFZhbHVlKCkpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pO1xuXG5cdFx0cmV0dXJuIHZhbHVlcztcblx0fVxuXG5cdHNlbGVjdEFsbChmaWVsZElkOiBGaWVsZElkKTogdm9pZCB7XG5cblx0XHR0aGlzLnVuaXF1ZVZhbHVlTWFwXG5cdFx0XHQuZ2V0KGZpZWxkSWQpXG5cdFx0XHQuaWZQcmVzZW50KCh1dmM6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbikgPT4ge1xuXHRcdFx0XHR1dmMuc2VsZWN0QWxsKCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHNlbGVjdChmaWVsZElkOiBGaWVsZElkLCB1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkKTogdm9pZCB7XG5cblx0XHR0aGlzLnVuaXF1ZVZhbHVlTWFwXG5cdFx0XHQuZ2V0KGZpZWxkSWQpXG5cdFx0XHQuaWZQcmVzZW50KCh1dmM6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbikgPT4ge1xuXHRcdFx0XHR1dmMuc2VsZWN0KHVuaXF1ZVZhbHVlSWQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR1bnNlbGVjdEFsbChmaWVsZElkOiBGaWVsZElkKTogdm9pZCB7XG5cblx0XHR0aGlzLnVuaXF1ZVZhbHVlTWFwXG5cdFx0XHQuZ2V0KGZpZWxkSWQpXG5cdFx0XHQuaWZQcmVzZW50KCh1dmM6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbikgPT4ge1xuXHRcdFx0XHR1dmMudW5zZWxlY3RBbGwoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0dW5zZWxlY3QoZmllbGRJZDogRmllbGRJZCwgdW5pcXVlVmFsdWVJZDogVW5pcXVlVmFsdWVJZCk6IHZvaWQge1xuXG5cdFx0dGhpcy51bmlxdWVWYWx1ZU1hcFxuXHRcdFx0LmdldChmaWVsZElkKVxuXHRcdFx0LmlmUHJlc2VudCgodXZjOiBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24pID0+IHtcblx0XHRcdFx0dXZjLnVuc2VsZWN0KHVuaXF1ZVZhbHVlSWQpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHRnZXRBbGwoZmllbGRzOiBBcnJheTxGaWVsZD4pOiBNYXA8c3RyaW5nLCBBcnJheTxVbmlxdWVWYWx1ZT4+IHtcblxuXHRcdGNvbnN0IG1hcCA9IG5ldyBNYXAoKTtcblxuXHRcdGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XG5cblx0XHRcdHRoaXMuZ2V0VmFsdWVzKGZpZWxkKVxuXHRcdFx0XHQuaWZQcmVzZW50KCh2KSA9PiB7XG5cdFx0XHRcdFx0bWFwLnNldChmaWVsZC5nZXRJZCgpLnRvU3RyaW5nKCksIHYpO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWFwO1xuXHR9XG5cblx0Z2V0VmFsdWVzKGZpZWxkOiBGaWVsZCk6IE9wdGlvbmFsPEFycmF5PFVuaXF1ZVZhbHVlPj4ge1xuXG5cdFx0cmV0dXJuIHRoaXMudW5pcXVlVmFsdWVNYXBcblx0XHRcdFx0ICAgLmdldChmaWVsZC5nZXRJZCgpKVxuXHRcdFx0XHQgICAubWFwKCh1dmM6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbikgPT4ge1xuXHRcdFx0XHRcdCAgIHJldHVybiB1dmMuZ2V0QWxsKCk7XG5cdFx0XHRcdCAgIH0pO1xuXHR9XG5cbn1cbiJdfQ==