import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '762e469dced142a7a6a4fa3a44cb9635', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
