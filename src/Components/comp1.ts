import * as ko from 'knockout'

export class hello
{
    public Register() {

        ko.components.register("hello", {
            viewModel: function (params:any) {
                this.params = params.message;
            },
            template: 
            `<div>Hello from me</div>`
        });
    }
    constructor(){}
}