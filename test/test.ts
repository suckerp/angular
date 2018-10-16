class ToDoComponent {
    public items = []
    
    public onInput(value:string){
      if (value.length>0){
        this.items.push({
          text:value,
          done:false,
          color:'#'+Math.floor(Math.random()*16777215).toString(16)
        })
        //window.localStorage.setItem("table", JSON.stringify(this.items))
      }
    }

    public onDelete(index:number){
      this.items.splice(index,1)
    }

    public onStrike(index:number){
      if (this.items[index].done == true){
         this.items[index].done = false
      } else {
        this.items[index].done = true
      }
       
    }

    /*ngOnInit(){
      const listString = window.localStorage.getItem("table") || "[]"
      this.items = JSON.parse(listString)
    }*/
}

const temp = new ToDoComponent()

temp.onInput("test")
temp.onInput("test1")
temp.onInput("test2")
temp.onInput("test3")
console.log(temp)

temp.onDelete(3)
console.log(temp)

temp.onStrike(0)
console.log(temp)
