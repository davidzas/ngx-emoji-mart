import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { AnchorsComponent } from './anchors.component';
import { CategoryComponent } from './category.component';
import { PickerComponent } from './picker.component';
import { PreviewComponent } from './preview.component';
import { SearchComponent } from './search.component';
import { SkinComponent } from './skins.component';
var PickerModule = /** @class */ (function () {
    function PickerModule() {
    }
    PickerModule = __decorate([
        NgModule({
            imports: [CommonModule, FormsModule, EmojiModule],
            exports: [
                PickerComponent,
                AnchorsComponent,
                CategoryComponent,
                SearchComponent,
                PreviewComponent,
                SkinComponent,
            ],
            declarations: [
                PickerComponent,
                AnchorsComponent,
                CategoryComponent,
                SearchComponent,
                PreviewComponent,
                SkinComponent,
            ],
        })
    ], PickerModule);
    return PickerModule;
}());
export { PickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0LyIsInNvdXJjZXMiOlsicGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQXFCbEQ7SUFBQTtJQUEyQixDQUFDO0lBQWYsWUFBWTtRQW5CeEIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUM7WUFDakQsT0FBTyxFQUFFO2dCQUNQLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixpQkFBaUI7Z0JBQ2pCLGVBQWU7Z0JBQ2YsZ0JBQWdCO2dCQUNoQixhQUFhO2FBQ2Q7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osZUFBZTtnQkFDZixnQkFBZ0I7Z0JBQ2hCLGlCQUFpQjtnQkFDakIsZUFBZTtnQkFDZixnQkFBZ0I7Z0JBQ2hCLGFBQWE7YUFDZDtTQUNGLENBQUM7T0FDVyxZQUFZLENBQUc7SUFBRCxtQkFBQztDQUFBLEFBQTVCLElBQTRCO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEVtb2ppTW9kdWxlIH0gZnJvbSAnQGN0cmwvbmd4LWVtb2ppLW1hcnQvbmd4LWVtb2ppJztcbmltcG9ydCB7IEFuY2hvcnNDb21wb25lbnQgfSBmcm9tICcuL2FuY2hvcnMuY29tcG9uZW50JztcbmltcG9ydCB7IENhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSAnLi9jYXRlZ29yeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFByZXZpZXdDb21wb25lbnQgfSBmcm9tICcuL3ByZXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IFNlYXJjaENvbXBvbmVudCB9IGZyb20gJy4vc2VhcmNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTa2luQ29tcG9uZW50IH0gZnJvbSAnLi9za2lucy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgRW1vamlNb2R1bGVdLFxuICBleHBvcnRzOiBbXG4gICAgUGlja2VyQ29tcG9uZW50LFxuICAgIEFuY2hvcnNDb21wb25lbnQsXG4gICAgQ2F0ZWdvcnlDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIFByZXZpZXdDb21wb25lbnQsXG4gICAgU2tpbkNvbXBvbmVudCxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgUGlja2VyQ29tcG9uZW50LFxuICAgIEFuY2hvcnNDb21wb25lbnQsXG4gICAgQ2F0ZWdvcnlDb21wb25lbnQsXG4gICAgU2VhcmNoQ29tcG9uZW50LFxuICAgIFByZXZpZXdDb21wb25lbnQsXG4gICAgU2tpbkNvbXBvbmVudCxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUGlja2VyTW9kdWxlIHt9XG4iXX0=