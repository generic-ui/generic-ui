/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
var RandomStringGenerator = /** @class */ (function () {
    function RandomStringGenerator() {
        for (var i = 0; i < 256; i++) {
            RandomStringGenerator.byteToHex[i] = (i + 0x100).toString(16).substr(1);
            RandomStringGenerator.hexToByte[RandomStringGenerator.byteToHex[i]] = i;
        }
    }
    /**
     * @return {?}
     */
    RandomStringGenerator.generate = /**
     * @return {?}
     */
    function () {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    };
    /**
     * @return {?}
     */
    RandomStringGenerator.getUuidV4 = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = this.getRandomFromMathRandom();
        result[6] = (result[6] & 0x0f) | 0x40;
        result[8] = (result[8] & 0x3f) | 0x80;
        return result;
    };
    /**
     * @param {?} buf
     * @param {?=} offset
     * @return {?}
     */
    RandomStringGenerator.uuidToString = /**
     * @param {?} buf
     * @param {?=} offset
     * @return {?}
     */
    function (buf, offset) {
        if (offset === void 0) { offset = 0; }
        /** @type {?} */
        var i = offset;
        /** @type {?} */
        var bth = this.byteToHex;
        return bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] + '-' +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]] +
            bth[buf[i++]] + bth[buf[i++]];
    };
    /**
     * @return {?}
     */
    RandomStringGenerator.getRandomFromMathRandom = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = new Array(16);
        /** @type {?} */
        var r = 0;
        for (var i = 0; i < 16; i++) {
            if ((i & 0x03) === 0) {
                r = Math.random() * 0x100000000;
            }
            result[i] = r >>> ((i & 0x03) << 3) & 0xff;
        }
        return (/** @type {?} */ (result));
    };
    RandomStringGenerator.byteToHex = [];
    RandomStringGenerator.hexToByte = {};
    RandomStringGenerator.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RandomStringGenerator.ctorParameters = function () { return []; };
    return RandomStringGenerator;
}());
export { RandomStringGenerator };
if (false) {
    /** @type {?} */
    RandomStringGenerator.byteToHex;
    /** @type {?} */
    RandomStringGenerator.hexToByte;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLXN0cmluZy5nZW5lcmF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZ2VuZXJpYy11aS9oZXJtZXMvIiwic291cmNlcyI6WyJjb21tb24vcmFuZG9tLXN0cmluZy5nZW5lcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFPQztRQUNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDN0IscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEUscUJBQXFCLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN4RTtJQUNGLENBQUM7Ozs7SUFFTSw4QkFBUTs7O0lBQWY7UUFFQyxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEcsQ0FBQzs7OztJQUVNLCtCQUFTOzs7SUFBaEI7O1lBQ08sTUFBTSxHQUFRLElBQUksQ0FBQyx1QkFBdUIsRUFBRTtRQUVsRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFFdEMsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDOzs7Ozs7SUFFTSxrQ0FBWTs7Ozs7SUFBbkIsVUFBb0IsR0FBa0IsRUFBRSxNQUFrQjtRQUFsQix1QkFBQSxFQUFBLFVBQWtCOztZQUNyRCxDQUFDLEdBQUcsTUFBTTs7WUFDVixHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVM7UUFDeEIsT0FBTyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRztZQUNuQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHO1lBQ25DLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUc7WUFDbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRztZQUNuQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDN0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFTSw2Q0FBdUI7OztJQUE5Qjs7WUFDSyxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDOztZQUV0QixDQUFDLEdBQUcsQ0FBQztRQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsV0FBVyxDQUFDO2FBQ2hDO1lBQ0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMzQztRQUVELE9BQU8sbUJBQUEsTUFBTSxFQUFpQixDQUFDO0lBQ2hDLENBQUM7SUFsRE0sK0JBQVMsR0FBYSxFQUFFLENBQUM7SUFFekIsK0JBQVMsR0FBK0IsRUFBRSxDQUFDOztnQkFMbEQsVUFBVTs7OztJQXVEWCw0QkFBQztDQUFBLEFBdkRELElBdURDO1NBdERZLHFCQUFxQjs7O0lBRWpDLGdDQUFnQzs7SUFFaEMsZ0NBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmFuZG9tU3RyaW5nR2VuZXJhdG9yIHtcblxuXHRzdGF0aWMgYnl0ZVRvSGV4OiBzdHJpbmdbXSA9IFtdO1xuXG5cdHN0YXRpYyBoZXhUb0J5dGU6IHsgW2hleDogc3RyaW5nXTogbnVtYmVyOyB9ID0ge307XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xuXHRcdFx0UmFuZG9tU3RyaW5nR2VuZXJhdG9yLmJ5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG5cdFx0XHRSYW5kb21TdHJpbmdHZW5lcmF0b3IuaGV4VG9CeXRlW1JhbmRvbVN0cmluZ0dlbmVyYXRvci5ieXRlVG9IZXhbaV1dID0gaTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgZ2VuZXJhdGUoKTogc3RyaW5nIHtcblxuXHRcdHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMiwgMTUpICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIsIDE1KTtcblx0fVxuXG5cdHN0YXRpYyBnZXRVdWlkVjQoKSB7XG5cdFx0Y29uc3QgcmVzdWx0OiBhbnkgPSB0aGlzLmdldFJhbmRvbUZyb21NYXRoUmFuZG9tKCk7XG5cblx0XHRyZXN1bHRbNl0gPSAocmVzdWx0WzZdICYgMHgwZikgfCAweDQwO1xuXHRcdHJlc3VsdFs4XSA9IChyZXN1bHRbOF0gJiAweDNmKSB8IDB4ODA7XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0c3RhdGljIHV1aWRUb1N0cmluZyhidWY6IEFycmF5PG51bWJlcj4sIG9mZnNldDogbnVtYmVyID0gMCkge1xuXHRcdGxldCBpID0gb2Zmc2V0O1xuXHRcdGxldCBidGggPSB0aGlzLmJ5dGVUb0hleDtcblx0XHRyZXR1cm4gYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuXHRcdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuXHRcdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuXHRcdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuXHRcdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuXHRcdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuXHRcdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuXHRcdFx0YnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV07XG5cdH1cblxuXHRzdGF0aWMgZ2V0UmFuZG9tRnJvbU1hdGhSYW5kb20oKTogQXJyYXk8bnVtYmVyPiB7XG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBBcnJheSgxNik7XG5cblx0XHRsZXQgciA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG5cdFx0XHRpZiAoKGkgJiAweDAzKSA9PT0gMCkge1xuXHRcdFx0XHRyID0gTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwO1xuXHRcdFx0fVxuXHRcdFx0cmVzdWx0W2ldID0gciA+Pj4gKChpICYgMHgwMykgPDwgMykgJiAweGZmO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQgYXMgQXJyYXk8bnVtYmVyPjtcblx0fVxuXG59XG4iXX0=