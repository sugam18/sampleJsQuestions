import { Component } from '@angular/core';

@Component({
  selector: 'answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {
    maxLimit : number = 33;
    part2 : string = '';
    max : number ;
    result :number;
    showAnswer1Btn : boolean = false;
    showAnswer2Btn : boolean = false;
    showAnswer3Btn : boolean = false;
    showAnswer1 : boolean = false;
    showAnswer2 : boolean = false;
    showAnswer3 : boolean = false;

    b1 : string = 'View';
    b2 : string = this.b1;
    b3 : string = this.b1;
    public getAnswer1() {
            var arr = [ 2,5,8,8,9,6,7,3];
            //document.write(arr[0]);
            arr.sort();
            var target = [5,11,4];
            for (var i=0; i<target.length; i++) {
            // document.write(i+"<br />");
            var c = target[i];
            if(arr.includes(target[i]))
            {
            // document.write(target[i]+"<br />");
            this.result = target[i];
            }
            else if(arr[0] >= c)
            {
            // document.write(arr[0]+"<br />");
            this.result = arr[0];
            }

            else if(arr[arr.length-1] <= c)
            {
            // document.write(arr[arr.length-1]+"<br />");
            this.result = arr[arr.length-1];
            }
            else
            {
                var j =0;
                while(arr[j]<=c)
            {
                j++;
            }
            var ldiff=c-arr[j-1];
            var udiff=arr[j]-c;
            if(ldiff<udiff)
            {
                this.result = arr[j-1];
            }
            else
            {
                this.result = arr[j];
            }
	    }
    }
    this.showAnswer1Btn = true;
    }
    public getAnswer2() {
        var first = 0;
        var second = 1;
        var total = 0;
        this.part2 = first+" "+second;
        for(var i = 2; ; i++){
            total = first + second;
            if(total > this.maxLimit)
            break;
            first = second;
            second  = total;
            this.part2+=" "+total;   
        }
        this.showAnswer2Btn = true;
    }
    public getAnswer3() {
        var arr = ['and','I','and','am','and', 'I','and'];
        var dummy;
        this.max = 0;
        for(var i =0;i<arr.length;i++){
        dummy = 0;
	    for (var j=i;j<arr.length;j++) {
            if (arr[i] === arr[j]) {
                dummy++;
            }
        }
        if (dummy > this.max) { this.max = dummy;}
        }
        this.showAnswer3Btn = true;
    }

    public viewAnswer1() {
        this.showAnswer1 = !this.showAnswer1;
        if(this.showAnswer1)  
            this.b1 = "Hide";
        else
            this.b1 = "View";
    }
    public viewAnswer2() {
        this.showAnswer2 = !this.showAnswer2;
        if(this.showAnswer2)  
            this.b2 = "Hide";
        else
            this.b2 = "View";
    }
    public viewAnswer3() {
        this.showAnswer3 = !this.showAnswer3;
        if(this.showAnswer3)  
            this.b3 = "Hide";
        else
            this.b3 = "View";
    }
}
