import { Component } from '@angular/core';

@Component({
    selector: 'tut-ngIf',
    template: `
        <h1> ngIf </h1>
        <button (click) = "showOrHide()"> Show / Hide </button>
        <div *ngIf = "show; then thenBlock; else elseBlock"></div>
        <br>
        <ng-template #thenBlock> 
            <h1>Show</h1>
        </ng-template>
        <ng-template #elseBlock>
            <h1>Hide</h1>
        </ng-template>
    `,
    styles: []
})

export class ngIfComponent {
    public show = true

    public showOrHide(){
        this.show = (this.show)? false : true
    }
}


@Component({
    selector: 'tut-ngFor',
    template: `
        <h1> ngFor </h1>
        <ul>
            <li *ngFor = "let item of ['A', 'B', 'C']">{{item}}</li>
        </ul>
        <ul>
            <li *ngFor = "let item of items" > {{item}}</li>
        </ul>
        <!-- <input (change) = "onInput($event)"> -->
        <input #input1>
        <button (click) = "onInput(input1.value); input1.value = ''">Add</button>
    `,
    styles: []
})
export class ngForComponent {
    public items = ['A', 'B', 'C']
    /*
    onInput(e:Event){
        const target = e.target as HTMLInputElement
        this.items.push(target.value)
    }
    */
    onInput(value:string){
        this.items.push(value)
    }
}