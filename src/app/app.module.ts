import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreatureConfigurationComponent } from './creature-configuration/creature-configuration.component';
import { MutationConfigurationComponent } from './mutation-configuration/mutation-configuration.component';

@NgModule({
    declarations: [
        AppComponent,
        CreatureConfigurationComponent,
        MutationConfigurationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatSelectModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
