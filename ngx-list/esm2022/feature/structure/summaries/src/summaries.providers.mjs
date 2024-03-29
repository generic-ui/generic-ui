import { SUMMARIES_CALCULATORS } from '../../../../core/structure/summaries/src/domain/calculation/summaries.calculators.token';
export function provideSummariesCalculator(clazz) {
    return {
        provide: SUMMARIES_CALCULATORS,
        useClass: clazz,
        multi: true
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyaWVzLnByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2J1aWxkLWNsaS9wcm9qZWN0cy9uZ3gtbGlzdC9zcmMvZmVhdHVyZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9zdW1tYXJpZXMucHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlGQUF5RixDQUFDO0FBR2hJLE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxLQUFnQjtJQUMxRCxPQUFPO1FBQ04sT0FBTyxFQUFFLHFCQUFxQjtRQUM5QixRQUFRLEVBQUUsS0FBSztRQUNmLEtBQUssRUFBRSxJQUFJO0tBQ1gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU1VNTUFSSUVTX0NBTENVTEFUT1JTIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zdHJ1Y3R1cmUvc3VtbWFyaWVzL3NyYy9kb21haW4vY2FsY3VsYXRpb24vc3VtbWFyaWVzLmNhbGN1bGF0b3JzLnRva2VuJztcblxuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZVN1bW1hcmllc0NhbGN1bGF0b3IoY2xheno6IFR5cGU8YW55Pik6IFByb3ZpZGVyIHtcblx0cmV0dXJuIHtcblx0XHRwcm92aWRlOiBTVU1NQVJJRVNfQ0FMQ1VMQVRPUlMsXG5cdFx0dXNlQ2xhc3M6IGNsYXp6LFxuXHRcdG11bHRpOiB0cnVlXG5cdH07XG59XG4iXX0=