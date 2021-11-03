import { Optional } from '@generic-ui/hermes';
export class FieldMatchers {
    constructor(matcher, sortMatcher, searchMatcher) {
        this.matcher = matcher;
        this.sortMatcher = sortMatcher;
        this.searchMatcher = searchMatcher;
    }
    getMatcher() {
        return Optional.of(this.matcher);
    }
    getSortMatcher() {
        let matcher;
        if (this.sortMatcher) {
            matcher = this.sortMatcher;
        }
        if (this.matcher) {
            matcher = this.matcher;
        }
        return Optional.of(matcher);
    }
    getSearchMatcher() {
        let matcher;
        if (this.searchMatcher) {
            matcher = this.searchMatcher;
        }
        if (this.matcher) {
            matcher = this.matcher;
        }
        return Optional.of(matcher);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQubWF0Y2hlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9idWlsZC1jbGkvcHJvamVjdHMvbmd4LWdyaWQvc3JjL3N0cnVjdHVyZS9maWVsZC9jb3JlL2RvbWFpbi9tYXRjaGVyL2ZpZWxkLm1hdGNoZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUk5QyxNQUFNLE9BQU8sYUFBYTtJQUV6QixZQUE2QixPQUEwQixFQUNuQyxXQUE4QixFQUM5QixhQUFnQztRQUZ2QixZQUFPLEdBQVAsT0FBTyxDQUFtQjtRQUNuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFDOUIsa0JBQWEsR0FBYixhQUFhLENBQW1CO0lBQ3BELENBQUM7SUFFRCxVQUFVO1FBQ1QsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsY0FBYztRQUViLElBQUksT0FBTyxDQUFDO1FBRVosSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQzNCO1FBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO1FBRUQsT0FBTyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxnQkFBZ0I7UUFFZixJQUFJLE9BQU8sQ0FBQztRQUVaLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUM3QjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtRQUVELE9BQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJ0BnZW5lcmljLXVpL2hlcm1lcyc7XG5cbmltcG9ydCB7IEZpZWxkTWF0Y2hlclR5cGUgfSBmcm9tICcuL2ZpZWxkLm1hdGNoZXIudHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBGaWVsZE1hdGNoZXJzIHtcblxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IG1hdGNoZXI/OiBGaWVsZE1hdGNoZXJUeXBlLFxuXHRcdFx0XHRwcml2YXRlIHJlYWRvbmx5IHNvcnRNYXRjaGVyPzogRmllbGRNYXRjaGVyVHlwZSxcblx0XHRcdFx0cHJpdmF0ZSByZWFkb25seSBzZWFyY2hNYXRjaGVyPzogRmllbGRNYXRjaGVyVHlwZSkgeyAvLyBUT0RPXG5cdH1cblxuXHRnZXRNYXRjaGVyKCk6IE9wdGlvbmFsPEZpZWxkTWF0Y2hlclR5cGU+IHtcblx0XHRyZXR1cm4gT3B0aW9uYWwub2YodGhpcy5tYXRjaGVyKTtcblx0fVxuXG5cdGdldFNvcnRNYXRjaGVyKCk6IE9wdGlvbmFsPEZpZWxkTWF0Y2hlclR5cGU+IHtcblxuXHRcdGxldCBtYXRjaGVyO1xuXG5cdFx0aWYgKHRoaXMuc29ydE1hdGNoZXIpIHtcblx0XHRcdG1hdGNoZXIgPSB0aGlzLnNvcnRNYXRjaGVyO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLm1hdGNoZXIpIHtcblx0XHRcdG1hdGNoZXIgPSB0aGlzLm1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIE9wdGlvbmFsLm9mKG1hdGNoZXIpO1xuXHR9XG5cblx0Z2V0U2VhcmNoTWF0Y2hlcigpOiBPcHRpb25hbDxGaWVsZE1hdGNoZXJUeXBlPiB7XG5cblx0XHRsZXQgbWF0Y2hlcjtcblxuXHRcdGlmICh0aGlzLnNlYXJjaE1hdGNoZXIpIHtcblx0XHRcdG1hdGNoZXIgPSB0aGlzLnNlYXJjaE1hdGNoZXI7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMubWF0Y2hlcikge1xuXHRcdFx0bWF0Y2hlciA9IHRoaXMubWF0Y2hlcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gT3B0aW9uYWwub2YobWF0Y2hlcik7XG5cdH1cbn1cbiJdfQ==