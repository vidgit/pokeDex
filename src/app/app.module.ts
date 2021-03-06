import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { ServicesModule } from "./services/services.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, ServicesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
