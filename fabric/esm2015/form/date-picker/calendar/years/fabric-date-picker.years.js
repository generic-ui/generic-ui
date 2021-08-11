/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class FabricDatePickerYears {
    constructor() {
        this.inc = 10;
    }
    /**
     * @param {?} selectedYear
     * @return {?}
     */
    getYears(selectedYear) {
        this.minYear = selectedYear - 50;
        this.maxYear = selectedYear + 50;
        /** @type {?} */
        let yearsRange = this.maxYear - this.minYear;
        /** @type {?} */
        let years = [];
        /** @type {?} */
        let rows = [];
        years = this.createYearsPool(this.minYear, yearsRange, years);
        rows = this.divideYearsPool(years, rows);
        return this.rowsForDisplay = this.createRowsForDisplay(rows, selectedYear);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    prevYearRange(year) {
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
    }
    /**
     * @param {?} year
     * @return {?}
     */
    nextYearRange(year) {
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
    }
    /**
     * @private
     * @param {?} minYear
     * @param {?} yearsRange
     * @param {?} years
     * @return {?}
     */
    createYearsPool(minYear, yearsRange, years) {
        for (let i = 0; i <= yearsRange; i++) {
            years.push(minYear + i);
        }
        return years;
    }
    /**
     * @private
     * @param {?} years
     * @param {?} rows
     * @return {?}
     */
    divideYearsPool(years, rows) {
        for (let i = 0; i < years.length; i += 5) {
            rows.push(years.slice(i, i + 5));
        }
        return rows;
    }
    /**
     * @private
     * @param {?} rows
     * @param {?} selectedYear
     * @return {?}
     */
    createRowsForDisplay(rows, selectedYear) {
        if (selectedYear >= this.minYear || selectedYear <= this.maxYear) {
            for (let i = 0; i < rows.length; i++) {
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
    }
}
FabricDatePickerYears.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFicmljLWRhdGUtcGlja2VyLnllYXJzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGdlbmVyaWMtdWkvZmFicmljLyIsInNvdXJjZXMiOlsiZm9ybS9kYXRlLXBpY2tlci9jYWxlbmRhci95ZWFycy9mYWJyaWMtZGF0ZS1waWNrZXIueWVhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLHFCQUFxQjtJQURsQztRQVdrQixRQUFHLEdBQVcsRUFBRSxDQUFDO0lBZ0duQyxDQUFDOzs7OztJQTlGQSxRQUFRLENBQUMsWUFBb0I7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsWUFBWSxHQUFHLEVBQUUsQ0FBQzs7WUFFN0IsVUFBVSxHQUFXLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU87O1lBQ25ELEtBQUssR0FBa0IsRUFBRTs7WUFDekIsSUFBSSxHQUF5QixFQUFFO1FBRWhDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTlELElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV6QyxPQUFPLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1RSxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxJQUFZO1FBRXpCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFD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QUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUNqQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDckU7b0JBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7d0JBQ2pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNyRTtvQkFFRCxPQUFPLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzRjthQUNEO1NBQ0Q7SUFDRixDQUFDOzs7WUF6R0QsVUFBVTs7Ozs7OztJQUdWLCtDQUE2Qzs7Ozs7SUFFN0Msd0NBQXdCOzs7OztJQUV4Qix3Q0FBd0I7Ozs7O0lBRXhCLDZDQUE2Qjs7Ozs7SUFFN0Isb0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmFicmljRGF0ZVBpY2tlclllYXJzIHtcblxuXHRwcml2YXRlIHJvd3NGb3JEaXNwbGF5OiBBcnJheTxBcnJheTxudW1iZXI+PjtcblxuXHRwcml2YXRlIG1pblllYXI6IG51bWJlcjtcblxuXHRwcml2YXRlIG1heFllYXI6IG51bWJlcjtcblxuXHRwcml2YXRlIHNlbGVjdGVkWWVhcjogbnVtYmVyO1xuXG5cdHByaXZhdGUgcmVhZG9ubHkgaW5jOiBudW1iZXIgPSAxMDtcblxuXHRnZXRZZWFycyhzZWxlY3RlZFllYXI6IG51bWJlcik6IEFycmF5PEFycmF5PG51bWJlcj4+IHtcblx0XHR0aGlzLm1pblllYXIgPSBzZWxlY3RlZFllYXIgLSA1MDtcblx0XHR0aGlzLm1heFllYXIgPSBzZWxlY3RlZFllYXIgKyA1MDtcblxuXHRcdGxldCB5ZWFyc1JhbmdlOiBudW1iZXIgPSB0aGlzLm1heFllYXIgLSB0aGlzLm1pblllYXIsXG5cdFx0XHR5ZWFyczogQXJyYXk8bnVtYmVyPiA9IFtdLFxuXHRcdFx0cm93czogQXJyYXk8QXJyYXk8bnVtYmVyPj4gPSBbXTtcblxuXHRcdHllYXJzID0gdGhpcy5jcmVhdGVZZWFyc1Bvb2wodGhpcy5taW5ZZWFyLCB5ZWFyc1JhbmdlLCB5ZWFycyk7XG5cblx0XHRyb3dzID0gdGhpcy5kaXZpZGVZZWFyc1Bvb2woeWVhcnMsIHJvd3MpO1xuXG5cdFx0cmV0dXJuIHRoaXMucm93c0ZvckRpc3BsYXkgPSB0aGlzLmNyZWF0ZVJvd3NGb3JEaXNwbGF5KHJvd3MsIHNlbGVjdGVkWWVhcik7XG5cdH1cblxuXHRwcmV2WWVhclJhbmdlKHllYXI6IG51bWJlcik6IEFycmF5PEFycmF5PG51bWJlcj4+IHtcblxuXHRcdGlmICghdGhpcy5zZWxlY3RlZFllYXIpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRZZWFyID0geWVhcjtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zZWxlY3RlZFllYXIgPiB0aGlzLm1pblllYXIpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRZZWFyIC09IHRoaXMuaW5jO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNlbGVjdGVkWWVhciA+IHRoaXMubWluWWVhcikge1xuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0WWVhcnModGhpcy5zZWxlY3RlZFllYXIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yb3dzRm9yRGlzcGxheTtcblx0XHR9XG5cblx0fVxuXG5cdG5leHRZZWFyUmFuZ2UoeWVhcjogbnVtYmVyKTogQXJyYXk8QXJyYXk8bnVtYmVyPj4ge1xuXG5cdFx0aWYgKCF0aGlzLnNlbGVjdGVkWWVhcikge1xuXHRcdFx0dGhpcy5zZWxlY3RlZFllYXIgPSB5ZWFyO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNlbGVjdGVkWWVhciA8IHRoaXMubWF4WWVhcikge1xuXHRcdFx0dGhpcy5zZWxlY3RlZFllYXIgKz0gdGhpcy5pbmM7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRZZWFyIDwgdGhpcy5tYXhZZWFyKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRZZWFycyh0aGlzLnNlbGVjdGVkWWVhcik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnJvd3NGb3JEaXNwbGF5O1xuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBjcmVhdGVZZWFyc1Bvb2wobWluWWVhcjogbnVtYmVyLCB5ZWFyc1JhbmdlOiBudW1iZXIsIHllYXJzOiBBcnJheTxudW1iZXI+KTogQXJyYXk8bnVtYmVyPiB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0geWVhcnNSYW5nZTsgaSsrKSB7XG5cdFx0XHR5ZWFycy5wdXNoKG1pblllYXIgKyBpKTtcblx0XHR9XG5cdFx0cmV0dXJuIHllYXJzO1xuXHR9XG5cblx0cHJpdmF0ZSBkaXZpZGVZZWFyc1Bvb2woeWVhcnM6IEFycmF5PG51bWJlcj4sIHJvd3M6IEFycmF5PEFycmF5PG51bWJlcj4+KTogQXJyYXk8QXJyYXk8bnVtYmVyPj4ge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgeWVhcnMubGVuZ3RoOyBpICs9IDUpIHtcblx0XHRcdHJvd3MucHVzaCh5ZWFycy5zbGljZShpLCBpICsgNSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gcm93cztcblx0fVxuXG5cdHByaXZhdGUgY3JlYXRlUm93c0ZvckRpc3BsYXkocm93czogQXJyYXk8QXJyYXk8bnVtYmVyPj4sIHNlbGVjdGVkWWVhcjogbnVtYmVyKTogQXJyYXk8QXJyYXk8bnVtYmVyPj4ge1xuXHRcdGlmIChzZWxlY3RlZFllYXIgPj0gdGhpcy5taW5ZZWFyIHx8IHNlbGVjdGVkWWVhciA8PSB0aGlzLm1heFllYXIpIHtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG5cblx0XHRcdFx0aWYgKHJvd3NbaV0uaW5kZXhPZihzZWxlY3RlZFllYXIpID4gLTEpIHtcblxuXHRcdFx0XHRcdGlmICghcm93c1tpIC0gMV0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBbcm93c1tpXSwgcm93c1tpICsgMV0sIHJvd3NbaSArIDJdLCByb3dzW2kgKyAzXSwgcm93c1tpICsgNF1dO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghcm93c1tpIC0gMl0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBbcm93c1tpIC0gMV0sIHJvd3NbaV0sIHJvd3NbaSArIDFdLCByb3dzW2kgKyAyXSwgcm93c1tpICsgM11dO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghcm93c1tpICsgMV0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBbcm93c1tpIC0gNF0sIHJvd3NbaSAtIDNdLCByb3dzW2kgLSAyXSwgcm93c1tpIC0gMV0sIHJvd3NbaV1dO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghcm93c1tpICsgMl0pIHtcblx0XHRcdFx0XHRcdHJldHVybiBbcm93c1tpIC0gM10sIHJvd3NbaSAtIDJdLCByb3dzW2kgLSAxXSwgcm93c1tpXSwgcm93c1tpICsgMV1dO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnJvd3NGb3JEaXNwbGF5ID0gW3Jvd3NbaSAtIDJdLCByb3dzW2kgLSAxXSwgcm93c1tpXSwgcm93c1tpICsgMV0sIHJvd3NbaSArIDJdXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG59XG4iXX0=