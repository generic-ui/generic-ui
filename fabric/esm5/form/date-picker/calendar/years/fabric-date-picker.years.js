/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var FabricDatePickerYears = /** @class */ (function () {
    function FabricDatePickerYears() {
        this.year = new Date().getFullYear();
        this.inc = 10;
    }
    /**
     * @param {?} selectedYear
     * @return {?}
     */
    FabricDatePickerYears.prototype.getYears = /**
     * @param {?} selectedYear
     * @return {?}
     */
    function (selectedYear) {
        this.minYear = selectedYear - 50;
        this.maxYear = selectedYear + 50;
        /** @type {?} */
        var yearsRange = this.maxYear - this.minYear;
        /** @type {?} */
        var years = [];
        /** @type {?} */
        var rows = [];
        years = this.createYearsPool(this.minYear, yearsRange, years);
        rows = this.divideYearsPool(years, rows);
        return this.rowsForDisplay = this.createRowsForDisplay(rows, selectedYear);
    };
    /**
     * @return {?}
     */
    FabricDatePickerYears.prototype.prevYearRange = /**
     * @return {?}
     */
    function () {
        if (this.year > this.minYear) {
            this.year -= this.inc;
        }
        if (this.year > this.minYear) {
            return this.getYears(this.year);
        }
        else {
            return this.rowsForDisplay;
        }
    };
    /**
     * @return {?}
     */
    FabricDatePickerYears.prototype.nextYearRange = /**
     * @return {?}
     */
    function () {
        if (this.year < this.maxYear) {
            this.year += this.inc;
        }
        if (this.year < this.maxYear) {
            return this.getYears(this.year);
        }
        else {
            return this.rowsForDisplay;
        }
    };
    /**
     * @private
     * @param {?} minYear
     * @param {?} yearsRange
     * @param {?} years
     * @return {?}
     */
    FabricDatePickerYears.prototype.createYearsPool = /**
     * @private
     * @param {?} minYear
     * @param {?} yearsRange
     * @param {?} years
     * @return {?}
     */
    function (minYear, yearsRange, years) {
        for (var i = 0; i <= yearsRange; i++) {
            years.push(minYear + i);
        }
        return years;
    };
    /**
     * @private
     * @param {?} years
     * @param {?} rows
     * @return {?}
     */
    FabricDatePickerYears.prototype.divideYearsPool = /**
     * @private
     * @param {?} years
     * @param {?} rows
     * @return {?}
     */
    function (years, rows) {
        for (var i = 0; i < years.length; i += 5) {
            rows.push(years.slice(i, i + 5));
        }
        return rows;
    };
    /**
     * @private
     * @param {?} rows
     * @param {?} selectedYear
     * @return {?}
     */
    FabricDatePickerYears.prototype.createRowsForDisplay = /**
     * @private
     * @param {?} rows
     * @param {?} selectedYear
     * @return {?}
     */
    function (rows, selectedYear) {
        if (selectedYear >= this.minYear || selectedYear <= this.maxYear) {
            for (var i = 0; i < rows.length; i++) {
                if (rows[i].indexOf(selectedYear) > -1) {
                    if (!rows[i - 1]) {
                        return [rows[i], rows[i + 1], rows[i + 2], rows[i + 3], rows[i + 4]];
                    }
                    if (!rows[i - 2]) {
                        return [rows[i - 1], rows[i], rows[i + 1], rows[i + 2], rows[i + 3]];
                    }
                    if (!rows[i + 1]) {
                        return [rows[i - 4], rows[i - 3], rows[i - 2], rows[i - 1], rows[i]];
                    }
                    if (!rows[i + 2]) {
                        return [rows[i - 3], rows[i - 2], rows[i - 1], rows[i], rows[i + 1]];
                    }
                    return this.rowsForDisplay = [rows[i - 2], rows[i - 1], rows[i], rows[i + 1], rows[i + 2]];
                }
            }
        }
    };
    FabricDatePickerYears.decorators = [
        { type: Injectable }
    ];
    return FabricDatePickerYears;
}());
export { FabricDatePickerYears };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.rowsForDisplay;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.minYear;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.maxYear;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.year;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.inc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLnllYXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIueWVhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtRQUtTLFNBQUksR0FBVyxJQUFJLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQy9CLFFBQUcsR0FBVyxFQUFFLENBQUM7SUF1Rm5DLENBQUM7Ozs7O0lBckZBLHdDQUFROzs7O0lBQVIsVUFBUyxZQUFvQjtRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLEdBQUcsRUFBRSxDQUFDOztZQUU3QixVQUFVLEdBQVcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTzs7WUFDbkQsS0FBSyxHQUFrQixFQUFFOztZQUN6QixJQUFJLEdBQXlCLEVBQUU7UUFFaEMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFOUQsSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpDLE9BQU8sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBRTVFLENBQUM7Ozs7SUFFRCw2Q0FBYTs7O0lBQWI7UUFDQyxJQUFJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM3QixJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENB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QUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNyRTtvQkFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTt3QkFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3JFO29CQUVELE9BQU8sSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNGO2FBQ0Q7U0FDRDtJQUNGLENBQUM7O2dCQTNGRCxVQUFVOztJQTZGWCw0QkFBQztDQUFBLEFBN0ZELElBNkZDO1NBNUZZLHFCQUFxQjs7Ozs7O0lBQ2pDLCtDQUE2Qzs7Ozs7SUFDN0Msd0NBQXdCOzs7OztJQUN4Qix3Q0FBd0I7Ozs7O0lBQ3hCLHFDQUFnRDs7Ozs7SUFDaEQsb0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlclllYXJzIHtcblx0cHJpdmF0ZSByb3dzRm9yRGlzcGxheTogQXJyYXk8QXJyYXk8bnVtYmVyPj47XG5cdHByaXZhdGUgbWluWWVhcjogbnVtYmVyO1xuXHRwcml2YXRlIG1heFllYXI6IG51bWJlcjtcblx0cHJpdmF0ZSB5ZWFyOiBudW1iZXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG5cdHByaXZhdGUgcmVhZG9ubHkgaW5jOiBudW1iZXIgPSAxMDtcblxuXHRnZXRZZWFycyhzZWxlY3RlZFllYXI6IG51bWJlcik6IEFycmF5PEFycmF5PG51bWJlcj4+IHtcblx0XHR0aGlzLm1pblllYXIgPSBzZWxlY3RlZFllYXIgLSA1MDtcblx0XHR0aGlzLm1heFllYXIgPSBzZWxlY3RlZFllYXIgKyA1MDtcblxuXHRcdGxldCB5ZWFyc1JhbmdlOiBudW1iZXIgPSB0aGlzLm1heFllYXIgLSB0aGlzLm1pblllYXIsXG5cdFx0XHR5ZWFyczogQXJyYXk8bnVtYmVyPiA9IFtdLFxuXHRcdFx0cm93czogQXJyYXk8QXJyYXk8bnVtYmVyPj4gPSBbXTtcblxuXHRcdHllYXJzID0gdGhpcy5jcmVhdGVZZWFyc1Bvb2wodGhpcy5taW5ZZWFyLCB5ZWFyc1JhbmdlLCB5ZWFycyk7XG5cblx0XHRyb3dzID0gdGhpcy5kaXZpZGVZZWFyc1Bvb2woeWVhcnMsIHJvd3MpO1xuXG5cdFx0cmV0dXJuIHRoaXMucm93c0ZvckRpc3BsYXkgPSB0aGlzLmNyZWF0ZVJvd3NGb3JEaXNwbGF5KHJvd3MsIHNlbGVjdGVkWWVhcik7XG5cblx0fVxuXG5cdHByZXZZZWFyUmFuZ2UoKSB7XG5cdFx0aWYgKHRoaXMueWVhciA+IHRoaXMubWluWWVhcikge1xuXHRcdFx0dGhpcy55ZWFyIC09IHRoaXMuaW5jO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnllYXIgPiB0aGlzLm1pblllYXIpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFllYXJzKHRoaXMueWVhcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnJvd3NGb3JEaXNwbGF5O1xuXHRcdH1cblxuXHR9XG5cblx0bmV4dFllYXJSYW5nZSgpIHtcblx0XHRpZiAodGhpcy55ZWFyIDwgdGhpcy5tYXhZZWFyKSB7XG5cdFx0XHR0aGlzLnllYXIgKz0gdGhpcy5pbmM7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMueWVhciA8IHRoaXMubWF4WWVhcikge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0WWVhcnModGhpcy55ZWFyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMucm93c0ZvckRpc3BsYXk7XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVllYXJzUG9vbChtaW5ZZWFyOiBudW1iZXIsIHllYXJzUmFuZ2U6IG51bWJlciwgeWVhcnM6IEFycmF5PG51bWJlcj4pOiBBcnJheTxudW1iZXI+IHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSB5ZWFyc1JhbmdlOyBpKyspIHtcblx0XHRcdHllYXJzLnB1c2gobWluWWVhciArIGkpO1xuXHRcdH1cblx0XHRyZXR1cm4geWVhcnM7XG5cdH1cblxuXHRwcml2YXRlIGRpdmlkZVllYXJzUG9vbCh5ZWFyczogQXJyYXk8bnVtYmVyPiwgcm93czogQXJyYXk8QXJyYXk8bnVtYmVyPj4pOiBBcnJheTxBcnJheTxudW1iZXI+PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB5ZWFycy5sZW5ndGg7IGkgKz0gNSkge1xuXHRcdFx0cm93cy5wdXNoKHllYXJzLnNsaWNlKGksIGkgKyA1KSk7XG5cdFx0fVxuXHRcdHJldHVybiByb3dzO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVSb3dzRm9yRGlzcGxheShyb3dzOiBBcnJheTxBcnJheTxudW1iZXI+Piwgc2VsZWN0ZWRZZWFyOiBudW1iZXIpOiBBcnJheTxBcnJheTxudW1iZXI+PiB7XG5cdFx0aWYgKHNlbGVjdGVkWWVhciA+PSB0aGlzLm1pblllYXIgfHwgc2VsZWN0ZWRZZWFyIDw9IHRoaXMubWF4WWVhcikge1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0XHRpZiAocm93c1tpXS5pbmRleE9mKHNlbGVjdGVkWWVhcikgPiAtMSkge1xuXG5cdFx0XHRcdFx0aWYgKCFyb3dzW2kgLSAxXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFtyb3dzW2ldLCByb3dzW2kgKyAxXSwgcm93c1tpICsgMl0sIHJvd3NbaSArIDNdLCByb3dzW2kgKyA0XV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFyb3dzW2kgLSAyXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFtyb3dzW2kgLSAxXSwgcm93c1tpXSwgcm93c1tpICsgMV0sIHJvd3NbaSArIDJdLCByb3dzW2kgKyAzXV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFyb3dzW2kgKyAxXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFtyb3dzW2kgLSA0XSwgcm93c1tpIC0gM10sIHJvd3NbaSAtIDJdLCByb3dzW2kgLSAxXSwgcm93c1tpXV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFyb3dzW2kgKyAyXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFtyb3dzW2kgLSAzXSwgcm93c1tpIC0gMl0sIHJvd3NbaSAtIDFdLCByb3dzW2ldLCByb3dzW2kgKyAxXV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucm93c0ZvckRpc3BsYXkgPSBbcm93c1tpIC0gMl0sIHJvd3NbaSAtIDFdLCByb3dzW2ldLCByb3dzW2kgKyAxXSwgcm93c1tpICsgMl1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==