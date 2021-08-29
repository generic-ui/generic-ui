/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var FabricDatePickerYears = /** @class */ (function () {
    function FabricDatePickerYears() {
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
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerYears.prototype.prevYearRange = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        if (!this.selectedYear) {
            this.selectedYear = year;
        }
        if (this.selectedYear > this.minYear) {
            this.selectedYear -= this.inc;
        }
        if (this.selectedYear > this.minYear) {
            return this.getYears(this.selectedYear);
        }
        else {
            return this.rowsForDisplay;
        }
    };
    /**
     * @param {?} year
     * @return {?}
     */
    FabricDatePickerYears.prototype.nextYearRange = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        if (!this.selectedYear) {
            this.selectedYear = year;
        }
        if (this.selectedYear < this.maxYear) {
            this.selectedYear += this.inc;
        }
        if (this.selectedYear < this.maxYear) {
            return this.getYears(this.selectedYear);
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
    FabricDatePickerYears.prototype.selectedYear;
    /**
     * @type {?}
     * @private
     */
    FabricDatePickerYears.prototype.inc;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLnllYXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIueWVhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFBQTtRQVdrQixRQUFHLEdBQVcsRUFBRSxDQUFDO0lBZ0duQyxDQUFDOzs7OztJQTlGQSx3Q0FBUTs7OztJQUFSLFVBQVMsWUFBb0I7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxHQUFHLEVBQUUsQ0FBQzs7WUFFM0IsVUFBVSxHQUFXLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87O1lBQ2xELEtBQUssR0FBa0IsRUFBRTs7WUFDNUIsSUFBSSxHQUF5QixFQUFFO1FBRWhDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTlELElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV6QyxPQUFPLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUVELDZDQUFhOzs7O0lBQWIsVUFBYyxJQUFZO1FBRXpCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFD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QUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhYnJpY0RhdGVQaWNrZXJZZWFycyB7XG5cblx0cHJpdmF0ZSByb3dzRm9yRGlzcGxheTogQXJyYXk8QXJyYXk8bnVtYmVyPj47XG5cblx0cHJpdmF0ZSBtaW5ZZWFyOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBtYXhZZWFyOiBudW1iZXI7XG5cblx0cHJpdmF0ZSBzZWxlY3RlZFllYXI6IG51bWJlcjtcblxuXHRwcml2YXRlIHJlYWRvbmx5IGluYzogbnVtYmVyID0gMTA7XG5cblx0Z2V0WWVhcnMoc2VsZWN0ZWRZZWFyOiBudW1iZXIpOiBBcnJheTxBcnJheTxudW1iZXI+PiB7XG5cdFx0dGhpcy5taW5ZZWFyID0gc2VsZWN0ZWRZZWFyIC0gNTA7XG5cdFx0dGhpcy5tYXhZZWFyID0gc2VsZWN0ZWRZZWFyICsgNTA7XG5cblx0XHRjb25zdCB5ZWFyc1JhbmdlOiBudW1iZXIgPSB0aGlzLm1heFllYXIgLSB0aGlzLm1pblllYXI7XG5cdFx0bGV0IHllYXJzOiBBcnJheTxudW1iZXI+ID0gW10sXG5cdFx0XHRyb3dzOiBBcnJheTxBcnJheTxudW1iZXI+PiA9IFtdO1xuXG5cdFx0eWVhcnMgPSB0aGlzLmNyZWF0ZVllYXJzUG9vbCh0aGlzLm1pblllYXIsIHllYXJzUmFuZ2UsIHllYXJzKTtcblxuXHRcdHJvd3MgPSB0aGlzLmRpdmlkZVllYXJzUG9vbCh5ZWFycywgcm93cyk7XG5cblx0XHRyZXR1cm4gdGhpcy5yb3dzRm9yRGlzcGxheSA9IHRoaXMuY3JlYXRlUm93c0ZvckRpc3BsYXkocm93cywgc2VsZWN0ZWRZZWFyKTtcblx0fVxuXG5cdHByZXZZZWFyUmFuZ2UoeWVhcjogbnVtYmVyKTogQXJyYXk8QXJyYXk8bnVtYmVyPj4ge1xuXG5cdFx0aWYgKCF0aGlzLnNlbGVjdGVkWWVhcikge1xuXHRcdFx0dGhpcy5zZWxlY3RlZFllYXIgPSB5ZWFyO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNlbGVjdGVkWWVhciA+IHRoaXMubWluWWVhcikge1xuXHRcdFx0dGhpcy5zZWxlY3RlZFllYXIgLT0gdGhpcy5pbmM7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRZZWFyID4gdGhpcy5taW5ZZWFyKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRZZWFycyh0aGlzLnNlbGVjdGVkWWVhcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnJvd3NGb3JEaXNwbGF5O1xuXHRcdH1cblxuXHR9XG5cblx0bmV4dFllYXJSYW5nZSh5ZWFyOiBudW1iZXIpOiBBcnJheTxBcnJheTxudW1iZXI+PiB7XG5cblx0XHRpZiAoIXRoaXMuc2VsZWN0ZWRZZWFyKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkWWVhciA9IHllYXI7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRZZWFyIDwgdGhpcy5tYXhZZWFyKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkWWVhciArPSB0aGlzLmluYztcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZWxlY3RlZFllYXIgPCB0aGlzLm1heFllYXIpIHtcblx0XHRcdHJldHVybiB0aGlzLmdldFllYXJzKHRoaXMuc2VsZWN0ZWRZZWFyKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHRoaXMucm93c0ZvckRpc3BsYXk7XG5cdFx0fVxuXG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZVllYXJzUG9vbChtaW5ZZWFyOiBudW1iZXIsIHllYXJzUmFuZ2U6IG51bWJlciwgeWVhcnM6IEFycmF5PG51bWJlcj4pOiBBcnJheTxudW1iZXI+IHtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSB5ZWFyc1JhbmdlOyBpKyspIHtcblx0XHRcdHllYXJzLnB1c2gobWluWWVhciArIGkpO1xuXHRcdH1cblx0XHRyZXR1cm4geWVhcnM7XG5cdH1cblxuXHRwcml2YXRlIGRpdmlkZVllYXJzUG9vbCh5ZWFyczogQXJyYXk8bnVtYmVyPiwgcm93czogQXJyYXk8QXJyYXk8bnVtYmVyPj4pOiBBcnJheTxBcnJheTxudW1iZXI+PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB5ZWFycy5sZW5ndGg7IGkgKz0gNSkge1xuXHRcdFx0cm93cy5wdXNoKHllYXJzLnNsaWNlKGksIGkgKyA1KSk7XG5cdFx0fVxuXHRcdHJldHVybiByb3dzO1xuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVSb3dzRm9yRGlzcGxheShyb3dzOiBBcnJheTxBcnJheTxudW1iZXI+Piwgc2VsZWN0ZWRZZWFyOiBudW1iZXIpOiBBcnJheTxBcnJheTxudW1iZXI+PiB7XG5cdFx0aWYgKHNlbGVjdGVkWWVhciA+PSB0aGlzLm1pblllYXIgfHwgc2VsZWN0ZWRZZWFyIDw9IHRoaXMubWF4WWVhcikge1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcblxuXHRcdFx0XHRpZiAocm93c1tpXS5pbmRleE9mKHNlbGVjdGVkWWVhcikgPiAtMSkge1xuXG5cdFx0XHRcdFx0aWYgKCFyb3dzW2kgLSAxXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFtyb3dzW2ldLCByb3dzW2kgKyAxXSwgcm93c1tpICsgMl0sIHJvd3NbaSArIDNdLCByb3dzW2kgKyA0XV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFyb3dzW2kgLSAyXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFtyb3dzW2kgLSAxXSwgcm93c1tpXSwgcm93c1tpICsgMV0sIHJvd3NbaSArIDJdLCByb3dzW2kgKyAzXV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFyb3dzW2kgKyAxXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFtyb3dzW2kgLSA0XSwgcm93c1tpIC0gM10sIHJvd3NbaSAtIDJdLCByb3dzW2kgLSAxXSwgcm93c1tpXV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKCFyb3dzW2kgKyAyXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIFtyb3dzW2kgLSAzXSwgcm93c1tpIC0gMl0sIHJvd3NbaSAtIDFdLCByb3dzW2ldLCByb3dzW2kgKyAxXV07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucm93c0ZvckRpc3BsYXkgPSBbcm93c1tpIC0gMl0sIHJvd3NbaSAtIDFdLCByb3dzW2ldLCByb3dzW2kgKyAxXSwgcm93c1tpICsgMl1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cbn1cbiJdfQ==