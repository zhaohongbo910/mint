    import Vue from 'vue'
	import { Button, Cell } from 'mint-ui'
	import { Navbar } from 'mint-ui';
	import { Header } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Tabbar } from 'mint-ui';
	import { TabItem } from 'mint-ui';
	import { Lazyload } from 'mint-ui';

	import { Search } from 'mint-ui';
	import { TabContainer, TabContainerItem } from 'mint-ui';

    Vue.component(TabContainer.name, TabContainer);

    Vue.component(TabContainerItem.name, TabContainerItem);

    Vue.component(Tabbar.name, Tabbar);
    Vue.component(TabItem.name, TabItem);
	Vue.component(Header.name, Header);
	Vue.component(Navbar.name, Navbar);
	Vue.component(Button.name, Button)
	Vue.component(Cell.name, Cell)
	Vue.component(Toast.name, Toast)

	Vue.use(Lazyload)

	

   Vue.component(Search.name, Search);
