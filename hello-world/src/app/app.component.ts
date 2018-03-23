import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  title = 'World';
  selected_color: string;
  show_image: boolean;
  colors: Array<string>;

  source: string;

  constructor()
  {
  	//https://www.apple.com/apple-events/september-2017/meta/og.png?201711031341
  	this.show_image = true;
  	this.source = 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201803071433';
  	this.colors = [ 'Red', 'Blue', 'Green', 'Black', 'White' , 'Yellow'];
  	this.selected_color = 'Red';
  }

  showHideImage()
  {
  	this.show_image = !this.show_image
  }

  toggleImage()
  {
  	this.source = 'https://www.apple.com/apple-events/september-2017/meta/og.png?201711031341';
  }


  showAlert()
  {
  	//alert('Showing Text on the console');
  }

  showAlert2()
  {
  	console.log('Showing Text on the console');
  }

}
