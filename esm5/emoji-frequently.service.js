import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var EmojiFrequentlyService = /** @class */ (function () {
    function EmojiFrequentlyService() {
        this.NAMESPACE = 'emoji-mart';
        this.frequently = null;
        this.defaults = {};
        this.initialized = false;
        this.DEFAULTS = [
            '+1',
            'grinning',
            'kissing_heart',
            'heart_eyes',
            'laughing',
            'stuck_out_tongue_winking_eye',
            'sweat_smile',
            'joy',
            'scream',
            'disappointed',
            'unamused',
            'weary',
            'sob',
            'sunglasses',
            'heart',
            'poop',
        ];
    }
    EmojiFrequentlyService.prototype.init = function () {
        this.frequently = JSON.parse(localStorage.getItem(this.NAMESPACE + ".frequently") || 'null');
        this.initialized = true;
    };
    EmojiFrequentlyService.prototype.add = function (emoji) {
        if (!this.initialized) {
            this.init();
        }
        if (!this.frequently) {
            this.frequently = this.defaults;
        }
        if (!this.frequently[emoji.id]) {
            this.frequently[emoji.id] = 0;
        }
        this.frequently[emoji.id] += 1;
        localStorage.setItem(this.NAMESPACE + ".last", emoji.id);
        localStorage.setItem(this.NAMESPACE + ".frequently", JSON.stringify(this.frequently));
    };
    EmojiFrequentlyService.prototype.get = function (perLine, totalLines) {
        var _this = this;
        if (!this.initialized) {
            this.init();
        }
        if (this.frequently === null) {
            this.defaults = {};
            var result = [];
            for (var i = 0; i < perLine; i++) {
                this.defaults[this.DEFAULTS[i]] = perLine - i;
                result.push(this.DEFAULTS[i]);
            }
            return result;
        }
        var quantity = perLine * totalLines;
        var frequentlyKeys = Object.keys(this.frequently);
        var sorted = frequentlyKeys
            .sort(function (a, b) { return _this.frequently[a] - _this.frequently[b]; })
            .reverse();
        var sliced = sorted.slice(0, quantity);
        var last = localStorage.getItem(this.NAMESPACE + ".last");
        if (last && !sliced.includes(last)) {
            sliced.pop();
            sliced.push(last);
        }
        return sliced;
    };
    EmojiFrequentlyService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EmojiFrequentlyService_Factory() { return new EmojiFrequentlyService(); }, token: EmojiFrequentlyService, providedIn: "root" });
    EmojiFrequentlyService = __decorate([
        Injectable({ providedIn: 'root' })
    ], EmojiFrequentlyService);
    return EmojiFrequentlyService;
}());
export { EmojiFrequentlyService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamktZnJlcXVlbnRseS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGN0cmwvbmd4LWVtb2ppLW1hcnQvIiwic291cmNlcyI6WyJlbW9qaS1mcmVxdWVudGx5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDO0lBQUE7UUFDRSxjQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLGVBQVUsR0FBcUMsSUFBSSxDQUFDO1FBQ3BELGFBQVEsR0FBOEIsRUFBRSxDQUFDO1FBQ3pDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGFBQVEsR0FBRztZQUNULElBQUk7WUFDSixVQUFVO1lBQ1YsZUFBZTtZQUNmLFlBQVk7WUFDWixVQUFVO1lBQ1YsOEJBQThCO1lBQzlCLGFBQWE7WUFDYixLQUFLO1lBQ0wsUUFBUTtZQUNSLGNBQWM7WUFDZCxVQUFVO1lBQ1YsT0FBTztZQUNQLEtBQUs7WUFDTCxZQUFZO1lBQ1osT0FBTztZQUNQLE1BQU07U0FDUCxDQUFDO0tBb0RIO0lBbERDLHFDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBSSxJQUFJLENBQUMsU0FBUyxnQkFBYSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUNELG9DQUFHLEdBQUgsVUFBSSxLQUFnQjtRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0IsWUFBWSxDQUFDLE9BQU8sQ0FBSSxJQUFJLENBQUMsU0FBUyxVQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELFlBQVksQ0FBQyxPQUFPLENBQUksSUFBSSxDQUFDLFNBQVMsZ0JBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFDRCxvQ0FBRyxHQUFILFVBQUksT0FBZSxFQUFFLFVBQWtCO1FBQXZDLGlCQThCQztRQTdCQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtRQUNELElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDbkIsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRWxCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9CO1lBQ0QsT0FBTyxNQUFNLENBQUM7U0FDZjtRQUVELElBQU0sUUFBUSxHQUFHLE9BQU8sR0FBRyxVQUFVLENBQUM7UUFDdEMsSUFBTSxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFcEQsSUFBTSxNQUFNLEdBQUcsY0FBYzthQUMxQixJQUFJLENBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDO2FBQ3ZELE9BQU8sRUFBRSxDQUFDO1FBQ2IsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFekMsSUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBSSxJQUFJLENBQUMsU0FBUyxVQUFPLENBQUMsQ0FBQztRQUU1RCxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O0lBekVVLHNCQUFzQjtRQURsQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsc0JBQXNCLENBMEVsQztpQ0EvRUQ7Q0ErRUMsQUExRUQsSUEwRUM7U0ExRVksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFbW9qaURhdGEgfSBmcm9tICdAY3RybC9uZ3gtZW1vamktbWFydC9uZ3gtZW1vamknO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEVtb2ppRnJlcXVlbnRseVNlcnZpY2Uge1xuICBOQU1FU1BBQ0UgPSAnZW1vamktbWFydCc7XG4gIGZyZXF1ZW50bHk6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gfCBudWxsID0gbnVsbDtcbiAgZGVmYXVsdHM6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcbiAgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgREVGQVVMVFMgPSBbXG4gICAgJysxJyxcbiAgICAnZ3Jpbm5pbmcnLFxuICAgICdraXNzaW5nX2hlYXJ0JyxcbiAgICAnaGVhcnRfZXllcycsXG4gICAgJ2xhdWdoaW5nJyxcbiAgICAnc3R1Y2tfb3V0X3Rvbmd1ZV93aW5raW5nX2V5ZScsXG4gICAgJ3N3ZWF0X3NtaWxlJyxcbiAgICAnam95JyxcbiAgICAnc2NyZWFtJyxcbiAgICAnZGlzYXBwb2ludGVkJyxcbiAgICAndW5hbXVzZWQnLFxuICAgICd3ZWFyeScsXG4gICAgJ3NvYicsXG4gICAgJ3N1bmdsYXNzZXMnLFxuICAgICdoZWFydCcsXG4gICAgJ3Bvb3AnLFxuICBdO1xuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5mcmVxdWVudGx5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLk5BTUVTUEFDRX0uZnJlcXVlbnRseWApIHx8ICdudWxsJyk7XG4gICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG4gIH1cbiAgYWRkKGVtb2ppOiBFbW9qaURhdGEpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZnJlcXVlbnRseSkge1xuICAgICAgdGhpcy5mcmVxdWVudGx5ID0gdGhpcy5kZWZhdWx0cztcbiAgICB9XG4gICAgaWYgKCF0aGlzLmZyZXF1ZW50bHlbZW1vamkuaWRdKSB7XG4gICAgICB0aGlzLmZyZXF1ZW50bHlbZW1vamkuaWRdID0gMDtcbiAgICB9XG4gICAgdGhpcy5mcmVxdWVudGx5W2Vtb2ppLmlkXSArPSAxO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy5OQU1FU1BBQ0V9Lmxhc3RgLCBlbW9qaS5pZCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7dGhpcy5OQU1FU1BBQ0V9LmZyZXF1ZW50bHlgLCBKU09OLnN0cmluZ2lmeSh0aGlzLmZyZXF1ZW50bHkpKTtcbiAgfVxuICBnZXQocGVyTGluZTogbnVtYmVyLCB0b3RhbExpbmVzOiBudW1iZXIpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mcmVxdWVudGx5ID09PSBudWxsKSB7XG4gICAgICB0aGlzLmRlZmF1bHRzID0ge307XG4gICAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwZXJMaW5lOyBpKyspIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0c1t0aGlzLkRFRkFVTFRTW2ldXSA9IHBlckxpbmUgLSBpO1xuICAgICAgICByZXN1bHQucHVzaCh0aGlzLkRFRkFVTFRTW2ldKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgY29uc3QgcXVhbnRpdHkgPSBwZXJMaW5lICogdG90YWxMaW5lcztcbiAgICBjb25zdCBmcmVxdWVudGx5S2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZnJlcXVlbnRseSk7XG5cbiAgICBjb25zdCBzb3J0ZWQgPSBmcmVxdWVudGx5S2V5c1xuICAgICAgLnNvcnQoKGEsIGIpID0+IHRoaXMuZnJlcXVlbnRseVthXSAtIHRoaXMuZnJlcXVlbnRseVtiXSlcbiAgICAgIC5yZXZlcnNlKCk7XG4gICAgY29uc3Qgc2xpY2VkID0gc29ydGVkLnNsaWNlKDAsIHF1YW50aXR5KTtcblxuICAgIGNvbnN0IGxhc3QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHt0aGlzLk5BTUVTUEFDRX0ubGFzdGApO1xuXG4gICAgaWYgKGxhc3QgJiYgIXNsaWNlZC5pbmNsdWRlcyhsYXN0KSkge1xuICAgICAgc2xpY2VkLnBvcCgpO1xuICAgICAgc2xpY2VkLnB1c2gobGFzdCk7XG4gICAgfVxuICAgIHJldHVybiBzbGljZWQ7XG4gIH1cbn1cbiJdfQ==