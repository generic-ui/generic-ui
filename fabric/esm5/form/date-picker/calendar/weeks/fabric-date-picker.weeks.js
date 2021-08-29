/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var FabricDatePickerWeeks = /** @class */ (function () {
    function FabricDatePickerWeeks() {
    }
    /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    FabricDatePickerWeeks.prototype.getDaysInMonths = /**
     * @param {?} year
     * @param {?} month
     * @return {?}
     */
    function (year, month) {
        this.resetWeeks();
        /** @type {?} */
        var numberOfDaysInMonth = (new Date(year, month + 1, 0)).getDate();
        for (var i = 1; i <= numberOfDaysInMonth; i++) {
            this.createWeeks(new Date(year, month, i));
        }
        return this.weeks;
    };
    /**
     * @private
     * @param {?} date
     * @return {?}
     */
    FabricDatePickerWeeks.prototype.createWeeks = /**
     * @private
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var day = date.getDate();
        if (this.weeks[0].length === 0 && day === 1) {
            this.createWeek(date, this.weeks[0]);
        }
        if (this.weeks[1].length === 0 && day > this.getLastDayNumber(this.weeks[0])) {
            this.createWeek(this.getLastDayDate(this.weeks[0]), this.weeks[1]);
        }
        if (this.weeks[2].length === 0 && day > this.getLastDayNumber(this.weeks[1])) {
            this.createWeek(this.getLastDayDate(this.weeks[1]), this.weeks[2]);
        }
        if (this.weeks[3].length === 0 && day > this.getLastDayNumber(this.weeks[2])) {
            this.createWeek(this.getLastDayDate(this.weeks[2]), this.weeks[3]);
        }
        if (this.weeks[4].length === 0 && day >= this.getLastDayNumber(this.weeks[3])) {
            this.createWeek(this.getLastDayDate(this.weeks[3]), this.weeks[4]);
        }
        if (this.weeks[5].length === 0 && day >= this.getLastDayNumber(this.weeks[4])) {
            this.createWeek(this.getLastDayDate(this.weeks[4]), this.weeks[5]);
        }
        this.weeks = [this.weeks[0], this.weeks[1], this.weeks[2], this.weeks[3], this.weeks[4], this.weeks[5]];
    };
    /**
     * @private
     * @param {?} date
     * @param {?} week
     * @return {?}
     */
    FabricDatePickerWeeks.prototype.createWeek = /**
     * @private
     * @param {?} date
     * @param {?} week
     * @return {?}
     */
    function (date, week) {
        for (var i = 1; i <= 7; i++) {
            /** @type {?} */
            var isFirstDaySunday = date.getDay() === 0 && this.weeks[0].length === 0;
            /** @type {?} */
            var day = void 0;
            if (isFirstDaySunday) {
                day = date.getDate() - 6;
            }
            else {
                day = date.getDate() - date.getDay() + i;
            }
            /** @type {?} */
            var dayOfWeek = new Date(date.setDate(day));
            if (week.length < 7) {
                week.push(dayOfWeek);
            }
        }
    };
    /**
     * @private
     * @param {?} week
     * @return {?}
     */
    FabricDatePickerWeeks.prototype.getLastDayNumber = /**
     * @private
     * @param {?} week
     * @return {?}
     */
    function (week) {
        if (week.length === 7) {
            return week[week.length - 1].getDate();
        }
    };
    /**
     * @private
     * @param {?} week
     * @return {?}
     */
    FabricDatePickerWeeks.prototype.getLastDayDate = /**
     * @private
     * @param {?} week
     * @return {?}
     */
    function (week) {
        /** @type {?} */
        var lastDay = week[week.length - 1].getDate();
        return new Date(week[week.length - 1].setDate(lastDay));
    };
    /**
     * @private
     * @return {?}
     */
    FabricDatePickerWeeks.prototype.resetWeeks = /**
     * @private
     * @return {?}
     */
    function () {
        this.weeks = [];
        this.weeks[0] = [];
        this.weeks[1] = [];
        this.weeks[2] = [];
        this.weeks[3] = [];
        this.weeks[4] = [];
        this.weeks[5] = [];
    };
    FabricDatePickerWeeks.decorators = [
        { type: Injectable }
    ];
    return FabricDatePickerWeeks;
}());
export { FabricDatePickerWeeks };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerWeeks.prototype.weeks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLndlZWtzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci93ZWVrcy9mYWJyaWMtZGF0ZS1waWNrZXIud2Vla3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtJQStFQSxDQUFDOzs7Ozs7SUExRUEsK0NBQWU7Ozs7O0lBQWYsVUFBZ0IsSUFBWSxFQUFFLEtBQWE7UUFDMUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDOztZQUNaLG1CQUFtQixHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUU7UUFFcEUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLG1CQUFtQixFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzlDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7Ozs7OztJQUVPLDJDQUFXOzs7OztJQUFuQixVQUFvQixJQUFVOztZQUN2QixHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUUxQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNyQztRQUNELElBQUksSUFBSSxDQUFDLEtBQUssQ0FB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LENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Z0JBOUVELFVBQVU7O0lBK0VYLDRCQUFDO0NBQUEsQUEvRUQsSUErRUM7U0E5RVkscUJBQXFCOzs7Ozs7SUFFakMsc0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlcldlZWtzIHtcblxuXHRwcml2YXRlIHdlZWtzOiBBcnJheTxBcnJheTxEYXRlPj47XG5cblx0Z2V0RGF5c0luTW9udGhzKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IEFycmF5PEFycmF5PERhdGU+PiB7XG5cdFx0dGhpcy5yZXNldFdlZWtzKCk7XG5cdFx0Y29uc3QgbnVtYmVyT2ZEYXlzSW5Nb250aCA9IChuZXcgRGF0ZSh5ZWFyLCBtb250aCArIDEsIDApKS5nZXREYXRlKCk7XG5cblx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSBudW1iZXJPZkRheXNJbk1vbnRoOyBpKyspIHtcblx0XHRcdHRoaXMuY3JlYXRlV2Vla3MobmV3IERhdGUoeWVhciwgbW9udGgsIGkpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMud2Vla3M7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVdlZWtzKGRhdGU6IERhdGUpOiB2b2lkIHtcblx0XHRjb25zdCBkYXkgPSBkYXRlLmdldERhdGUoKTtcblxuXHRcdGlmICh0aGlzLndlZWtzWzBdLmxlbmd0aCA9PT0gMCAmJiBkYXkgPT09IDEpIHtcblx0XHRcdHRoaXMuY3JlYXRlV2VlayhkYXRlLCB0aGlzLndlZWtzWzBdKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMud2Vla3NbMV0ubGVuZ3RoID09PSAwICYmIGRheSA+IHRoaXMuZ2V0TGFzdERheU51bWJlcih0aGlzLndlZWtzWzBdKSkge1xuXHRcdFx0dGhpcy5jcmVhdGVXZWVrKHRoaXMuZ2V0TGFzdERheURhdGUodGhpcy53ZWVrc1swXSksIHRoaXMud2Vla3NbMV0pO1xuXHRcdH1cblx0XHRpZiAodGhpcy53ZWVrc1syXS5sZW5ndGggPT09IDAgJiYgZGF5ID4gdGhpcy5nZXRMYXN0RGF5TnVtYmVyKHRoaXMud2Vla3NbMV0pKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZVdlZWsodGhpcy5nZXRMYXN0RGF5RGF0ZSh0aGlzLndlZWtzWzFdKSwgdGhpcy53ZWVrc1syXSk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLndlZWtzWzNdLmxlbmd0aCA9PT0gMCAmJiBkYXkgPiB0aGlzLmdldExhc3REYXlOdW1iZXIodGhpcy53ZWVrc1syXSkpIHtcblx0XHRcdHRoaXMuY3JlYXRlV2Vlayh0aGlzLmdldExhc3REYXlEYXRlKHRoaXMud2Vla3NbMl0pLCB0aGlzLndlZWtzWzNdKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMud2Vla3NbNF0ubGVuZ3RoID09PSAwICYmIGRheSA+PSB0aGlzLmdldExhc3REYXlOdW1iZXIodGhpcy53ZWVrc1szXSkpIHtcblx0XHRcdHRoaXMuY3JlYXRlV2Vlayh0aGlzLmdldExhc3REYXlEYXRlKHRoaXMud2Vla3NbM10pLCB0aGlzLndlZWtzWzRdKTtcblx0XHR9XG5cdFx0aWYgKHRoaXMud2Vla3NbNV0ubGVuZ3RoID09PSAwICYmIGRheSA+PSB0aGlzLmdldExhc3REYXlOdW1iZXIodGhpcy53ZWVrc1s0XSkpIHtcblx0XHRcdHRoaXMuY3JlYXRlV2Vlayh0aGlzLmdldExhc3REYXlEYXRlKHRoaXMud2Vla3NbNF0pLCB0aGlzLndlZWtzWzVdKTtcblx0XHR9XG5cblx0XHR0aGlzLndlZWtzID0gW3RoaXMud2Vla3NbMF0sIHRoaXMud2Vla3NbMV0sIHRoaXMud2Vla3NbMl0sIHRoaXMud2Vla3NbM10sIHRoaXMud2Vla3NbNF0sIHRoaXMud2Vla3NbNV1dO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVXZWVrKGRhdGU6IERhdGUsIHdlZWs6IEFycmF5PERhdGU+KTogdm9pZCB7XG5cblx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcblx0XHRcdGNvbnN0IGlzRmlyc3REYXlTdW5kYXkgPSBkYXRlLmdldERheSgpID09PSAwICYmIHRoaXMud2Vla3NbMF0ubGVuZ3RoID09PSAwO1xuXHRcdFx0bGV0IGRheTtcblxuXHRcdFx0aWYgKGlzRmlyc3REYXlTdW5kYXkpIHtcblx0XHRcdFx0ZGF5ID0gZGF0ZS5nZXREYXRlKCkgLSA2O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGF5ID0gZGF0ZS5nZXREYXRlKCkgLSBkYXRlLmdldERheSgpICsgaTtcblx0XHRcdH1cblx0XHRcdGNvbnN0IGRheU9mV2VlayA9IG5ldyBEYXRlKGRhdGUuc2V0RGF0ZShkYXkpKTtcblxuXHRcdFx0aWYgKHdlZWsubGVuZ3RoIDwgNykge1xuXHRcdFx0XHR3ZWVrLnB1c2goZGF5T2ZXZWVrKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIGdldExhc3REYXlOdW1iZXIod2VlazogQXJyYXk8RGF0ZT4pOiBudW1iZXIge1xuXHRcdGlmICh3ZWVrLmxlbmd0aCA9PT0gNykge1xuXHRcdFx0cmV0dXJuIHdlZWtbd2Vlay5sZW5ndGggLSAxXS5nZXREYXRlKCk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZXRMYXN0RGF5RGF0ZSh3ZWVrOiBBcnJheTxEYXRlPik6IERhdGUge1xuXHRcdGNvbnN0IGxhc3REYXkgPSB3ZWVrW3dlZWsubGVuZ3RoIC0gMV0uZ2V0RGF0ZSgpO1xuXHRcdHJldHVybiBuZXcgRGF0ZSh3ZWVrW3dlZWsubGVuZ3RoIC0gMV0uc2V0RGF0ZShsYXN0RGF5KSk7XG5cdH1cblxuXHRwcml2YXRlIHJlc2V0V2Vla3MoKTogdm9pZCB7XG5cdFx0dGhpcy53ZWVrcyA9IFtdO1xuXHRcdHRoaXMud2Vla3NbMF0gPSBbXTtcblx0XHR0aGlzLndlZWtzWzFdID0gW107XG5cdFx0dGhpcy53ZWVrc1syXSA9IFtdO1xuXHRcdHRoaXMud2Vla3NbM10gPSBbXTtcblx0XHR0aGlzLndlZWtzWzRdID0gW107XG5cdFx0dGhpcy53ZWVrc1s1XSA9IFtdO1xuXHR9XG59XG4iXX0=