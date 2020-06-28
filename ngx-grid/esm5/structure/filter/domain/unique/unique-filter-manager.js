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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pcXVlLWZpbHRlci1tYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvbmd4LWdyaWQvIiwic291cmNlcyI6WyJzdHJ1Y3R1cmUvZmlsdGVyL2RvbWFpbi91bmlxdWUvdW5pcXVlLWZpbHRlci1tYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBWSxNQUFNLG9CQUFvQixDQUFDO0FBS3RELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBS2xFO0lBQUE7UUFFa0IsbUJBQWMsR0FBRyxJQUFJLE1BQU0sRUFBa0MsQ0FBQztJQTBJaEYsQ0FBQzs7Ozs7O0lBeElBLHVDQUFTOzs7OztJQUFULFVBQVUsUUFBaUMsRUFBRSxLQUFZO1FBQXpELGlCQXdCQzs7WUF0Qk0sT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUU7O1lBRXZCLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFFL0MsTUFBTSxDQUFDLE9BQU87OztRQUFDOzs7Z0JBRVIsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFOztnQkFFckIsS0FBbUIsSUFBQSxhQUFBLGlCQUFBLFFBQVEsQ0FBQSxrQ0FBQSx3REFBRTtvQkFBeEIsSUFBSSxNQUFNLHFCQUFBO29CQUNkLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUNoQzs7Ozs7Ozs7Ozs7Z0JBR0ssWUFBWSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSTs7Ozs7WUFBQyxVQUFDLENBQU0sRUFBRSxDQUFNO2dCQUNqRSxPQUFPLENBQUMsbUJBQUEsS0FBSyxFQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFD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dGVudCI6WyJpbXBvcnQgeyBLZXlNYXAsIE9wdGlvbmFsIH0gZnJvbSAnQGdlbmVyaWMtdWkvaGVybWVzJztcblxuaW1wb3J0IHsgRmllbGRJZCB9IGZyb20gJy4uLy4uLy4uL2ZpZWxkL2RvbWFpbi9jb3JlL2ZpZWxkL2ZpZWxkLmlkJztcbmltcG9ydCB7IE9yaWdpbkl0ZW1FbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9zb3VyY2UvZG9tYWluL29yaWdpbi9vcmlnaW4taXRlbS1lbnRpdHknO1xuaW1wb3J0IHsgRmllbGQgfSBmcm9tICcuLi8uLi8uLi9maWVsZC9kb21haW4vY29yZS9maWVsZC9maWVsZCc7XG5pbXBvcnQgeyBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24gfSBmcm9tICcuL3VuaXF1ZS12YWx1ZS1jb2xsZWN0aW9uJztcbmltcG9ydCB7IFVuaXF1ZVZhbHVlIH0gZnJvbSAnLi91bmlxdWUtdmFsdWUnO1xuaW1wb3J0IHsgVW5pcXVlVmFsdWVJZCB9IGZyb20gJy4vdW5pcXVlLXZhbHVlLWlkJztcblxuXG5leHBvcnQgY2xhc3MgVW5pcXVlRmlsdGVyTWFuYWdlciB7XG5cblx0cHJpdmF0ZSByZWFkb25seSB1bmlxdWVWYWx1ZU1hcCA9IG5ldyBLZXlNYXA8RmllbGRJZCwgVW5pcXVlVmFsdWVDb2xsZWN0aW9uPigpO1xuXG5cdGNhbGN1bGF0ZShlbnRpdGllczogQXJyYXk8T3JpZ2luSXRlbUVudGl0eT4sIGZpZWxkOiBGaWVsZCk6IHZvaWQge1xuXG5cdFx0Y29uc3QgZmllbGRJZCA9IGZpZWxkLmdldElkKCk7XG5cblx0XHRjb25zdCBvcHRVVk0gPSB0aGlzLnVuaXF1ZVZhbHVlTWFwLmdldChmaWVsZElkKTtcblxuXHRcdG9wdFVWTS5pZkVtcHR5KCgpID0+IHtcblxuXHRcdFx0Y29uc3Qgc2V0ID0gbmV3IFNldCgpO1xuXG5cdFx0XHRmb3IgKGxldCBlbnRpdHkgb2YgZW50aXRpZXMpIHtcblx0XHRcdFx0c2V0LmFkZChmaWVsZC5nZXRWYWx1ZShlbnRpdHkpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gc29ydFxuXHRcdFx0Y29uc3Qgc29ydGVkVmFsdWVzID0gQXJyYXkuZnJvbShzZXQudmFsdWVzKCkpLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PiB7XG5cdFx0XHRcdHJldHVybiAoZmllbGQgYXMgYW55KS5nZXRGaWVsZCgpLnNvcnQoYSwgYik7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgdXZjID0gbmV3IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbihzb3J0ZWRWYWx1ZXMsIGZpZWxkKTtcblxuXHRcdFx0dGhpcy51bmlxdWVWYWx1ZU1hcC5zZXQoZmllbGQuZ2V0SWQoKSwgdXZjKTtcblx0XHR9KTtcblxuXHR9XG5cblx0Y2FsY3VsYXRlQWxsKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiwgZmllbGRzOiBBcnJheTxGaWVsZD4pOiB2b2lkIHtcblx0XHRmb3IgKGxldCBmaWVsZCBvZiBmaWVsZHMpIHtcblx0XHRcdHRoaXMuY2FsY3VsYXRlKGVudGl0aWVzLCBmaWVsZCk7XG5cdFx0fVxuXHR9XG5cblx0ZmlsdGVyQWxsKGVudGl0aWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiwgZmllbGRzOiBBcnJheTxGaWVsZD4pOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cblx0XHRsZXQgdmFsdWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IGVudGl0aWVzO1xuXG5cdFx0Zm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG5cblx0XHRcdHZhbHVlcyA9IHRoaXMuZmlsdGVyKHZhbHVlcywgZmllbGQpO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZXM7XG5cdH1cblxuXHRmaWx0ZXIoZW50aXRpZXM6IEFycmF5PE9yaWdpbkl0ZW1FbnRpdHk+LCBmaWVsZDogRmllbGQpOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiB7XG5cblx0XHRsZXQgdmFsdWVzOiBBcnJheTxPcmlnaW5JdGVtRW50aXR5PiA9IFtdO1xuXG5cdFx0dGhpcy51bmlxdWVWYWx1ZU1hcFxuXHRcdFx0LmdldChmaWVsZC5nZXRJZCgpKVxuXHRcdFx0LmlmUHJlc2VudCgodXZjOiBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24pID0+IHtcblxuXHRcdFx0XHRpZiAodXZjLmlzQWxsU2VsZWN0ZWQoKSkge1xuXHRcdFx0XHRcdHZhbHVlcyA9IGVudGl0aWVzO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHV2Yy5pc0FsbERpc2FibGVkKCkpIHtcblx0XHRcdFx0XHR2YWx1ZXMgPSBbXTtcblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHZhbHVlcyA9IGVudGl0aWVzLmZpbHRlcigoaXRlbUVudGl0eTogT3JpZ2luSXRlbUVudGl0eSkgPT4ge1xuXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBub3RTZWxlY3RlZFZhbHVlIG9mIHV2Yy5nZXROb3RTZWxlY3RlZCgpKSB7XG5cblx0XHRcdFx0XHRcdFx0aWYgKChmaWVsZC5nZXRGaWVsZCgpIGFzIGFueSkuZXF1YWxzKGl0ZW1FbnRpdHksIChub3RTZWxlY3RlZFZhbHVlIGFzIGFueSkuZ2V0VmFsdWUoKSkpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSk7XG5cblx0XHRyZXR1cm4gdmFsdWVzO1xuXHR9XG5cblx0c2VsZWN0QWxsKGZpZWxkSWQ6IEZpZWxkSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudW5pcXVlVmFsdWVNYXBcblx0XHRcdC5nZXQoZmllbGRJZClcblx0XHRcdC5pZlByZXNlbnQoKHV2YzogVW5pcXVlVmFsdWVDb2xsZWN0aW9uKSA9PiB7XG5cdFx0XHRcdHV2Yy5zZWxlY3RBbGwoKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0c2VsZWN0KGZpZWxkSWQ6IEZpZWxkSWQsIHVuaXF1ZVZhbHVlSWQ6IFVuaXF1ZVZhbHVlSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudW5pcXVlVmFsdWVNYXBcblx0XHRcdC5nZXQoZmllbGRJZClcblx0XHRcdC5pZlByZXNlbnQoKHV2YzogVW5pcXVlVmFsdWVDb2xsZWN0aW9uKSA9PiB7XG5cdFx0XHRcdHV2Yy5zZWxlY3QodW5pcXVlVmFsdWVJZCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdHVuc2VsZWN0QWxsKGZpZWxkSWQ6IEZpZWxkSWQpOiB2b2lkIHtcblxuXHRcdHRoaXMudW5pcXVlVmFsdWVNYXBcblx0XHRcdC5nZXQoZmllbGRJZClcblx0XHRcdC5pZlByZXNlbnQoKHV2YzogVW5pcXVlVmFsdWVDb2xsZWN0aW9uKSA9PiB7XG5cdFx0XHRcdHV2Yy51bnNlbGVjdEFsbCgpO1xuXHRcdFx0fSk7XG5cdH1cblxuXHR1bnNlbGVjdChmaWVsZElkOiBGaWVsZElkLCB1bmlxdWVWYWx1ZUlkOiBVbmlxdWVWYWx1ZUlkKTogdm9pZCB7XG5cblx0XHR0aGlzLnVuaXF1ZVZhbHVlTWFwXG5cdFx0XHQuZ2V0KGZpZWxkSWQpXG5cdFx0XHQuaWZQcmVzZW50KCh1dmM6IFVuaXF1ZVZhbHVlQ29sbGVjdGlvbikgPT4ge1xuXHRcdFx0XHR1dmMudW5zZWxlY3QodW5pcXVlVmFsdWVJZCk7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGdldEFsbChmaWVsZHM6IEFycmF5PEZpZWxkPik6IE1hcDxzdHJpbmcsIEFycmF5PFVuaXF1ZVZhbHVlPj4ge1xuXG5cdFx0bGV0IG1hcCA9IG5ldyBNYXAoKTtcblxuXHRcdGZvciAobGV0IGZpZWxkIG9mIGZpZWxkcykge1xuXG5cdFx0XHR0aGlzLmdldFZhbHVlcyhmaWVsZClcblx0XHRcdFx0LmlmUHJlc2VudCgodikgPT4ge1xuXHRcdFx0XHRcdG1hcC5zZXQoZmllbGQuZ2V0SWQoKS50b1N0cmluZygpLCB2KTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hcDtcblx0fVxuXG5cdGdldFZhbHVlcyhmaWVsZDogRmllbGQpOiBPcHRpb25hbDxBcnJheTxVbmlxdWVWYWx1ZT4+IHtcblxuXHRcdHJldHVybiB0aGlzLnVuaXF1ZVZhbHVlTWFwXG5cdFx0XHRcdCAgIC5nZXQoZmllbGQuZ2V0SWQoKSlcblx0XHRcdFx0ICAgLm1hcCgodXZjOiBVbmlxdWVWYWx1ZUNvbGxlY3Rpb24pID0+IHtcblx0XHRcdFx0XHQgICByZXR1cm4gdXZjLmdldEFsbCgpO1xuXHRcdFx0XHQgICB9KTtcblx0fVxuXG59XG4iXX0=