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
let PickerModule = class PickerModule {
};
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
export { PickerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjdHJsL25neC1lbW9qaS1tYXJ0LyIsInNvdXJjZXMiOlsicGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQXFCbEQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtDQUFHLENBQUE7QUFBZixZQUFZO0lBbkJ4QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQztRQUNqRCxPQUFPLEVBQUU7WUFDUCxlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGFBQWE7U0FDZDtRQUNELFlBQVksRUFBRTtZQUNaLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsYUFBYTtTQUNkO0tBQ0YsQ0FBQztHQUNXLFlBQVksQ0FBRztTQUFmLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBFbW9qaU1vZHVsZSB9IGZyb20gJ0BjdHJsL25neC1lbW9qaS1tYXJ0L25neC1lbW9qaSc7XG5pbXBvcnQgeyBBbmNob3JzQ29tcG9uZW50IH0gZnJvbSAnLi9hbmNob3JzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXRlZ29yeUNvbXBvbmVudCB9IGZyb20gJy4vY2F0ZWdvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcmV2aWV3Q29tcG9uZW50IH0gZnJvbSAnLi9wcmV2aWV3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWFyY2hDb21wb25lbnQgfSBmcm9tICcuL3NlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2tpbkNvbXBvbmVudCB9IGZyb20gJy4vc2tpbnMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIEVtb2ppTW9kdWxlXSxcbiAgZXhwb3J0czogW1xuICAgIFBpY2tlckNvbXBvbmVudCxcbiAgICBBbmNob3JzQ29tcG9uZW50LFxuICAgIENhdGVnb3J5Q29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBQcmV2aWV3Q29tcG9uZW50LFxuICAgIFNraW5Db21wb25lbnQsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFBpY2tlckNvbXBvbmVudCxcbiAgICBBbmNob3JzQ29tcG9uZW50LFxuICAgIENhdGVnb3J5Q29tcG9uZW50LFxuICAgIFNlYXJjaENvbXBvbmVudCxcbiAgICBQcmV2aWV3Q29tcG9uZW50LFxuICAgIFNraW5Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFBpY2tlck1vZHVsZSB7fVxuIl19