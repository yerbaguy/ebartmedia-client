import { MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbar } from '@angular/material';
import { NgModule } from '@angular/core';

import {MatSidenavModule} from '@angular/material/sidenav';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatMenuModule} from '@angular/material/menu';

import {MatCardModule} from '@angular/material/card';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatTabsModule} from '@angular/material/tabs';

@NgModule({

  imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatCardModule, MatInputModule, MatGridListModule, MatTabsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatCardModule, MatInputModule, MatGridListModule, MatTabsModule],

})

export class MaterialModule {}