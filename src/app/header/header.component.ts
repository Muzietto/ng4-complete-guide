import { Component, EventEmitter, Output } from "@angular/core";
import { LoggingService } from '../shared/logging.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    providers: [],
})
export class HeaderComponent {
    @Output()
    featureSelected = new EventEmitter<string>();

    constructor(private logger: LoggingService) {}

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
        this.logger.log(`A feature was selected: ${feature}`);
    }
}