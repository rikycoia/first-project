import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { path: '',
  loadChildren: () => import('./home/home.module')
  .then(m => m.HomeModule)
},

  { path: 'home',
    loadChildren: () => import('./home/home.module')
    .then(m => m.HomeModule)
  },

  { path: 'about',
    loadChildren: () => import('./about/about.module')
    .then(m => m.AboutModule)
  },

  { path: 'contact',
    loadChildren: () => import('./contact/contact.module')
    .then(m => m.ContactModule)
  },

  { path: 'posts',
   loadChildren: () => import('./posts/posts.module')
   .then(m => m.PostsModule)
  },

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
