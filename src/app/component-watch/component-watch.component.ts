import { Component, OnDestroy } from '@angular/core';
import { Subscription, timer, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-component-watch',
  templateUrl: './component-watch.component.html',
  styleUrls: ['./component-watch.component.css']
})

export class ComponentWatchComponent implements OnDestroy{

  private subscriptions: Subscription = new Subscription();
  private isRunning: boolean = false;
  private time: BehaviorSubject<number> = new BehaviorSubject(0);
  private clickTimer: any = null;

  public displayTimer: string = '00:00';
  public startText = 'Start';
  public waitText = 'Wait';
  public resetText = 'Reset';

  toggleTimer() {
    this.isRunning = !this.isRunning;
    
    if(this.isRunning) {
      this.startTimer();
      return;
    } 
    this.stopTimer();
    this.time.next(0);
  }

  stopwatch() {
    this.subscriptions = timer(0, 1000).subscribe(() => {
      this.getDisplayTimer(this.time.value);
      this.time.next(this.time.value+1)
    });
  }

  startTimer() { 
    this.stopwatch();
    this.startText = 'Stop';
  }

  stopTimer() {
    this.startText = 'Start';
    this.ngOnDestroy();
    this.isRunning = false;
  }

  waitTimer() {
    this.dbClick();
  }

  dbClick() {
    if(this.clickTimer == null){
      this.clickTimer = setTimeout( () => {
        this.clickTimer = null;
      }, 500)
    } else {
      clearTimeout(this.clickTimer);
      this.clickTimer = null;
      this.stopTimer();
    }
  }

  resetTimer() {
    this.time.next(0);
    if(!this.isRunning){
      this.isRunning = true;
      this.startTimer();
    }
  }

  getDisplayTimer(time: number) {
    let minutes =  Math.floor(time % 3600 / 60);
    let seconds = Math.floor(time % 3600 % 60);

    const checkZero = (num:number): string => {
      if (Number(num) < 10) {
        return '0' + num;
      } 
        return '' + num;
      
    }
    this.displayTimer = `${checkZero(minutes)}:${checkZero(seconds)}`;
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe(); 
  }
}
        