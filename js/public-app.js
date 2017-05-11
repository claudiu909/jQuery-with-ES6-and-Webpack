class PublicAppClass {
    constructor() {}

    init() {
        $('#content').html('<h1>Public App</h1>');
    }
}

export let PublicApp = new PublicAppClass();