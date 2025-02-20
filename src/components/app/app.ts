import { IDataSources, IDataNews } from './../../options';
import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    public view: AppView;
    public controller: AppController;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const sources = document.querySelector('.sources')
        sources?.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data as IDataNews)));
        this.controller.getSources((data) => this.view.drawSources(data as IDataSources));
    }
}

export default App;